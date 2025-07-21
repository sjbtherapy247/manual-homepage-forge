import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-manual-border sticky top-0 z-50">
      <div className="manual-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-heading font-semibold text-foreground">
              Simon Baker
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#manual" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium"
            >
              The Manual
            </a>
            <a 
              href="#workshop" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium"
            >
              The Workshop
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-body font-medium"
            >
              About
            </a>
          </nav>

          {/* Newsletter Button */}
          <div className="hidden md:block">
            <button className="manual-button">
              Newsletter
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-manual-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#manual" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-body font-medium"
              >
                The Manual
              </a>
              <a 
                href="#workshop" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-body font-medium"
              >
                The Workshop
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-body font-medium"
              >
                About
              </a>
              <div className="px-3 py-2">
                <button className="manual-button w-full">
                  Newsletter
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;