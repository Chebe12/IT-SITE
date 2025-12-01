import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import AdminPage from './pages/AdminPage';
import { PageRoute } from './types';
import { DataProvider } from './context/DataContext';

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path={PageRoute.HOME} element={<Home />} />
              <Route path={PageRoute.SERVICES} element={<ServicesPage />} />
              <Route path={PageRoute.PORTFOLIO} element={<PortfolioPage />} />
              <Route path={PageRoute.CONTACT} element={<ContactPage />} />
              <Route path={PageRoute.ABOUT} element={<AboutPage />} />
              <Route path={PageRoute.ADMIN} element={<AdminPage />} />
              {/* Fallback route */}
              <Route path="*" element={<Navigate to={PageRoute.HOME} replace />} />
            </Routes>
          </main>
          <Footer />
          <AIChatbot />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;