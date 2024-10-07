import { useState } from "react";


export default function Navbar() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-black border-b-2 font-SulphurPoint">
        <div className="flex justify-between items-center p-5">
          {/* Brand Section */}
          <div className="text-2xl font-bold text-black">Helix</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4">
            <a href="#home" className="text-lg font-semibold text-black hover:text-primary delay-200 py-2">SERVICES</a>
            <a href="#about" className="text-lg font-semibold text-black hover:text-primary delay-200 py-2">ABOUT</a>
            <a href="#services" className="text-lg font-semibold text-black hover:text-primary delay-200 py-2">FAQ</a>
            <a href="#contact" className="text-lg font-semibold text-black hover:text-primary delay-200 py-2">BLOG</a>
            <a href="#contact" className="text-lg font-semibold text-black hover:text-primary delay-200 py-2">CONTACT</a>
          </div>

          {/* Burger Icon for Mobile */}
          <div className="flex space-x-4 lg:hidden">
            <button
              className="text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* Burger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when the burger icon is clicked) */}
        {isMenuOpen && (
          <div className="lg:hidden p-2 m-3">
            <a href="#home" className="block text-lg font-semibold text-black py-2 hover:text-primary">
              SERVICES
            </a>
            <a href="#about" className="block text-lg font-semibold text-black py-2  hover:text-primary">
              ABOUT
            </a>
            <a href="#services" className="block text-lg font-semibold text-black py-2  hover:text-primary">
              FAQ
            </a>
            <a href="#blog" className="block text-lg font-semibold text-black py-2 hover:text-primary">
              BLOG
            </a>
            <a href="#contact" className="block text-lg font-semibold text-black py-2 hover:text-primary">
              CONTACT
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
