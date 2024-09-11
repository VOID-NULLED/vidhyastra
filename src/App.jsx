import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Demo  from './components/Demo';
import { Login } from './authentication/Login';
import { Register } from './authentication/Register';
import Services from './pages/Services'
import MentorPage from './pages/MentorPage';
import Exploration from './pages/Exploration';
import Quiz from './pages/Quiz';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<MentorPage />} />
          <Route path="mentorShip" element={<Services />} />
          <Route path="exploration" element={<Exploration />} />
          <Route path="mentor" element={<AboutUs />} />
          <Route path="test" element={<Quiz />} />
          <Route path="user" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App