import React from "react";

const Offer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-green-700 text-white h-screen p-10">
      {/* Text Section */}
      <div className="max-w-lg ml-20">
        <p className="uppercase text-sm mb-3">Summer 2020</p>
        <h1 className="text-4xl font-bold mb-5">Vita Classic Product</h1>
        <p className="text-base leading-relaxed mb-8">
          We know how large objects will act, We know how are objects will act, We know
        </p>
        <div className="flex items-center gap-5">
          <p className="text-2xl font-bold">$16.48</p>
          <button className="bg-green-500 hover:bg-green-600 transition-colors text-white py-2 px-6 rounded-lg">
            ADD TO CART
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="mt-10 md:mt-0">
        <img
          src="/images/man.png" // Replace with your image URL
          alt="Product"
          className=" w-auto h-auto rounded-lg drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Offer;
