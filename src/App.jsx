import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Layout from './pages/Layout';
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Demo  from './components/Demo';
import { Login } from './authentication/Login';
import { Register } from './authentication/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="demo" element={<Demo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App