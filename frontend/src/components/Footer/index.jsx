import { navigationLinks, socialLinks } from '../../data/navigationData'
import NavigationLinks from './NavigationLinks'

function Footer() {
  const currentYear = new Date().getFullYear()

  // Sort navigation links by order
  const sortedNavLinks = [...navigationLinks].sort((a, b) => a.order - b.order)

  return (
    <footer
      id="contact"
      className="bg-gray-950 border-t border-gray-800 py-12"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <div className="mb-8">
          <NavigationLinks links={sortedNavLinks} />
        </div>

        {/* Social Media Links */}
        <div className="mb-8">
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform"
                aria-label={`Visit ${social.platform}`}
              >
                <span className="text-sm font-medium">{social.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Muhammad Dawood Butt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
