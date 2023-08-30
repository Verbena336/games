import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Game from '../Game';
import ErrorPage from '../Error';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/game/:game" element={<Game />}></Route>
      <Route
        path="/*"
        element={
          <ErrorPage
            isButton={true}
            status={{ status: '404' }}
            text={"Oops, this page doesn't exist"}
          />
        }
      ></Route>
    </Routes>
  );
}

export default AppRoutes;
