"use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const honeypot = formData.get("website_url") as string;
  const file = formData.get("attachment") as File;

  // 0. Anti-spam check (honeypot)
  if (honeypot) {
    console.log("Spam detected from bot filling honeypot field.");
    return;
  }

  // Handle attachment if exists
  let attachments = [];
  if (file && file.size > 0) {
    const buffer = Buffer.from(await file.arrayBuffer());
    attachments.push({
      filename: file.name,
      content: buffer,
    });
  }

  // 1. Send email to YOU
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "nolanrgriffith@gmail.com",
    subject: `New Message from ${name}`,
    text: message,
    replyTo: email,
    attachments: attachments,
  });

  // 2. Send AUTO-REPLY to THEM
  await resend.emails.send({
    from: "Nolan Griffith <nolanrgriffith@gmail.com>",
    to: email,
    subject: "Message Received",
    text: "Hi! I've received your message and will get back to you shortly. Best, Nolan.",
  });
}
