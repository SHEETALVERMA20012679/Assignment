import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Showbooks from "./pages/Showbooks";
import Deletebook from "./pages/Deletebook";
import Createbook from "./pages/Createbook";
import Editbook from "./pages/Editbook";
import axios from "axios";
const App = () => {
  axios.defaults.withCredentials = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<Createbook />} />
      <Route path="/books/details/:id" element={<Showbooks />} />
      <Route path="/books/edit/:id" element={<Editbook />} />
      <Route path="/books/delete/:id" element={<Deletebook />} />
    </Routes>
  );
};

export default App;
