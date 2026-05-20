const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Foodies Restaurant</h2>
          <p className="text-gray-400 text-sm leading-6">
            Taste the best food in town with fresh ingredients and
            professional chefs. Your satisfaction is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Menu</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📍 Sheikhupura, Punjab, Pakistan</li>
            <li>📞 +92 300 0000000</li>
            <li>✉️ info@foodies.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm">
        © 2026 Foodies Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;