# MovieFlix

MovieFlix is a modern movie recommendation application that allows users to browse trending movies, receive personalized recommendations, and manage their favorite selections. Built with Next.js and TypeScript, MovieFlix demonstrates scalable architecture, dynamic routing, API integration, and a responsive, interactive user interface.

![Build Status](https://github.com/destro-code/prodev-movieapp/actions/workflows/ci.yml/badge.svg) ![License](https://img.shields.io/badge/License-MIT-blue.svg) ![npm version](https://img.shields.io/badge/npm-v0.1.0-blue.svg)

## Table of Contents

- [Key Features](#key-features)

- [Architecture Overview](#architecture-overview)

- [Tech Stack](#tech-stack)

- [Getting Started](#getting-started)

- [Configuration](#configuration)

- [Usage](#usage)

- [Project Structure](#project-structure)

- [Scripts](#scripts)

- [Roadmap](#roadmap)

- [Contributing](#contributing)

- [Testing](#testing)

- [License](#license)

- [Acknowledgements](#acknowledgements)

## Key Features

-   **Trending & Recommended Movies**: Fetches and displays popular and trending movies from The Movie Database (TMDB) API.

-   **Dynamic Routing**: Utilizes Next.js dynamic routes for detailed movie pages, ensuring fast and optimized navigation.

-   **Favorites Management**: Users can save and manage their favorite movies locally using browser storage.

-   **Responsive UI**: A fully responsive dashboard with smooth animations (powered by Framer Motion) and intuitive controls, adapting to various screen sizes.

-   **Robust Error Handling**: Implements graceful loading states and user-friendly error messages for a seamless experience.

-   **Movie Search**: Allows users to search for movies by title.

-   **Movie Details Modal**: Provides an interactive modal to view extended movie information.

## Architecture Overview

MovieFlix is a Next.js application leveraging React for its component-based UI and TypeScript for type safety and improved developer experience. The application follows a client-server component architecture inherent to Next.js, with most interactive elements being client-side rendered. Data fetching is handled through a dedicated `tmdb` library, abstracting API calls to The Movie Database. State management for user favorites is implemented using React's Context API, with a separate Zustand store also present for potential future global state needs. Styling is primarily managed using Tailwind CSS, providing a utility-first approach for responsive design. The project emphasizes modularity, clean code, and efficient data handling.

## Tech Stack

| Area | Tool | Version |
|---|---|---|
|---|---|---|
| Framework | Next.js | 15.4.6 |
| UI Library | React | 19.1.0 |
|---|---|---|
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 |
|---|---|---|
| Animation | Framer Motion | 12.23.12 |
| State Management | Zustand | 5.0.7 |
|---|---|---|
| State Management | React Context API | N/A |
| API Client | Axios | 1.11.0 |
|---|---|---|
| Linting | ESLint | ^9 |



## Getting Started

To get MovieFlix up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have the following installed:

-   Node.js (v18.x or higher recommended)

-   npm (v8.x or higher), Yarn (v1.x or higher), or pnpm (v8.x or higher)

### Installation

1.  **Clone the repository:**

```bash
git clone https://github.com/destro-code/prodev-movieapp.git

cd prodev-movieapp

```
2.  **Install dependencies:**

```bash
npm install

# or
yarn install

# or
    pnpm install

```
3.  **Configure environment variables:**

    -   Create a `.env.local` file in the root directory of the project.

    -   Obtain a TMDB API key from [The Movie Database API](https://www.themoviedb.org/documentation/api).

    -   Add your TMDB API key to the `.env.local` file:

```
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here

```
## Configuration

MovieFlix uses environment variables for sensitive information and API configurations.

| ENV | Description | Example |
|---|---|---|
|---|---|---|
| `NEXT_PUBLIC_TMDB_API_KEY` | Your API key for The Movie Database (TMDB). **Required.** | `abcdef1234567890abcdef1234567890` |
| `NEXT_PUBLIC_TMDB_BASE_URL` | Base URL for the TMDB API. Defaults to `https://api.themoviedb.org/3`. | `https://api.themoviedb.org/3` |
|---|---|---|



## Usage

To run the development server:

```bash
npm run dev

# or
yarn dev

# or
pnpm dev

```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

To build the application for production:

```bash
npm run build

# or
yarn build

# or
pnpm build

```
To start the production server after building:

```bash
npm run start

# or
yarn start

# or
pnpm start

```
## Project Structure

```
.

├── public/                     # Static assets
├── src/                        # Application source code

│   ├── app/                    # Next.js App Router pages
│   │   ├── favorites/          # Favorites page

│   │   │   └── page.tsx
│   │   ├── layout.tsx          # Root layout for the application

│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable UI components

│   │   ├── DarkModeToggle.tsx
│   │   ├── FavoriteButton.tsx

│   │   ├── MovieCard.tsx
│   │   ├── MovieModal.tsx

│   │   ├── Navbar.tsx
│   │   └── SearchBar.tsx

│   ├── context/                # React Context API providers
│   │   └── FavoriteContext.tsx # Manages favorite movies state

│   ├── lib/                    # Utility functions and API integrations
│   │   ├── genres.ts           # Movie genre data

│   │   └── tmdb.ts             # TMDB API client
│   ├── store/                  # Zustand store (alternative state management)

│   │   └── useFavoriteStore.ts
│   └── types/                  # TypeScript type definitions

│       └── index.ts
├── .env.local.example          # Example environment variables file

├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and scripts

├── package-lock.json           # npm lock file
├── README.md                   # Project README

├── tsconfig.json               # TypeScript configuration
└── yarn.lock                   # Yarn lock file

```
## Scripts

| Command | Description |
|---|---|
|---|---|
| `dev` | Starts the Next.js development server with Turbopack enabled. |
| `build` | Builds the application for production deployment. |
|---|---|
| `start` | Starts the Next.js production server. |
| `lint` | Runs ESLint to check for code quality and style issues. |
|---|---|



## Roadmap

-   [ ] Implement user authentication and personalized profiles.

-   [ ] Enhance search functionality with genre filtering and advanced options.

-   [ ] Add infinite scrolling or more robust pagination for movie listings.

-   [ ] Implement comprehensive unit and integration tests for critical components and logic.

-   [ ] Optimize image loading and overall application performance.

-   [ ] Set up a CI/CD pipeline for automated testing and deployment.

-   [ ] Improve accessibility (A11y) across the application.

-   [ ] Integrate a backend API for persistent favorite storage.

## Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the existing style and passes linting checks.

## Testing

This project currently does not include a dedicated testing framework. Future plans include integrating unit and integration tests to ensure code quality and stability.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

-   Powered by [The Movie Database (TMDB) API](https://www.themoviedb.org/).

-   Built with [Next.js](https://nextjs.org/) and [React](https://react.dev/).

-   Styling with [Tailwind CSS](https://tailwindcss.com/).

-   Animations with [Framer Motion](https://www.framer.com/motion/).

-   State management with [Zustand](https://zustand-demo.pmnd.rs/).
