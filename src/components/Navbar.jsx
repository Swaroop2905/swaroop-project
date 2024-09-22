import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          {/* Logo / Website Name */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span className="text-black text-2xl font-bold">Printify</span>
            </div>
            {/* Nav links */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {['Catalog', 'How it Works', 'Pricing', 'Blog', 'Services', 'Use-cases', 'Need Help?'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-black px-3 py-2 text-sm font-medium hover:bg-green-500 hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Login/Signup Button */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="#"
              className="text-black bg-white  font-medium rounded-md px-4 py-2"
            >
              Login
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="#"
              className="text-black bg-green-400 border-black border-red-1   font-medium rounded-md px-4 py-2"
            >
              Signup
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Catalog', 'How it Works', 'Pricing', 'Blog', 'Services', 'Use-cases', 'Need Help?'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-black block px-3 py-2 text-base font-medium hover:bg-green-500"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
