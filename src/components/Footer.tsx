import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Bandage</h1>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/yasir.waleed.90" className="text-blue-500 hover:text-blue-700">
            <FaFacebook className='w-6 h-6'/>
            </a>
            <a href="https://github.com/stillYasir" className="text-blue-500 hover:text-blue-700">
            <FaGithub className='w-6 h-6'/>
            </a>
            <a href="https://www.instagram.com/still_yasir/" className="text-blue-500 hover:text-blue-700">
            <FaSquareInstagram className='w-6 h-6'/>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Company Info</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Carrier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">We are hiring</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-3">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Business Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">User Analytic</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Live Chat</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Unlimited Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">iOS & Android</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Watch a Demo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Customers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-3">Get In Touch</h4>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-sm mt-2">Subscribe to our newsletter</p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">Made With Love By Yasir All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;