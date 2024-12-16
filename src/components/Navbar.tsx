import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-black-100 shadow">
      {/* Top Bar */}
      <div className="bg-black py-2">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-600">(225) 555-0118</span>
            <span className="text-sm text-gray-600">
              michelle.rivera@example.com
            </span>
            <span className="text-sm text-green-600 font-medium">
              Follow us and get a chance to win 80% off
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-600">Follow Us:</span>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/yasir.waleed.90" className="text-gray-600 hover:text-green-600">
              <FaFacebook className='w-6 h-6'/>
              </a>
              <a href="https://github.com/stillYasir" className="text-gray-600 hover:text-green-600">
              <FaGithub className='w-6 h-6'/>
              </a>
              <a href="https://www.instagram.com/still_yasir/" className="text-gray-600 hover:text-green-600">
              <FaSquareInstagram className='w-6 h-6'/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white-800">Bandage</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-600 ">
            <li>
              <a href="#" className="hover:text-green-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-green-600">
            Login / Register
          </a>
          <CiSearch className=" w-6 h-6 text-gray-600 hover:text-green-600" />
          <FaShoppingCart className=" w-6 h-6 text-gray-600 hover:text-green-600" />
          <CiHeart className=" w-6 h-6 text-gray-600 hover:text-green-600" />
          
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/bg.jpg')`, // Replace with your image path
      }}
    >
      <div className="container mx-auto px-6 text-left">
        <p className="uppercase text-white text-sm mb-3">Summer 2020</p>
        <h1 className="text-5xl font-bold text-white mb-5">New Collection</h1>
        <p className="text-lg text-white leading-relaxed mb-8">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-green-500 hover:bg-green-600 transition-colors text-white py-3 px-8 rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
