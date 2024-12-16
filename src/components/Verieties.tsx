
import React from 'react';

function Varieties() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8">EDITORS PICK</h2>
      <p className="text-center mb-12">Problems trying to resolve the conflict between</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* MEN's Section */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <img src="./images/2148895190.jpg" alt="Men's Clothing" className="w-full h-64 object-cover rounded-t-lg transition-transform hover:scale-105 transition duration-300" />
          <h3 className="text-lg text-slate-700 font-bold mt-4">MENs</h3>
          <p className="text-sm text-gray-600 mt-2">Mens Clothing is Here!</p>
        </div>

        {/* WOMEN's Section */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <img src="/images/2150494598.jpg" alt="Women's Clothing" className="w-full h-64 object-cover rounded-t-lg  transtion-transform hover:scale-105 transition duration-300" />
          <h3 className="text-lg text-slate-700 font-bold mt-4">WOMEN</h3>
          <p className="text-sm text-gray-600 mt-2">Everything which a woman needs!</p>
        </div>

        {/* ACCESSORIES Section */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <img src="/images/accesories.jpg" alt="Accessories" className="w-full h-64 object-cover rounded-t-lg transition-transform hover:scale-105 transition duration-300" />
          <h3 className="text-lg text-slate-700 font-bold mt-4">ACCESSORIES</h3>
          <p className="text-sm text-gray-600 mt-2">Fashion as you Like!</p>
        </div>

        {/* KIDS Section */}
        <div className="bg-gray-100 rounded-lg shadow-md p-6">
          <img src="/images/kids.jpg" alt="Kids' Clothing" className="w-full h-64 object-cover rounded-t-lg transition-transform hover:scale-105 transition duration-300" />
          <h3 className="text-lg text-slate-700 font-bold mt-4">KIDS</h3>
          <p className="text-sm text-gray-600 mt-2">Cute Outfits for Kids.</p>
        </div>
      </div>
    </div>
  );
}

export default Varieties;