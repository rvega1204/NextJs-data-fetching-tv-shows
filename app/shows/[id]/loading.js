/*
 * @file app/shows/[id]/loading.jsx (dynamic route in Next.js App Router)
 * @description Server component for the loading state of the individual TV show detail page.
 *              Displays a loading message while the show data is being fetched.
 *
 * @note This component is used in conjunction with the dynamic route [id] to show a loading
 *       state while the show data is being fetched. It is not used for client-side navigation.
 */
export default function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Loading Shows...</h2>
    </div>
  );
}
