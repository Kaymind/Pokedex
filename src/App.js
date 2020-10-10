import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ShowPokemon } from './features/showPokemon/pages';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <ShowPokemon />,
    },
  ]);

  return routes;
}

export default App;
