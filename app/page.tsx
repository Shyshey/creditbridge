import Link from 'next/link'

export const metadata = {
  title: "CreditBridge - Professional Consulting Services",
  description: "Leading consulting firm helping businesses achieve their goals",
}

export default function Home(): JSX.Element {
  return (
    <div>
      {/* Hero Section with Background Pattern */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with<br />
            <span className="text-blue-200">Expert Consulting</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto">
            Strategic solutions tailored to drive growth and maximize your potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg text-lg"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CreditBridge?</h2>
            <p className="text-xl text-gray-600">We deliver results that matter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-blue-100">
              <div className="text-blue-600 text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Make informed decisions with comprehensive analysis and strategic planning
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-blue-100">
              <div className="text-blue-600 text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-600">
                Track record of success helping businesses achieve measurable growth
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-blue-100">
              <div className="text-blue-600 text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">
                Experienced consultants dedicated to your success every step of the way
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div>
