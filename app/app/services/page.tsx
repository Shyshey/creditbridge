import Link from 'next/link'

export const metadata = {
  title: "Our Services - CreditBridge",
  description: "Explore our comprehensive consulting services",
}

export default function Services() {
  const services = [
    {
      icon: "📈",
      title: "Business Strategy",
      description: "Develop comprehensive strategies aligned with your goals and market opportunities.",
      features: [
        "Market analysis and positioning",
        "Growth strategy development",
        "Competitive analysis",
        "Strategic planning workshops"
      ]
    },
    {
      icon: "💼",
      title: "Financial Consulting",
      description: "Expert guidance on financial planning, analysis, and optimization.",
      features: [
        "Financial modeling and forecasting",
        "Cost optimization",
        "Investment strategy",
        "Risk management"
      ]
    },
    {
      icon: "⚙️",
      title: "Operations Improvement",
      description: "Streamline operations and enhance efficiency across your organization.",
      features: [
        "Process optimization",
        "Supply chain management",
        "Quality assurance",
        "Performance metrics"
      ]
    },
    {
      icon: "👥",
      title: "Organizational Development",
      description: "Build high-performing teams and strengthen organizational capabilities.",
      features: [
        "Leadership development",
        "Change management",
        "Team building",
        "Culture transformation"
      ]
    },
    {
      icon: "💻",
      title: "Digital Transformation",
      description: "Navigate the digital landscape and leverage technology for growth.",
      features: [
        "Technology strategy",
        "Digital roadmap development",
        "System implementation",
        "Data analytics"
      ]
    },
    {
      icon: "🎯",
      title: "Marketing Strategy",
      description: "Create impactful marketing strategies that resonate with your audience.",
      features: [
        "Brand positioning",
        "Go-to-market strategy",
        "Customer acquisition",
        "Digital marketing"
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">
            Comprehensive consulting solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss which services are right for you
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
