export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>

      <div className="space-y-4 text-gray-700">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:stecreditbridge@gmail.com" className="text-blue-600 hover:underline">
            stecreditbridge@gmail.com
          </a>
        </p>
        <p>
          <span className="font-semibold">Phone / WhatsApp:</span>{" "}
          <a href="tel:+212615258199" className="text-blue-600 hover:underline">
            +212 615-258199
          </a>
        </p>
        <p>
          <span className="font-semibold">Business Hours:</span> Mon–Fri 08:00–18:00 | Sat 08:00–12:00
        </p>
        <p>
          <span className="font-semibold">Location:</span> Morocco (nation-wide coverage)
        </p>
      </div>

      <div className="mt-8">
        <p className="text-xl font-semibold text-gray-900">Expertise. Leadership. Impact.</p>
      </div>
    </section>
  );
}
