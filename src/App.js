import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Navbar } from './components';

import { Home, About, Gallery, Gallery2, PricingPage, Classes, Contact, Blog, SignUp } from './pages';

import { Schedule, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } from './pages/Schedule';

import ScrollToTop from './utils/ScrollToTop';

import './App.css';
import SignIn from './pages/SignIn/SignIn';




const App = () => {
  return (
    <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/gallery/page-1" element={<Gallery />} />
            <Route path="/gallery/page-2" element={<Gallery2 />} />

            <Route path="/schedule" element={<Schedule />} >
              <Route path="monday" element={<Monday />} />
              <Route path="tuesday" element={<Tuesday />} />
              <Route path="wednesday" element={<Wednesday />} />
              <Route path="thursday" element={<Thursday />} />
              <Route path="friday" element={<Friday />} />
              <Route path="saturday" element={<Saturday />} />
              <Route path="sunday" element={<Sunday />} />
            </Route>

            <Route path="/blog" element={<Blog />} />

            <Route path="/pricing" element={<PricingPage />} />

            <Route path="/classes" element={<Classes />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />

        </Routes>
        <Footer />
    </Router>
  )
}

export default App