export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white mt-12">

      {/* Main Footer */}
      <div className="grid grid-cols-4 gap-10 px-10 py-12">

        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            ShopZone
          </h2>

          <p className="text-gray-300 leading-6">
            Your one-stop online shopping destination.
            Discover quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Products
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-bold mb-4">
            Customer Service
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                My Account
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Orders
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Shipping
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-300">
            <p>📍 New Delhi, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ support@shopzone.com</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="hover:text-gray-300"
            >
              Facebook
            </a>

            <a
              href="#"
              className="hover:text-gray-300"
            >
              Instagram
            </a>

            <a
              href="#"
              className="hover:text-gray-300"
            >
              X
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-900 px-10 py-5 text-center text-gray-400">
        <p>
          © 2026 ShopZone. All rights reserved.
        </p>
      </div>

    </footer>
  );
};