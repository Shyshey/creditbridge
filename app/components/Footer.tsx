export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">CreditBridge</h3>
            <p className="text-gray-400">
              Professional consulting services to help your business grow.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-400">About</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@creditbridge.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Business St, Suite 100</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CreditBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
