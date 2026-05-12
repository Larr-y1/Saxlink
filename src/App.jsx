import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client';
import { ThemeProvider } from '@/lib/ThemeProvider';

// Pages
import Home from '@/pages/Home';
import Browse from '@/pages/Browse';
import MusicianProfile from '@/pages/MusicianProfile';
import Blog from '@/pages/Blog';
import EarlyAccess from '@/pages/EarlyAccess';
import HowItWorksPage from '@/pages/HowItWorksPage';
import ForMusicians from '@/pages/ForMusicians';
import PricingPage from '@/pages/PricingPage';
import RoleSelector from '@/pages/RoleSelector';
import BookingRequest from '@/pages/BookingRequest';
import LoginPage from '@/pages/LoginPage';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import PageNotFound from '@/lib/PageNotFound';

// Layout components
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import WhatsAppButton from '@/components/landing/WhatsAppButton';

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
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
          <Route path="/role-selector" element={<RoleSelector />} />
          <Route path="/booking-request" element={<BookingRequest />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
