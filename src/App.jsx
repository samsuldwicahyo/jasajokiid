import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import Home from './pages/Home';
import HowToOrderPage from './pages/HowToOrderPage';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const timer = window.setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0 });
    return undefined;
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <a
        href="#main-content"
        className="sr-only rounded-full bg-brand-navy px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
      >
        Lewati ke konten utama
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/cara-order" element={<HowToOrderPage />} />
          <Route path="/harga" element={<PricingPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

