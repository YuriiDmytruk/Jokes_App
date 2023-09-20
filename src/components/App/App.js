import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import JokesPage from "../pages/JokesPage/JokesPage";
import NavBar from "../NavBar/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <JokesPage />
    </>
  );
}
