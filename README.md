# MovieFlix

MovieFlix is a modern movie recommendation application that allows users to browse trending movies, receive personalized recommendations, and manage their favorite selections. Built with Next.js and TypeScript, MovieFlix demonstrates scalable architecture, dynamic routing, API integration, and a responsive, interactive user interface.

---

## Features

- **Trending & Recommended Movies:**  
  Fetches and displays trending and recommended movies from a public movie API.
- **Dynamic Routing:**  
  Detailed movie pages using Next.js dynamic routes for fast, optimized navigation.
- **Favorites Management:**  
  Users can save and manage favorite movies locally or via an API backend.
- **Responsive UI:**  
  Fully responsive dashboard with smooth animations and intuitive controls.
- **Robust Error Handling:**  
  Graceful loading states and error messages for a seamless experience.

---

## Technologies Used

- **Next.js** – Server-side rendering and dynamic routing
- **TypeScript** – Type safety and scalable development
- **Styled Components** – Modular and maintainable UI styling
- **(Optional) React Native** – For mobile support

---

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/destro-code/prodev-movieapp.git
   cd movieflix
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**

   - Create a `.env.local` file in the root directory.
   - Add your TMDB API key:
     ```
     NEXT_PUBLIC_TMDB_API_KEY
     ```

4. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) to view the app.**

---

## Project Structure

```
movieflix/
  ├── src/
  │   ├── components/      # Reusable UI components
  │   ├── pages/           # Next.js pages and dynamic routes
  │   ├── lib/             # API utilities and helpers
  │   ├── context/         # State management (favorites, etc.)
  │   └── styles/          # Styled Components and global styles
  ├── public/              # Static assets
  └── README.md
```

---

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or new features.



---

> MovieFlix demonstrates real-world skills in API integration, dynamic routing, state management, and responsive UI development using modern web technologies.
