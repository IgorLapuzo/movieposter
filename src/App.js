import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import { MoviesPage } from './pages/Movies/Movies';
import MovieDetailPage from './pages/Movies/MovieDetail';
import RootLayout from './pages/Root';
import MoviesRootLayout from './pages/Movies/MoviesRoot';
import ActorsRootLayout from './pages/Actors/ActorsRoot';
import ActorDetailPage from './pages/Actors/ActorDetail';
import ActorsPage from './pages/Actors/Actors';

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
