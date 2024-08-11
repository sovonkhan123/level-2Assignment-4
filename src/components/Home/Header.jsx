import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white fixed opacity-70 z-30 w-full navbar p-3 flex items-center justify-between px-6 top-0">
      <div className="text-2xl font-bold">
        <img
          className="h-5/6 w-2/3"
          src="https://adventureshop.mt/cdn/shop/files/adventure-shop-30th-logo-screen-reversed.png?v=1702562827&width=390"
          alt=""
        />
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link className="hover:text-yellow-500" to="/">
          Home
        </Link>
        <Link className="hover:text-yellow-500" to="/aboutUs">
          About Us
        </Link>
        <Link className="hover:text-yellow-500" to="/products">
          Products
        </Link>
        {/* <Link className="hover:text-yellow-500" to="/checkout">
          Checkout
        </Link> */}
        <Link className="hover:text-yellow-500" to="/productManagement">
          Product Management
        </Link>
        <Link className="hover:text-yellow-500" to="/cart">
          <ShoppingCartIcon className="hover:bg-gray-700 hover:text-yellow-500 h-7 w-8"/>
        </Link>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
            <Link
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-yellow-500"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-yellow-500"
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-yellow-500"
              to="/products"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            {/* <Link
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-yellow-500"
              to="/checkout"
              onClick={() => setIsOpen(false)}
            >
              Checkout
            </Link> */}
            <Link
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-yellow-500"
              to="/productManagement"
              onClick={() => setIsOpen(false)}
            >
              Product Management
            </Link>
            <Link
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-yellow-500"
              to="/cart"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCartIcon className="h-7 w-8 hover:bg-gray-700 hover:text-yellow-500"/>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
