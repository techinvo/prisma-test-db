'use client';
import { useState } from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <button onClick={toggleSidebar} className="p-2 focus:outline-none">
        ☰
      </button>
      <div className="flex justify-end">
        <span className="mr-4">Thidarat@gmail.com</span>
        <span>Admin</span>
      </div>
    </nav>
  );
};

export default Navbar;

