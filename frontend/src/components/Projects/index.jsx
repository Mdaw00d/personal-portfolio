function Projects() {
  // Placeholder projects data
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A book discovery website enhanced with an AI-powered chatbot that intelligently answers user queries about books. The chatbot is designed to understand user intent, deliver context-aware responses, and improve information access, creating a more interactive and personalized browsing experience.',
      tags: ['React', 'Node.js', 'Typscript', 'Nextjs', 'TailwindCss','Spec-driven Development','Neon db', 'Qdrant'],
      link: 'https://ai-native-book-website.vercel.app/'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Built a fully functional e-commerce store featuring dynamic routing for product pages, add-to-cart functionality, smart product search, and category-based filtering. The application focuses on smooth user experience, scalable structure, and clean UI for real-world usability.',
      tags: ['React', 'Node.js', 'Sanitycms', 'Nextjs', 'Typscript', 'TailwindCss'],
      link: 'https://capstone-project-livid-two.vercel.app/'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A modern frontend-only e-commerce website built with TypeScript and Tailwind CSS, emphasizing responsive design, clean component structure, and smooth user interactions. The project focuses on scalable UI patterns, reusable components, and consistent styling to deliver a fast, visually polished shopping experience across devices.',
      tags: ['React', 'Node.js', 'Nextjs', 'Typscript', 'TailwindCss'],
      link: 'https://uiux-hcktn.vercel.app/'
    }
  ]

  return (
    <section
      id="projects"
      className="section-padding bg-gray-900 relative"
      aria-label="My projects"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/30 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-2 text-gray-100 mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Explore my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="skill-badge text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group/link"
              >
                View Project
                <svg
                  className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
