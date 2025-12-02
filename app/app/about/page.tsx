export const metadata = {
  title: "About Us - CreditBridge",
  description: "Learn more about CreditBridge and our mission",
}

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About CreditBridge</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner in business transformation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                CreditBridge is a leading consulting firm dedicated to helping businesses 
                navigate complex challenges and achieve sustainable growth. With years of 
                experience across multiple industries, we bring expertise, insight, and 
                innovation to every engagement.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of seasoned professionals combines deep industry knowledge with 
                cutting-edge methodologies to deliver solutions that drive real results. 
                We don't just advise—we partner with you to implement strategies that 
                transform your business.
              </p>
            </div>
            <div className="bg-blue-100 h-96 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🏢</span>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with strategic insights and practical solutions 
                that unlock their full potential and drive measurable success.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted consulting partner for businesses seeking 
                transformation, innovation, and sustained competitive advantage.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Constantly evolving to bring fresh perspectives
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Committed to delivering the highest quality
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-semibold text-gray-900 mb-2">Partnership</h4>
                <p className="text-gray-600 text-sm">
                  Building lasting relationships with our clients
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
                <p className="text-gray-600 text-sm">
                  Operating with transparency and honesty
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
