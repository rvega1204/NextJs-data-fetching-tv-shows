import Link from "next/link";
import Image from "next/image";
import {
  FaDatabase,
  FaSpinner,
  FaExclamationTriangle,
  FaBars,
  FaReact,
  FaServer,
} from "react-icons/fa";

/**
 * HomePage Component
 *
 * This is the main landing page of the application.
 * - Displays a hero section with a background image and overlay text.
 * - Provides a call-to-action button linking to the "Shows" page.
 * - Includes a "What You Will Learn" section highlighting key concepts with icons.
 * - Ends with a footer credit.
 *
 * @component
 * @example
 * // Usage in Next.js
 * import HomePage from "./pages/index";
 *
 * export default function App() {
 *   return <HomePage />;
 * }
 */
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/**
       * Hero Section
       * - Full-screen background image using Next.js <Image> for optimization
       * - Transparent overlay with centered heading, description, and CTA button
       */}
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="https://cdn.pixabay.com/photo/2023/12/12/13/05/godzilla-8445254_1280.jpg"
          alt="TV Show Spotlight"
          fill
          className="object-cover opacity-75"
          priority
          sizes="100vw"
        />
        {/* Overlay with text and button */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Discover Amazing TV Shows
          </h1>
          <p className="text-lg mt-3 text-white">
            Dive into the world of endless entertainment. Explore genres, follow
            your favorite series, and never miss an episode!
          </p>
          <Link href="/shows">
            <p className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore Shows
            </p>
          </Link>
        </div>
      </div>

      {/**
       * "What You Will Learn" Section
       * - Grid layout with responsive breakpoints
       * - Each card highlights a concept with an icon and label
       */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">
            What You Will Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Card: Data Fetching */}
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaDatabase className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Data Fetching
              </span>
            </div>

            {/* Card: Loading Techniques */}
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaSpinner className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Loading Techniques
              </span>
            </div>

            {/* Card: Error Handling */}
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaExclamationTriangle className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Error Handling
              </span>
            </div>

            {/* Card: Navigation */}
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaBars className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Navigation
              </span>
            </div>

            {/* Card: React Icons */}
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaReact className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Use of React Icons
              </span>
            </div>

            {/* Card: Server Data Fetching */}
            <div className="bg-white rounded-lg p-6 flex items-center shadow-lg">
              <FaServer className="text-3xl text-blue-500 mr-4" />
              <span className="font-semibold text-gray-800 text-lg">
                Server Data Fetching
              </span>
            </div>
          </div>
        </div>
      </div>

      {/**
       * Footer Section
       * - Simple centered text with credits
       */}
      <footer className="text-center py-8 text-sm text-white">
        TV Show Central || Masynctech Coding School
      </footer>
    </div>
  );
}
