import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ApartmentGrid from './components/ApartmentGrid';
import ApartmentDetails from './components/ApartmentDetails';
import About from './components/About';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import './styles/App.scss';

function Layout() {
  const location = useLocation();
  const showBanner = location.pathname === '/';
  return (
    <div className="app-container">
      <Navbar />
      {showBanner && <Banner />}
      <main>
        <Routes>
          <Route path="/" element={<ApartmentGrid />} />
          <Route path="/apartment/:id" element={<ApartmentDetails />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
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
