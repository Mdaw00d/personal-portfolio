import PropTypes from 'prop-types'

function SkillBadge({ skill }) {
  return (
    <span className="skill-badge">
      {skill}
    </span>
  )
}

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired
}

export default SkillBadge
