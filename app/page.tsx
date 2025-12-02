import Link from 'next/link'

export const metadata = {
  title: "CreditBridge - Professional Consulting Services",
  description: "Leading consulting firm helping businesses achieve their goals",
}

export default function Home(): JSX.Element {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Business with Expert Consulting
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Strategic solutions tailored to drive growth and maximize your potential
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Get Started
            </Link>
            <Link 
              href="/services" 
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CreditBridge?</h2>
            <p className="text-xl text-gray-600">We deliver results that matter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-semibold mb-3">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Make informed decisions with comprehensive analysis and strategic planning
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of success helping businesses achieve measurable growth
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Experienced consultants dedicated to your success every step of the way
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
