import React from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import JokesPage from "../pages/JokesPage/JokesPage";
import JokePage from "../pages/JokePage/JokePage";

import NavBar from "../NavBar/NavBar";

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
