import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { JokesPage, NavBar, JokePopUp } from './index';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<JokesPage />} />
        <Route
          path="/joke/:id"
          element={
            <>
              <JokesPage />
              <JokePopUp />
            </>
          }
        />
        <Route path="*" element={<JokesPage />} />
      </Routes>
    </>
  );
}
