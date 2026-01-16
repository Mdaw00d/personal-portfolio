function Education() {
  const education = [
    {
      id: 1,
      degree: 'Web Development Course',
      institution: 'Governor Initiative of Artificial Intelligence (GIAIC)',
      period: 'Ongoing',
      description: 'Comprehensive web development program with focus on modern technologies and AI integration.',
      highlights: [
        'Currently Learning: Agentic AI',
        'Currently Learning: Cloud Native Development',
        'Building full-stack web applications'
      ]
    },
    {
      id: 2,
      degree: 'Intermediate in Computer Science',
      institution: 'Bahria College',
      period: 'Completed 2023',
      description: 'Built strong foundation in computer science fundamentals and programming.',
      highlights: [
        'Completed intermediate education in Computer Science',
        'Developed foundational programming skills',
        'Prepared for advanced studies in software development'
      ]
    }
  ]

  return (
    <section
      id="education"
      className="section-padding bg-gray-900 relative overflow-hidden"
      aria-label="Education background"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-2 text-gray-100 mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-lg">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-gray-300 font-semibold">
                    {edu.institution}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-gray-700 text-cyan-400 rounded-lg text-sm font-medium border border-gray-600">
                    {edu.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {edu.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Highlights
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, hlIndex) => (
                    <li
                      key={hlIndex}
                      className="flex items-start text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>{highlight}</span>
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

export default Education
