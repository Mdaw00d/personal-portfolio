import PropTypes from 'prop-types'

function NavigationLinks({ links }) {
  return (
    <nav aria-label="Footer navigation">
      <ul className="flex flex-wrap justify-center gap-8">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium hover:scale-105 transform inline-block"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

NavigationLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired
    })
  ).isRequired
}

export default NavigationLinks
