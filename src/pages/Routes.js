// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Activity from './Activity';
import Research from './Research';
import Collaboration from './Collaboration';
import Facilities from './Facilities';
import Members from './Members';
import UG from './UG';
import PG from './PG';
import PhD from './PhD';
import Intern from './Intern';
import News from './News';
import Publication from './Publication';
import Contact from './Contact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/research" element={<Research />} />
      <Route path="/collaboration" element={<Collaboration />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/members" element={<Members />} />
      <Route path="/ug" element={<UG />} />
      <Route path="/pg" element={<PG />} />
      <Route path="/phd" element={<PhD />} />
      <Route path="/intern" element={<Intern />} />
      <Route path="/news" element={<News />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;

