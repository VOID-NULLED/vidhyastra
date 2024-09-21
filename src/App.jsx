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
import NotFoundPage from './pages/NotFoundPage';
import MentorsSearchPage from './mentor/all mentors/MentorsSearchPage';
import ResourceDFeature from './pages/ResourceDFeature';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="mentorprofile" element={<MentorPage />} />
          <Route path="mentorShip" element={<Services />} />
          <Route path="mentorShip1" element={<MentorsSearchPage />} />
          <Route path="exploration" element={<Exploration />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="resource" element={<ResourceDFeature />} />
          <Route path="test" element={<Quiz />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App