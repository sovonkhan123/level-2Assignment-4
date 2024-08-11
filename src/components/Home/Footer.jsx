import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Adventure Road</p>
            <p>Outdoor City, CA 98765</p>
            <p>Email: contact@campersshop.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Relevant Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center pt-6 mt-6 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Campers Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
