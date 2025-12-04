# Data Fetching TV Shows

This is a Next.js application that demonstrates data fetching patterns using the TVMaze API. It allows users to browse a list of popular TV shows and view detailed information about each show, including cast members and episode lists.

## Features

- **Server-Side Rendering (SSR):** Utilizes Next.js App Router for efficient server-side data fetching.
- **Data Fetching:** Fetches data from the public TVMaze API.
- **Dynamic Routing:** Supports individual show pages with dynamic routes (`/shows/[id]`).
- **Responsive Design:** Styled with Tailwind CSS for a responsive and modern layout.
- **Image Optimization:** Uses Next.js `<Image>` component (or standard `img` tags where applicable) for optimized image loading.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **API:** [TVMaze API](https://www.tvmaze.com/api)

## Getting Started

Follow these steps to run the project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/rvega1204/NextJs-data-fetching-tv-shows
    cd data-fetching-tv-shows
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open [http://localhost:3000/shows](http://localhost:3000/shows) in your browser to view the list of TV shows.

## Project Structure

- `app/shows/page.js`: The main page that fetches and displays the list of TV shows.
- `app/shows/[id]/page.js`: The detail page for a specific TV show, fetching additional data like cast and episodes.
- `app/layout.js`: The root layout of the application.

## API Reference

This project uses the [TVMaze API](https://www.tvmaze.com/api) which is a free, open API for TV show data.

- **List Shows:** `https://api.tvmaze.com/shows`
- **Show Details:** `https://api.tvmaze.com/shows/{id}?embed[]=cast&embed[]=episodes`

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

- Ricardo Vega
