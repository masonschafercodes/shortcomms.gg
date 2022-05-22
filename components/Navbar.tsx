import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-center gap-5 p-3 font-mono text-lg">
      <a href="/" className="text-blue-700 hover:text-blue-900 underline">
        Home
      </a>
      <a href="/about" className="text-blue-700 hover:text-blue-900 underline">
        About
      </a>
    </div>
  );
}
