"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-wide">
        AbleSpace
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li>
          <Link href="/" className="hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col space-y-2 mt-2 md:hidden absolute bg-gray-100 w-full left-0 p-4 shadow-md">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;





