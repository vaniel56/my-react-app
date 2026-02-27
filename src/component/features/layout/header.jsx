import React, { useState } from 'react';

// Responsive header with Tailwind classes
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(prev => !prev);

  return (
    <header className="flex items-center justify-between p-4 bg-black text-white relative">
      <div className="text-xl font-bold">
        <span className="mr-1">🚀</span>
        Space<span className="text-yellow-400">Tourism</span>
      </div>

      <button
        className="md:hidden flex flex-col justify-between w-6 h-6"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span className="block w-full h-[2px] bg-white" />
        <span className="block w-full h-[2px] bg-white" />
        <span className="block w-full h-[2px] bg-white" />
      </button>

      <nav
        className={`${open ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-black md:static md:block`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center py-4 md:py-0">
          <li>
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-300 flex items-center"
            >
              <span className="mr-1">🏠</span> Home
            </a>
          </li>
          <li>
            <a
              href="#destination"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-300 flex items-center"
            >
              <span className="mr-1">🪐</span> Destination
            </a>
          </li>
          <li>
            <a
              href="#crew"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-300 flex items-center"
            >
              <span className="mr-1">👨‍🚀</span> Crew
            </a>
          </li>
          <li>
            <a
              href="#technology"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-300 flex items-center"
            >
              <span className="mr-1">🔧</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
