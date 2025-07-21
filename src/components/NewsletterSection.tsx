import { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    setIsSubmitted(true);
    setEmail('');
    
    // Reset after 3 seconds for demo purposes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="manual-section bg-manual-section-bg border-t border-manual-border">
      <div className="manual-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              The Renaissance Sessions
            </h2>
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              Get weekly insights, systems, and stories from the workshop delivered directly to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-lg mx-auto">
            {isSubmitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-green-800">
                  <Mail size={20} />
                  <span className="font-body font-medium">Thank you for subscribing!</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent font-body"
                />
                <button
                  type="submit"
                  className="manual-button whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;