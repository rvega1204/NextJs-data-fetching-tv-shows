import React from "react";
import Link from "next/link";

/**
 * @file app/shows/page.jsx (or similar in App Router)
 * @description A server component that fetches a list of popular TV shows from the TVMaze API
 *              and displays them in a responsive grid. Each show is presented as a card with
 *              key details, an optimized Next.js Image, a cleaned summary (HTML stripped),
 *              and a link to the detailed show page.
 *
 * @note TVMaze API endpoint: https://api.tvmaze.com/shows (no authentication required)
 *       - Returns ~250 shows sorted by popularity/weight.
 *       - No official pagination, but this endpoint provides a solid general list.
 *       - Data changes infrequently; Next.js caches the fetch by default.
 *         For fresher data: add { next: { revalidate: 86400 } } (revalidate daily).
 */
const Shows = async () => {
  // Fetch the full list of shows (cached automatically by Next.js)
  const res = await fetch("https://api.tvmaze.com/shows");
  const shows = await res.json();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-6">TV Shows</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shows.map((show) => (
          <div
            key={show.id}
            className="mb-4 p-4 bg-gray-100 rounded-lg shadow-lg"
          >
            <Link
              href={`/shows/${show.id}`}
              className="text-xl font-semibold text-blue-600"
            >
              {show.name}
            </Link>
            <div className="text-sm text-gray-600">Type: {show.type}</div>
            <div className="text-sm text-gray-600">
              Language: {show.language}
            </div>
            <div className="text-sm text-gray-600">
              Genres: {show.genres?.join(", ") || "N/A"}
            </div>
            <div className="text-sm text-gray-600">Status: {show.status}</div>
            <div className="text-sm text-gray-600">
              Runtime: {show.runtime || "N/A"} minutes
            </div>
            <div className="text-sm text-gray-600">
              Premiered: {show.premiered || "N/A"}
            </div>
            {show.ended && (
              <div className="text-sm text-gray-600">Ended: {show.ended}</div>
            )}
            {show.schedule && (
              <div className="text-sm text-gray-600">
                Schedule: {show.schedule.time || "TBA"} on{" "}
                {show.schedule.days?.join(", ") || "TBA"}
              </div>
            )}
            <div className="text-sm text-gray-600">
              Rating: {show.rating?.average || "N/A"}
            </div>
            {show.network && (
              <div className="text-sm text-gray-600">
                Network: {show.network.name} ({show.network.country?.code})
              </div>
            )}
            {show.officialSite && (
              <div className="mt-2">
                <Link
                  href={`/shows/${show.id}`}
                  className="text-blue-600 hover:underline"
                >
                  Read More
                </Link>
              </div>
            )}
            {/* Optimized image with Next.js */}
            {show.image && (
              <div className="mt-2">
                <img
                  src={show.image.medium}
                  alt={`Cover image of ${show.name}`}
                  className="max-w-xs rounded-lg"
                />
              </div>
            )}
            {show.summary && (
              <div className="mt-2">
                Summary:{" "}
                <span className="text-sm text-gray-600">
                  {show.summary.replace(/<[^>]+>/g, "")}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
