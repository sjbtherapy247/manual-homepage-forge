import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
          A Manual for Your Life
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-body font-light max-w-4xl mx-auto leading-relaxed">
          Systems and mindset for mastering your domains, by Simon 'Bakes' Baker.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;