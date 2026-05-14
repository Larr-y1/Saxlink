
import SEO from '@/components/common/SEO';
import HeroSection from '@/components/landing/HeroSection';
import MarqueeBanner from '@/components/landing/MarqueeBanner';
import StatsSection from '@/components/landing/StatsSection';
import HowItWorks from '@/components/landing/HowItWorks';
import FeaturedMusicians from '@/components/landing/FeaturedMusicians';
import CuratedCollections from '@/components/landing/CuratedCollections';
import TrustSection from '@/components/landing/TrustSection';
import ForMusicians from '@/components/landing/ForMusicians';
import DashboardPreview from '@/components/landing/DashboardPreview';
import GallerySection from '@/components/landing/GallerySection';
import PricingSection from '@/components/landing/PricingSection';
import FaqSection from '@/components/landing/FaqSection';
import CTASection from '@/components/landing/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Premium Saxophonist Booking" 
        description="The ultimate platform to book world-class saxophonists for your weddings, corporate events, and private parties."
      />
      <HeroSection />
      <MarqueeBanner />
      <StatsSection />
      <HowItWorks />
      <FeaturedMusicians />
      <CuratedCollections />
      <TrustSection />
      <ForMusicians />
      <DashboardPreview />
      <GallerySection />
      <PricingSection />
      <FaqSection />
      <CTASection />
    </div>
  );
}