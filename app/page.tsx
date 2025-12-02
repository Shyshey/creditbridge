export default function Home() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">CreditBridge</h1>
        <p className="text-lg md:text-xl mb-10">
          Expertise. Leadership. Impact. <br className="hidden sm:block" />
          Bridging the gap between your goals and the right investment opportunities.
        </p>
        <nav className="flex flex-col sm:flex-row gap-6 justify-center text-lg">
          <a href="/about" className="hover:underline">About</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </section>
  );
}
