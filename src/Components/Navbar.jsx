import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reservation", path: "/reservation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-orange-500">
            Foodies
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 font-medium hover:text-orange-500 ${
                    isActive ? "text-orange-500" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Button */}
            <Link
              to="/reservation"
              className="bg-orange-500 hover:bg-orange-600 transition px-5 py-2 rounded-lg"
            >
              Book Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-5 space-y-5">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-lg transition ${
                  isActive ? "text-orange-500" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/reservation"
            onClick={() => setOpen(false)}
            className="block text-center bg-orange-500 hover:bg-orange-600 transition px-5 py-3 rounded-lg"
          >
            Book Table
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
