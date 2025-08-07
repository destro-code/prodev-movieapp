"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">MovieFlix</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}
