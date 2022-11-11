import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import Pokedex from "./pages/Pokedex/Pokedex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/team/:id" element={<Pokedex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
