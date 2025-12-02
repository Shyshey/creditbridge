const services = [
  {
    title: "Express Financial Audit",
    summary: "A rapid, high-impact assessment that reveals the true health of your business.",
    bullets: [
      "Clear analysis of your financial structure",
      "Evaluation of key Moroccan banking ratios",
      "Detection of hidden losses affecting performance",
      "Cash-flow diagnostics",
      "Immediate corrective-action plan"
    ]
  },
  {
    title: "Banking Relationship Outsourcing",
    summary: "We manage your entire relationship with financial institutions to improve access to credit and optimize banking conditions.",
    bullets: [
      "Preparation of professional credit applications",
      "Renegotiation of banking terms and conditions",
      "Debt-optimization strategies",
      "Continuous management of bank interactions"
    ]
  },
  {
    title: "Cost Optimization",
    summary: "Identify and eliminate unnecessary expenses to strengthen your bottom line.",
    bullets: [
      "Banking-fee reduction",
      "Insurance-cost benchmarking",
      "Payroll-efficiency reviews",
      "Process-streamlining diagnostics",
      "Performance-based remuneration models"
    ]
  },
  {
    title: "Business Model & Pricing Consulting",
    summary: "Bank-ready business plans and refined commercial strategies aligned with Moroccan financial requirements.",
    bullets: [
      "Ratios tailored to Moroccan banking standards",
      "Detailed amortization schedules & stress-testing",
      "Pricing-strategy development",
      "Average-ticket optimization"
    ]
  },
  {
    title: "Offer & Pricing Strategy",
    summary: "Optimize your commercial offering to strengthen sales performance.",
    bullets: [
      "Psychological-pricing tactics",
      "Average-basket optimization",
      "Competitor benchmarking"
    ]
  },
  {
    title: "Lead Processing & Client Qualification",
    summary: "A structured method to convert inquiries into revenue.",
    bullets: [
      "Solvency segmentation (solvent vs. non-solvent)",
      "Internal scoring system",
      "ROI-focused proposals"
    ]
  }
];

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Our Services</h1>
      <div className="grid gap-10">
        {services.map((s, idx) => (
          <div key={idx} className="border-l-4 border-blue-600 pl-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{s.title}</h2>
            <p className="text-gray-700 mb-3">{s.summary}</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-600">
              {s.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">All engagements are tailored to your size, sector, and strategic objectives.</p>
      </div>
    </section>
  );
}
