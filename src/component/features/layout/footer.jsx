import React from 'react';

// Footer component using Tailwind classes
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 text-center">
      <div className="space-y-4">
        <div className="text-xl font-bold">
          <span className="mr-1">🚀</span>Space Tourism
        </div>
        <p>Exploring the final frontier, one destination at a time.</p>
        <p>
          Destinations: Moon • Mars • Europa • Titan
        </p>
        <div className="text-sm text-gray-500">
          <p>© 2026 Space Tourism. All rights reserved.</p>
          <p>Your journey beyond the stars begins here.</p>
        </div>
      </div>
    </footer>
  );
}
