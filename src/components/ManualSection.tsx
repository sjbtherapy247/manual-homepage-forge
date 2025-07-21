import blogPlaceholder1 from '@/assets/blog-placeholder-1.jpg';
import blogPlaceholder2 from '@/assets/blog-placeholder-2.jpg';
import blogPlaceholder3 from '@/assets/blog-placeholder-3.jpg';

const ManualSection = () => {
  const posts = [
    {
      id: 1,
      title: "What Racing Taught Me About Business",
      excerpt: "The parallels between high-performance racing and business excellence are more profound than you might think.",
      category: "Performance Files",
      image: blogPlaceholder1
    },
    {
      id: 2,
      title: "Building Systems That Actually Work",
      excerpt: "Most productivity systems fail because they ignore the human element. Here's how to build ones that stick.",
      category: "Workshop Notes",
      image: blogPlaceholder2
    },
    {
      id: 3,
      title: "The Art of Deliberate Practice",
      excerpt: "How to move beyond repetition and into the realm of true skill development through intentional effort.",
      category: "Mindset Mechanics",
      image: blogPlaceholder3
    }
  ];

  return (
    <section id="manual" className="manual-section">
      <div className="manual-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            From the Manual
          </h2>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="manual-card group cursor-pointer">
              {/* Post Image */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Category Tag */}
              <div className="mb-4">
                <span className="manual-tag">
                  {post.category}
                </span>
              </div>

              {/* Post Title */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {post.title}
              </h3>

              {/* Post Excerpt */}
              <p className="text-muted-foreground font-body leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManualSection;