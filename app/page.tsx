export default function Home() {
  const nav = [
    { label: 'About CreditBridge', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* subtle dark overlay so text pops */}
      <div className="absolute inset-0 bg-black/50" />

      {/* centre content only */}
      <main className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">CreditBridge</h1>
        <div className="grid gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="block text-xl md:text-2xl font-medium border border-white/40 rounded-lg px-8 py-4 hover:bg-white/10 transition"
            >
              {n.label}
            </a>
          ))}
        </div>
      </main>

      {/* pushes everything up slightly */}
      <div className="flex-grow" />
    </section>
  );
}
