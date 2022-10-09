import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Homepage from "./pages/Homepage/Homepage";
import InstructorList from "./pages/InstructorList/InstructorList";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructors-list" element={<InstructorList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
