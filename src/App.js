import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import MoviesPage from "./pages/Movies";
import MovieDetailPage from "./pages/MovieDetail";
import RootLayout from "./pages/Root";
import MoviesRootLayout from "./pages/MoviesRoot";
import ActorsRootLayout from "./pages/ActorsRoot";
import ActorDetailPage from "./pages/ActorDetail";
import ActorsPage from "./pages/Actors";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    
    children: [
      { index: true, element: <HomePage /> },
      { 
        path: 'movies',
        element: <MoviesRootLayout />,
        loader: async() => {
          const response = await fetch('')
          if (!response.ok) {
            //...
          } else {
            const resData = await response.json();
            return resData
          }
        },
        children: [
          { index: true, element: <MoviesPage />},
          { path: ':movieId', element: <MovieDetailPage />},
        ],
      },
      { 
        path: 'actors',
        element: <ActorsRootLayout />,
        children: [
          { index: true, element: <ActorsPage />},
          { path: ':actorId', element: <ActorDetailPage />},
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
