import { skillsCategories } from '../../data/skillsData'
import SkillCategory from './SkillCategory'

function Skills() {
  // Sort categories by order
  const sortedCategories = [...skillsCategories].sort((a, b) => a.order - b.order)

  return (
    <section
      id="skills"
      className="section-padding bg-gray-900 relative"
      aria-label="Technical skills"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-2 text-gray-100 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCategories.map((category, index) => (
            <div
              key={category.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillCategory category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
