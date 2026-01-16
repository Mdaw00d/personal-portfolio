function Experience() {
  // Placeholder experience data
  const experiences = [
    {
      id: 1,
      title: 'Worked As a Freelancer',
      period: '2023 - Present',
      description: 'Worked as a freelance front-end developer, creating modern and responsive websites. Built a complete e-commerce platform and an AI-powered book website, focusing on clean design, smooth user experience, and good performance.',
      achievements: [
        'Developed modern, responsive front-end projects for multiple clients',
        'Designed and built a fully functional e-commerce website with product listings, cart, and checkout features',
        'Ensured website performance, accessibility, and mobile responsiveness',
        'Collaborated with clients, Developed modern, responsive front-end projects for multiple clients',
        'Designed and built a fully functional e-commerce website with product listings, cart, and checkout features',
        'Ensured website performance, accessibility, and mobile responsiveness',
        
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Another Company',
      period: '2024-Present',
      description: 'Developed full-stack applications using Spec-Driven Development.',
      achievements: [
        'Made an AI Native book website using Spec driven Development',
        'Reduced bug rate by 30%',
        'Made a To-do list app containing all required functionalities'
      ]
    },
  ]

  return (
    <section
      id="experience"
      className="section-padding bg-gray-800 relative overflow-hidden"
      aria-label="Work experience"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-2 text-gray-100 mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-300 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-gray-700 text-cyan-400 rounded-lg text-sm font-medium border border-gray-600">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
