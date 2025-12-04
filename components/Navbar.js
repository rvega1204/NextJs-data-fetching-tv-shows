import React from "react";
import Link from "next/link";

/**
 * Navbar Component
 *
 * A reusable navigation bar for the application.
 * - Displays the site brand/logo ("TV Show Central").
 * - Provides navigation links to key routes (Home, Shows).
 * - Styled with Tailwind CSS for responsiveness and hover effects.
 *
 * @component
 * @example
 * // Usage in a Next.js page
 * import Navbar from "../components/Navbar";
 *
 * export default function Layout() {
 *   return (
 *     <>
 *       <Navbar />
 *       <main> ... </main>
 *     </>
 *   );
 * }
 */
const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-75 text-white w-full z-50">
      <div className="container mx-auto flex justify-between px-6 py-3">
        <Link href="/" className="text-lg font-semibold">
          TV Show Central
        </Link>
        <ul className="flex space-x-4 items-center">
          <li className="hover:text-blue-500">
            <Link href="/" className="text-lg font-semibold">
              Home
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/shows" className="text-lg font-semibold">
              Shows
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
