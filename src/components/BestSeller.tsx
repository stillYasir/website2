import React from 'react';

const bestsellerData = [
  {
    id: 1,
    image: '/images/pic1.jpg', // Replace with your image URL
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: '$16.48',
    salePrice: '$6.48',
    colors: ['#00bfff', '#000000', '#4caf50', '#ff5722'],
  },
  {
    id: 2,
    image: '/images/pic4.jpg', // Replace with your image URL
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: '$16.48',
    salePrice: '$6.48',
    colors: ['#00bfff', '#000000', '#4caf50', '#ff5722'],
  },
  {
    id: 3,
    image: '/images/pic6.jpg', // Replace with your image URL
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: '$16.48',
    salePrice: '$6.48',
    colors: ['#00bfff', '#000000', '#4caf50', '#ff5722'],
  },
  {
    id: 4,
    image: '/images/pic2.jpg', // Replace with your image URL
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: '$16.48',
    salePrice: '$6.48',
    colors: ['#00bfff', '#000000', '#4caf50', '#ff5722'],
  },
  {
    id: 5,
    image: '/images/pic5.jpg', // Replace with your image URL
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: '$16.48',
    salePrice: '$6.48',
    colors: ['#00bfff', '#000000', '#4caf50', '#ff5722'],
  },
  {
    id: 6,
    image: '/images/pic3.jpg', // Replace with your image URL
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: '$16.48',
    salePrice: '$6.48',
    colors: ['#00bfff', '#000000', '#4caf50', '#ff5722'],
  },
  {
    id: 7,
    image: '/images/pic8.jpg', // Replace with your image URL
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: '$16.48',
    salePrice: '$6.48',
    colors: ['#00bfff', '#000000', '#4caf50', '#ff5722'],
  },
  {
    id: 8,
    image: '/images/pic7.jpg', // Replace with your image URL
    title: 'Graphic Design',
    department: 'English Department',
    originalPrice: '$16.48',
    salePrice: '$6.48',
    colors: ['#00bfff', '#000000', '#4caf50', '#ff5722'],
  },
];

const Bestseller = () => {
  return (
    <section className="p-8 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">BESTSELLER PRODUCTS</h2>
        <p className="text-lg text-gray-600 mt-2">Problems trying to resolve the conflict between</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {bestsellerData.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img src={product.image} alt={product.title} className="w-full h-72 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.department}</p>
              <div className="mt-3">
                <span className="text-gray-400 line-through mr-2">{product.originalPrice}</span>
                <span className="text-green-600 font-bold">{product.salePrice}</span>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Bestseller;