import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow h-16 flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold tracking-wide text-green-500">
        🌿 Personal Growth Tracker
      </h1>

      <ul className="flex gap-6">
        <li>
          <a
            href="/"
            className="text-yellow-500 font-semibold hover:text-yellow-600 transition-all duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/dashboard"
            className="text-yellow-500 font-semibold hover:text-yellow-600 transition-all duration-200"
          >
            Dashboard
          </a>
        </li>
        
        
        <li>
          <a
            href="/logout"
            className="text-yellow-500 font-semibold hover:text-yellow-600 transition-all duration-200"
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;