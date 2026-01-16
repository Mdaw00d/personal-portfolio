import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Experience from '../../components/Experience'
import Education from '../../components/Education'
import CTA from '../../components/CTA'

function Home() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <CTA />
    </Layout>
  )
}

export default Home
