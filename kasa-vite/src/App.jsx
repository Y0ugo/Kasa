import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ApartmentGrid from './components/ApartmentGrid';
import ApartmentDetails from './components/ApartmentDetails';
import About from './components/About';
import Footer from './components/Footer';

function Layout() {
  const location = useLocation();
  const showBanner = location.pathname === '/';
  return (
    <div className="app-container">
      <Navbar />
      {showBanner && <Banner />}
      <Routes>
        <Route path="/" element={<ApartmentGrid />} />
        <Route path="/apartment/:id" element={<ApartmentDetails />} />
        <Route path="/a-propos" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
