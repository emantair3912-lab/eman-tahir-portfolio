import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { EngineeringMindset } from '@/components/engineering-mindset'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { AcademicExperience } from '@/components/academic-experience'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <EngineeringMindset />
        <Skills />
        <Projects />
        <AcademicExperience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
