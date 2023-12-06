import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import CheckOut from "./pages/CheckOut";
import Tickets from "./pages/Tickets";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/checkout/:id" element={<CheckOut />} />
          <Route path="/ticket/:id" element={<Tickets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
