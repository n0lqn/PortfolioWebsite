export function ContactSection() {
  return (
    <section className="px-6 md:px-12 py-24 border-t border-foreground/10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-12">let's connect</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-lg opacity-80 leading-relaxed font-medium">
            i am currently open to discussing new projects, collaborations, or opportunities in electrical engineering, design, and infrastructure. feel free to reach out via email or connect with me on professional platforms.
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:nolanrgriffith@gmail.com" className="text-xl font-bold hover:text-accent transition-colors underline decoration-2 underline-offset-4">
              nolanrgriffith@gmail.com
            </a>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/nolan-griffith-759371217/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 font-bold transition-opacity">linkedin</a>
              <a href="https://github.com/n0lqn" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 font-bold transition-opacity">github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
