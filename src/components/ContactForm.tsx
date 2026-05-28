"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendEmail } from "@/app/actions/sendEmail";

// Organized list with preferences at top and flags
const countryCodes = [
  { name: "us", code: "+1", flag: "🇺🇸" },
  { name: "de", code: "+49", flag: "🇩🇪" },
  { name: "ca", code: "+1", flag: "🇨🇦" },
  { name: "in", code: "+91", flag: "🇮🇳" },
  { name: "uk", code: "+44", flag: "🇬🇧" },
  { name: "mx", code: "+52", flag: "🇲🇽" },
  { name: "af", code: "+93", flag: "🇦🇫" }, { name: "al", code: "+355", flag: "🇦🇱" }, { name: "dz", code: "+213", flag: "🇩🇿" },
  { name: "as", code: "+1", flag: "🇦🇸" }, { name: "ad", code: "+376", flag: "🇦🇩" }, { name: "ao", code: "+244", flag: "🇦🇴" },
  { name: "ai", code: "+1", flag: "🇦🇮" }, { name: "ag", code: "+1", flag: "🇦🇬" }, { name: "ar", code: "+54", flag: "🇦🇷" },
  { name: "am", code: "+374", flag: "🇦🇲" }, { name: "aw", code: "+297", flag: "🇦🇼" }, { name: "au", code: "+61", flag: "🇦🇺" },
  { name: "at", code: "+43", flag: "🇦🇹" }, { name: "az", code: "+994", flag: "🇦🇿" }, { name: "bs", code: "+1", flag: "🇧🇸" },
  { name: "bh", code: "+973", flag: "🇧🇭" }, { name: "bd", code: "+880", flag: "🇧🇩" }, { name: "bb", code: "+1", flag: "🇧🇧" },
  { name: "by", code: "+375", flag: "🇧🇾" }, { name: "be", code: "+32", flag: "🇧🇪" }, { name: "bz", code: "+501", flag: "🇧🇿" },
  { name: "bj", code: "+229", flag: "🇧🇯" }, { name: "bm", code: "+1", flag: "🇧🇲" }, { name: "bt", code: "+975", flag: "🇧🇹" },
  { name: "bo", code: "+591", flag: "🇧🇴" }, { name: "ba", code: "+387", flag: "🇧🇦" }, { name: "bw", code: "+267", flag: "🇧🇼" },
  { name: "br", code: "+55", flag: "🇧🇷" }, { name: "bn", code: "+673", flag: "🇧🇳" }, { name: "bg", code: "+359", flag: "🇧🇬" },
  { name: "bf", code: "+226", flag: "🇧🇫" }, { name: "bi", code: "+257", flag: "🇧🇮" }, { name: "kh", code: "+855", flag: "🇰🇭" },
  { name: "cm", code: "+237", flag: "🇨🇲" }, { name: "cv", code: "+238", flag: "🇨🇻" }, { name: "ky", code: "+1", flag: "🇰🇾" },
  { name: "cf", code: "+236", flag: "🇨🇫" }, { name: "td", code: "+235", flag: "🇹🇩" }, { name: "cl", code: "+56", flag: "🇨🇱" },
  { name: "cn", code: "+86", flag: "🇨🇳" }, { name: "co", code: "+57", flag: "🇨🇴" }, { name: "km", code: "+269", flag: "🇰🇲" },
  { name: "cg", code: "+242", flag: "🇨🇬" }, { name: "ck", code: "+682", flag: "🇨🇰" }, { name: "cr", code: "+506", flag: "🇨🇷" },
  { name: "hr", code: "+385", flag: "🇭🇷" }, { name: "cu", code: "+53", flag: "🇨🇺" }, { name: "cy", code: "+357", flag: "🇨🇾" },
  { name: "cz", code: "+420", flag: "🇨🇿" }, { name: "dk", code: "+45", flag: "🇩🇰" }, { name: "dj", code: "+253", flag: "🇩🇯" },
  { name: "dm", code: "+1", flag: "🇩🇲" }, { name: "do", code: "+1", flag: "🇩🇴" }, { name: "ec", code: "+593", flag: "🇪🇨" },
  { name: "eg", code: "+20", flag: "🇪🇬" }, { name: "sv", code: "+503", flag: "🇸🇻" }, { name: "gq", code: "+240", flag: "🇬🇶" },
  { name: "er", code: "+291", flag: "🇪🇷" }, { name: "ee", code: "+372", flag: "🇪🇪" }, { name: "et", code: "+251", flag: "🇪🇹" },
  { name: "fj", code: "+679", flag: "🇫🇯" }, { name: "fi", code: "+358", flag: "🇫🇮" }, { name: "fr", code: "+33", flag: "🇫🇷" },
  { name: "ga", code: "+241", flag: "🇬🇦" }, { name: "gm", code: "+220", flag: "🇬🇲" }, { name: "ge", code: "+995", flag: "🇬🇪" },
  { name: "gh", code: "+233", flag: "🇬🇭" }, { name: "gr", code: "+30", flag: "🇬🇷" }, { name: "gd", code: "+1", flag: "🇬🇩" },
  { name: "gu", code: "+1", flag: "🇬🇺" }, { name: "gt", code: "+502", flag: "🇬🇹" }, { name: "gn", code: "+224", flag: "🇬🇳" },
  { name: "gw", code: "+245", flag: "🇬🇼" }, { name: "gy", code: "+592", flag: "🇬🇾" }, { name: "ht", code: "+509", flag: "🇭🇹" },
  { name: "hn", code: "+504", flag: "🇭🇳" }, { name: "hk", code: "+852", flag: "🇭🇰" }, { name: "hu", code: "+36", flag: "🇭🇺" },
  { name: "is", code: "+354", flag: "🇮🇸" }, { name: "id", code: "+62", flag: "🇮🇩" }, { name: "ir", code: "+98", flag: "🇮🇷" },
  { name: "iq", code: "+964", flag: "🇮🇶" }, { name: "ie", code: "+353", flag: "🇮🇪" }, { name: "il", code: "+972", flag: "🇮🇱" },
  { name: "it", code: "+39", flag: "🇮🇹" }, { name: "jm", code: "+1", flag: "🇯🇲" }, { name: "jp", code: "+81", flag: "🇯🇵" },
  { name: "jo", code: "+962", flag: "🇯🇴" }, { name: "kz", code: "+7", flag: "🇰🇿" }, { name: "ke", code: "+254", flag: "🇰🇪" },
  { name: "ki", code: "+686", flag: "🇰🇮" }, { name: "kp", code: "+850", flag: "🇰🇵" }, { name: "kr", code: "+82", flag: "🇰🇷" },
  { name: "kw", code: "+965", flag: "🇰🇼" }, { name: "kg", code: "+996", flag: "🇰🇬" }, { name: "la", code: "+856", flag: "🇱🇦" },
  { name: "lv", code: "+371", flag: "🇱🇻" }, { name: "lb", code: "+961", flag: "🇱🇧" }, { name: "ls", code: "+266", flag: "🇱🇸" },
  { name: "lr", code: "+231", flag: "🇱🇷" }, { name: "ly", code: "+218", flag: "🇱🇾" }, { name: "li", code: "+423", flag: "🇱🇮" },
  { name: "lt", code: "+370", flag: "🇱🇹" }, { name: "lu", code: "+352", flag: "🇱🇺" }, { name: "mo", code: "+853", flag: "🇲🇴" },
  { name: "mk", code: "+389", flag: "🇲🇰" }, { name: "mg", code: "+261", flag: "🇲🇬" }, { name: "mw", code: "+265", flag: "🇲🇼" },
  { name: "my", code: "+60", flag: "🇲🇾" }, { name: "mv", code: "+960", flag: "🇲🇻" }, { name: "ml", code: "+223", flag: "🇲🇱" },
  { name: "mt", code: "+356", flag: "🇲🇹" }, { name: "mh", code: "+692", flag: "🇲🇭" }, { name: "mr", code: "+222", flag: "🇲🇷" },
  { name: "mu", code: "+230", flag: "🇲🇺" }, { name: "md", code: "+373", flag: "🇲🇩" }, { name: "mc", code: "+377", flag: "🇲🇨" },
  { name: "mn", code: "+976", flag: "🇲🇳" }, { name: "me", code: "+382", flag: "🇲🇪" }, { name: "ms", code: "+1", flag: "🇲🇸" },
  { name: "ma", code: "+212", flag: "🇲🇦" }, { name: "mz", code: "+258", flag: "🇲🇿" }, { name: "mm", code: "+95", flag: "🇲🇲" },
  { name: "na", code: "+264", flag: "🇳🇦" }, { name: "nr", code: "+674", flag: "🇳🇷" }, { name: "np", code: "+977", flag: "🇳🇵" },
  { name: "nl", code: "+31", flag: "🇳🇱" }, { name: "nz", code: "+64", flag: "🇳🇿" }, { name: "ni", code: "+505", flag: "🇳🇮" },
  { name: "ne", code: "+227", flag: "🇳🇪" }, { name: "ng", code: "+234", flag: "🇳🇬" }, { name: "nu", code: "+683", flag: "🇳🇺" },
  { name: "no", code: "+47", flag: "🇳🇴" }, { name: "om", code: "+968", flag: "🇴🇲" }, { name: "pk", code: "+92", flag: "🇵🇰" },
  { name: "pw", code: "+680", flag: "🇵🇼" }, { name: "ps", code: "+970", flag: "🇵🇸" }, { name: "pa", code: "+507", flag: "🇵🇦" },
  { name: "pg", code: "+675", flag: "🇵🇬" }, { name: "py", code: "+595", flag: "🇵🇾" }, { name: "pe", code: "+51", flag: "🇵🇪" },
  { name: "ph", code: "+63", flag: "🇵🇭" }, { name: "pl", code: "+48", flag: "🇵🇱" }, { name: "pt", code: "+351", flag: "🇵🇹" },
  { name: "pr", code: "+1", flag: "🇵🇷" }, { name: "qa", code: "+974", flag: "🇶🇦" }, { name: "ro", code: "+40", flag: "🇷🇴" },
  { name: "ru", code: "+7", flag: "🇷🇺" }, { name: "rw", code: "+250", flag: "🇷🇼" }, { name: "kn", code: "+1", flag: "🇰🇳" },
  { name: "lc", code: "+1", flag: "🇱🇨" }, { name: "vc", code: "+1", flag: "🇻🇨" }, { name: "ws", code: "+685", flag: "🇼🇸" },
  { name: "sm", code: "+378", flag: "🇸🇲" }, { name: "st", code: "+239", flag: "🇸🇹" }, { name: "sa", code: "+966", flag: "🇸🇦" },
  { name: "sn", code: "+221", flag: "🇸🇳" }, { name: "rs", code: "+381", flag: "🇷🇸" }, { name: "sc", code: "+248", flag: "🇸🇨" },
  { name: "sl", code: "+232", flag: "🇸🇱" }, { name: "sg", code: "+65", flag: "🇸🇬" }, { name: "sk", code: "+421", flag: "🇸🇰" },
  { name: "si", code: "+386", flag: "🇸🇮" }, { name: "sb", code: "+677", flag: "🇸🇧" }, { name: "so", code: "+252", flag: "🇸🇴" },
  { name: "za", code: "+27", flag: "🇿🇦" }, { name: "es", code: "+34", flag: "🇪🇸" }, { name: "lk", code: "+94", flag: "🇱🇰" },
  { name: "sd", code: "+249", flag: "🇸🇩" }, { name: "sr", code: "+597", flag: "🇸🇷" }, { name: "sz", code: "+268", flag: "🇸🇿" },
  { name: "se", code: "+46", flag: "🇸🇪" }, { name: "ch", code: "+41", flag: "🇨🇭" }, { name: "sy", code: "+963", flag: "🇸🇾" },
  { name: "tw", code: "+886", flag: "🇹🇼" }, { name: "tj", code: "+992", flag: "🇹🇯" }, { name: "tz", code: "+255", flag: "🇹🇿" },
  { name: "th", code: "+66", flag: "🇹🇭" }, { name: "tg", code: "+228", flag: "🇹🇬" }, { name: "to", code: "+676", flag: "🇹🇴" },
  { name: "tt", code: "+1", flag: "🇹🇹" }, { name: "tn", code: "+216", flag: "🇹🇳" }, { name: "tr", code: "+90", flag: "🇹🇷" },
  { name: "tm", code: "+993", flag: "🇹🇲" }, { name: "tv", code: "+688", flag: "🇹🇻" }, { name: "ug", code: "+256", flag: "🇺🇬" },
  { name: "ua", code: "+380", flag: "🇺🇦" }, { name: "ae", code: "+971", flag: "🇦🇪" }, { name: "uy", code: "+598", flag: "🇺🇾" },
  { name: "uz", code: "+998", flag: "🇺🇿" }, { name: "vu", code: "+678", flag: "🇻🇺" }, { name: "ve", code: "+58", flag: "🇻🇪" },
  { name: "vn", code: "+84", flag: "🇻🇳" }, { name: "ye", code: "+967", flag: "🇾🇪" }, { name: "zm", code: "+260", flag: "🇿🇲" },
  { name: "zw", code: "+263", flag: "🇿🇼" }
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      await sendEmail(formData);
      setTimeout(() => setStatus("sent"), 3500);
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  const text = "send message";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-24 relative">
      <div className="grid md:grid-cols-2 gap-6">
        <input type="text" name="name" placeholder="your name" required className="bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-accent text-lg" disabled={status !== "idle"} />
        <input type="text" name="subject" placeholder="subject" required className="bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-accent text-lg" disabled={status !== "idle"} />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <input type="email" name="email" placeholder="your email" className="bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-accent text-lg" disabled={status !== "idle"} />
        <div className="flex gap-4 border-b border-foreground/20 focus-within:border-accent transition-colors overflow-hidden">
          <select 
            name="country_code"
            className="bg-transparent py-2 outline-none text-base cursor-pointer font-bold uppercase tracking-widest max-w-[120px]"
            disabled={status !== "idle"}
            defaultValue="us-+1"
          >
            {countryCodes.map((c, i) => (
              <option key={`${c.name}-${i}`} value={`${c.name}-${c.code}`} className="bg-background text-foreground">
                {c.flag} {c.name} {c.code}
              </option>
            ))}
          </select>
          <input 
            type="tel" 
            name="phone" 
            placeholder="phone (optional)" 
            className="bg-transparent py-2 outline-none text-lg flex-1 min-w-0" 
            disabled={status !== "idle"} 
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/[^0-9()+\-*ext. ]/gi, '');
            }}
          />
        </div>
      </div>

      <input type="text" name="website_url" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <textarea name="message" placeholder="your message" required className="bg-transparent border-b border-foreground/20 py-2 outline-none focus:border-accent text-lg h-32" disabled={status !== "idle"} />
      
      <div className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest opacity-40">attachments (optional)</span>
        <input 
          type="file" 
          name="attachment" 
          accept="image/*,.pdf"
          className="text-sm opacity-60 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:uppercase file:tracking-widest file:font-bold file:bg-foreground/10 file:text-foreground hover:file:bg-foreground/20 transition-colors"
          disabled={status !== "idle"}
        />
      </div>
      
      <div className="relative h-24 flex items-center">
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.button
              key="button"
              type="submit"
              exit={{ opacity: 0, x: -20 }}
              className="text-left font-bold text-lg hover:text-accent transition-colors flex items-center gap-2"
            >
              {text} →
            </motion.button>
          )}

          {status === "sending" && (
            <motion.div 
              key="sending"
              className="flex items-center relative w-full h-full"
            >
              <div className="flex">
                {text.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 0, opacity: 1, x: 0 }}
                    animate={{ 
                      y: [0, -60, 15],
                      x: [0, 80, 560 + (i * 2)],
                      opacity: [1, 1, 0],
                      scale: [1, 1.2, 0.2]
                    }}
                    transition={{ 
                      duration: 1.4, 
                      delay: i * 0.04,
                      times: [0, 0.4, 1],
                      ease: "easeInOut"
                    }}
                    className="inline-block whitespace-pre text-lg font-bold"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 550, y: 15, scale: 0.5 }}
                animate={{ 
                  opacity: [0, 1, 1, 1, 0],
                  x: [550, 550, 550, 1400, 1400],
                  scale: [0.5, 1.1, 1, 1, 1],
                  rotate: [0, 0, 0, -15, -15]
                }}
                transition={{ 
                  duration: 3,
                  times: [0, 0.1, 0.7, 0.9, 1],
                  ease: "easeInOut"
                }}
                className="absolute text-accent"
              >
                <svg width="60" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </motion.div>
            </motion.div>
          )}

          {status === "sent" && (
            <div className="flex flex-col gap-1">
              <motion.div
                key="sent-msg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-accent font-bold text-lg"
              >
                message sent!
              </motion.div>
              <motion.div
                key="touch-msg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-foreground font-bold text-lg"
              >
                i'll be in touch soon.
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
