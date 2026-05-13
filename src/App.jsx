import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client';
import { ThemeProvider } from '@/lib/ThemeProvider';
import ScrollToTop from '@/lib/ScrollToTop';

// Pages
import Home from '@/pages/Home';
import Browse from '@/pages/Browse';
import MusicianProfile from '@/pages/MusicianProfile';
import Blog from '@/pages/Blog';
import EarlyAccess from '@/pages/EarlyAccess';
import HowItWorksPage from '@/pages/HowItWorksPage';
import ForMusicians from '@/pages/ForMusicians';
import PricingPage from '@/pages/PricingPage';
import About from '@/pages/About';
import RoleSelector from '@/pages/RoleSelector';
import BookingRequest from '@/pages/BookingRequest';
import LoginPage from '@/pages/LoginPage';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Support from '@/pages/Support';
import PageNotFound from '@/lib/PageNotFound';

// Layout components
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import WhatsAppButton from '@/components/landing/WhatsAppButton';

const AppContent = () => {
  const location = useLocation();
  const hideLayout = ['/login', '/register', '/early-access'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-[80vh]">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/musician/:id" element={<MusicianProfile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/early-access" element={<EarlyAccess />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/for-musicians" element={<ForMusicians />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/role-selector" element={<RoleSelector />} />
          <Route path="/book/:id" element={<BookingRequest />} />
          <Route path="/book" element={<Navigate to="/browse" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<EarlyAccess />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
      {!hideLayout && <WhatsAppButton />}
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <AppContent />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
