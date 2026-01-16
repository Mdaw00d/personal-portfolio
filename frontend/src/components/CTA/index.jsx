function CTA() {
  const whatsappNumber = '923330262115'
  const whatsappMessage = 'Hi Muhammad Dawood! I would like to discuss a project with you.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section
      id="cta"
      className="section-padding bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h2 className="heading-2 mb-6 text-gray-100">
          Let's Work Together
        </h2>
        <p className="body-text mb-10 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
          aria-label="Contact Muhammad Dawood on WhatsApp"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default CTA
