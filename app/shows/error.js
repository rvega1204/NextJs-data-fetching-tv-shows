/**
 * Renders an error page with a dynamic error message.
 * This component is intended to be used as an error boundary or a general error display.
 *
 * @param {object} props - The properties for the Error component.
 * @param {Error} props.error - The error object containing a `message` property to display.
 * @returns {JSX.Element} A React component displaying the error.
 */
"use client";
export default function Error({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="p-6 max-w-md w-full bg-white rounded-lg border border-red-200 shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          An Error Occurred
        </h1>
        <p className="text-red-500">{error.message}</p>
      </div>
    </div>
  );
}
