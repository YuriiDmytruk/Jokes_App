import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { JokesPage, JokePage, NavBar } from './index';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<JokesPage />} />
        <Route path="/joke/:id" element={<JokePage />} />

        <Route path="*" element={<JokesPage />} />
      </Routes>
    </>
  );
}
