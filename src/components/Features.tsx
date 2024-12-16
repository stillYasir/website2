import React from 'react';

const featuresData = [
  {
    id: 1,
    image: '/images/background.jpg', // Replace with your image URL
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '01 December 2021',
    comments: 10,
    tags: ['Google', 'Trending', 'New'],
  },
  {
    id: 2,
    image: '/images/cars.jpg', // Replace with your image URL
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '01 December 2024',
    comments: 10,
    tags: ['Google', 'Trending', 'New'],
  },
  {
    id: 3,
    image: '/images/books.jpg', // Replace with your image URL
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '01 December 2024',
    comments: 10,
    tags: ['Google', 'Trending', 'New'],
  },
];

const Features = () => {
  return (
    <section className="p-8 bg-black-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white-70">Featured Posts</h2>
        <p className="text-lg text-gray-600 mt-2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature) => (
          <div key={feature.id} className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <div className="relative">
              <img src={feature.image} alt={feature.title} className="w-full h-56 object-cover" />
              <span className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {feature.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-full shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{feature.date}</span>
                <span>{feature.comments} comments</span>
              </div>
              <a
                href="/learn-more"
                className="inline-block mt-4 text-blue-600 hover:underline font-medium text-sm"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;