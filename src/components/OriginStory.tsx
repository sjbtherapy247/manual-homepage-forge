import simonPortrait from '@/assets/simon-portrait.jpg';

const OriginStory = () => {
  return (
    <section id="about" className="manual-section bg-manual-section-bg">
      <div className="manual-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={simonPortrait} 
                alt="Simon Baker"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              It all started with one decision.
            </h2>
            
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              On June 6, 2020, I chose clarity. That single decision became the foundation 
              for everything I build, from high-performance racing systems to my own life. 
              This manual is a collection of the lessons learned along the way.
            </p>

            <div className="pt-4">
              <button className="manual-button">
                Read My Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;