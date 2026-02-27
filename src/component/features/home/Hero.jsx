import React from 'react';

// Hero section styled with Tailwind; backgrounds handled via arbitrary utilities
export default function Hero() {
  return (
    <section
      className="hero bg-[url('/home/background-home-mobile.jpg')] sm:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')] bg-center bg-cover text-white py-12 px-4 sm:py-16 sm:px-8 lg:py-24 lg:px-16 flex flex-col items-center justify-center"
    >
      <div className="text-center max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Space Tourism</h1>
        <p className="mb-6">
          Embark on a journey beyond Earth's atmosphere. Explore the Moon, Mars,
          Europa, and Titan&nbsp;— the next frontiers of human exploration.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500">
          Begin Your Journey
        </button>
      </div>
    </section>
  );
}
