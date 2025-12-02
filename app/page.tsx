export default function Home() {
  const sections = [
    { id: 'about', title: 'About CreditBridge' },
    { id: 'services', title: 'Our Services' },
    { id: 'contact', title: 'Contact Us' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-fixed"
             style={{ backgroundImage: "url('/images/background.png')" }}>
      {/* semi-transparent overlay so text pops */}
      <div className="absolute inset-0 bg-black/40" />

      {/* top bar: logo left / Contact right */}
      <header className="w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <img src="/logo.png" alt="CreditBridge" className="h-10" />
        <a href="/contact"
           className="px-5 py-2 border-2 border-white text-white rounded hover:bg-white hover:text-black transition">
          Contact Us
        </a>
      </header>

      {/* centered list of sections */}
      <main className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">CreditBridge</h1>
        <ul className="space-y-6">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`/${s.id}`}
                 className="inline-block text-xl md:text-2xl font-medium hover:underline">
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </main>

      {/* push everything up a bit */}
      <div className="flex-grow" />
    </section>
  );
}
