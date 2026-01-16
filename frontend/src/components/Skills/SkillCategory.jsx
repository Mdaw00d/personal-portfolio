import PropTypes from 'prop-types'
import SkillBadge from './SkillBadge'

function SkillCategory({ category }) {
  return (
    <div className="card group">
      <h3 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center gap-2">
        <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-pulse"></span>
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}

SkillCategory.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    order: PropTypes.number.isRequired
  }).isRequired
}

export default SkillCategory
