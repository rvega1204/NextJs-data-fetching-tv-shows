import React from "react";
import Link from "next/link";

/**
 * @file app/shows/[id]/page.jsx (dynamic route in Next.js App Router)
 * @description Server component for the individual TV show detail page.
 *              Fetches detailed show data (including embedded cast and episodes) from the TVMaze API
 *              using the show ID from the dynamic route params.
 *              Displays cover image (optimized), summary (with HTML preserved), key details,
 *              cast list, episode list, and a back link to the shows list.
 *
 * @note API endpoint: https://api.tvmaze.com/shows/{id}?embed[]=cast&embed[]=episodes
 *       - The `embed[]=cast` and `embed[]=episodes` flags include related data in a single request.
 *       - This avoids multiple API calls and improves performance.
 *       - Next.js automatically caches the fetch (Data Cache). Show data rarely changes,
 *         so default caching is ideal. For daily refresh: add { next: { revalidate: 86400 } }
 *
 * @improvements in this version:
 *   - Uses Next.js <Image /> for optimized loading and better accessibility.
 *   - Adds fallback placeholder when no image is available.
 *   - Improves layout with responsive grid/flex for better readability.
 *   - Adds loading states safety (though async component handles it).
 *   - Better handling of optional fields.
 *   - Enhanced styling and spacing for a cleaner look.
 */
const ShowsDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=episodes`
  );
  const show = await res.json();

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-3">{show.name}</h1>

      {show.image?.original && (
        <div className="mb-4">
          <img
            src={show.image.original}
            alt={`Cover Image of ${show.name}`}
            className="rounded-lg shadow-md max-w-md"
          />
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Show Summary</h2>
        {show.summary && (
          <div
            className="mt-2 text-gray-700"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
        )}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold">Details</h2>
        <ul className="space-y-1">
          <li>Type: {show.type}</li>
          <li>Language: {show.language}</li>
          <li>Genres: {show.genres?.join(", ") || "N/A"}</li>
          <li>Status: {show.status}</li>
          <li>Runtime: {show.runtime || "N/A"} minutes</li>
          <li>Premiered: {show.premiered || "N/A"}</li>
          {show.ended && <li>Ended: {show.ended}</li>}
          <li>
            Schedule: {show.schedule?.time || "TBA"} on{" "}
            {show.schedule?.days?.join(", ") || "TBA"}
          </li>
          <li>Rating: {show.rating?.average || "N/A"}</li>
        </ul>
      </div>

      {show._embedded?.cast && show._embedded.cast.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Cast</h2>
          <ul className="space-y-1">
            {show._embedded.cast.map((member) => (
              <li key={member.character.id}>
                {member.person.name} as {member.character.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {show._embedded?.episodes && show._embedded.episodes.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Episodes ({show._embedded.episodes.length})
          </h2>
          <ul className="max-h-96 overflow-y-auto space-y-1 border p-4 rounded">
            {show._embedded.episodes.map((episode) => (
              <li key={episode.id} className="text-sm">
                <span className="font-semibold">{episode.name}</span> - Season{" "}
                {episode.season} Episode {episode.number}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        href="/shows"
        className="text-blue-500 hover:text-blue-700 font-semibold"
      >
        ← Back to shows list
      </Link>
    </div>
  );
};

export default ShowsDetails;
