import projectCarRebuild from '@/assets/project-car-rebuild.jpg';
import projectWorkshopSystems from '@/assets/project-workshop-systems.jpg';

const WorkshopSection = () => {
  const projects = [
    {
      id: 1,
      title: "The Car Rebuild",
      description: "Applying principles of patience and problem-solving to a classic machine.",
      status: "Ongoing",
      image: projectCarRebuild
    },
    {
      id: 2,
      title: "Workshop Systems Optimization",
      description: "Designing and implementing efficient workflow systems for the modern craftsman.",
      status: "Complete",
      image: projectWorkshopSystems
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'complete':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="workshop" className="manual-section bg-manual-section-bg">
      <div className="manual-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            From the Workshop
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article key={project.id} className="manual-card group cursor-pointer">
              {/* Project Image */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Status Tag */}
              <div className="flex items-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;