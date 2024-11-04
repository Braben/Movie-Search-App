import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and About Section */}
          <div>
            <h2 className="text-white text-3xl font-extrabold mb-4">MyApp</h2>
            <p className="text-gray-400 leading-relaxed">
              Discover a world of movies and more. Stay entertained, informed,
              and connected with our curated content.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="hover:text-white transition duration-300">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/download" className="hover:text-white transition duration-300">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/forum" className="hover:text-white transition duration-300">
                  Forum
                </Link>
              </li>
              <li>
                <Link to="/signin" className="hover:text-white transition duration-300">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 mt-12"></div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-gray-500">
          <p>&copy; 2024 MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
