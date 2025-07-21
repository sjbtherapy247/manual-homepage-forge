import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OriginStory from '@/components/OriginStory';
import ManualSection from '@/components/ManualSection';
import WorkshopSection from '@/components/WorkshopSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OriginStory />
      <ManualSection />
      <WorkshopSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
