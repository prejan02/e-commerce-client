export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-8 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo / Brand */}
        <div>
          <h2 className="text-2xl font-bold">MyShop</h2>
          <p className="mt-3 text-sm text-gray-200">
            Your one-stop shop for amazing products at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@myshop.com</p>
          <p className="text-sm">Phone: +977-9800000000</p>
          <p className="text-sm">Address: Kathmandu, Nepal</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 border-t border-purple-500 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
