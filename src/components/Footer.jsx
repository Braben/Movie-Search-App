import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-between">
          {/* Logo and Brief */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-white text-2xl font-bold mb-2">MyApp</h2>
            <p className="text-gray-400">
              Discover a world of movies and more. Stay entertained, informed,
              and connected.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-white text-xl mb-3">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-white text-xl mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p>&copy; 2024 MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
