import { useEffect, useState } from 'react'
import './App.css'

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

const skillIcons = [
  { name: 'HTML', src: '/images/html.png' },
  { name: 'CSS', src: '/images/css.png' },
  { name: 'JavaScript', src: '/images/javascript.png' },
  { name: 'PHP', src: '/images/php.png' },
  { name: 'Python', src: '/images/python.png' },
  { name: 'MySQL', src: '/images/mysql.png' },
  { name: 'Flutter', src: '/images/flutter.png' },
  { name: 'Git', src: '/images/git.png' },
  { name: 'Figma', src: '/images/figma.png' },
  { name: 'UML', src: '/images/uml.png' },
]

const projects = [
  {
    title: 'Horus Dungaen',
    description: 'Proyecto desarrollado con las tecnologías que dominas. Descripción breve del proyecto.',
    logo: '/images/logo_horus_dungaen.gif',
    href: '#',
  },
  {
    title: 'PetCare',
    description: 'Aplicación o sitio relacionado con cuidado de mascotas. Descripción breve del proyecto.',
    logo: '/images/logo_petcare.png',
    href: '#',
  },
]

function App() {
  const [headerAlpha, setHeaderAlpha] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const sobreMi = document.getElementById('sobre-mi')
      const limit =
        (sobreMi?.offsetTop ?? 400) -
        80 // algo por encima de la sección

      const y = window.scrollY
      if (y <= 0) {
        setHeaderAlpha(0)
        return
      }

      const progress = Math.min(Math.max(y / Math.max(limit, 1), 0), 1)
      setHeaderAlpha(progress)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className="header"
        style={{
          backgroundColor: `rgba(10, 10, 10, ${0.96 * headerAlpha})`,
          opacity: headerAlpha,
        }}
      >
        <div className="header-inner">
          <a href="#" className="logo">Portafolio</a>
          <nav className="nav" aria-label="Principal">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </nav>
          <a href="#contacto" className="btn btn-primary btn-sm">Contacto</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-photo-wrap">
            <img
              src="/images/portfolio.jpg"
              alt="Foto de perfil"
              className="hero-photo"
            />
            <h1 className="hero-title">Hola <span>Mundo</span></h1>
          </div>
          <p className="hero-desc">
            Ingeniero en Informática y desarrollador web full stack, especializado en crear experiencias digitales claras y efectivas.
          </p>
          <a href="#habilidades" className="hero-scroll" aria-label="Bajar">
            <img src="/images/icono_de_flecha_abajo.png" alt="" />
          </a>
        </section>

        <section id="sobre-mi" className="section section-alt">
          <h2 className="section-title">Sobre <span>mí</span></h2>
          <div className="about-content">
            <p>
              Soy Francisco Ignacio Soto Reyes, ingeniero en Informática de 29 años y un apasionado de la tecnología. Me motiva transformar ideas en productos reales que aporten valor tanto a personas como a organizaciones.
            </p>
            <p>
              A lo largo de mi carrera me he desempeñado como desarrollador web full stack y consultor Azure, combinando la parte técnica con experiencia en gerencia. Tuve la oportunidad de liderar como project manager el desarrollo de un software educativo, conectando equipos, objetivos y plazos.
            </p>
            <p>
              Fuera del escritorio me encontrarás corriendo, haciendo mountain bike o trekking: deportes que me han enseñado disciplina, constancia y cómo avanzar paso a paso hacia metas exigentes.
            </p>
          </div>
        </section>

        <section id="habilidades" className="section">
          <h2 className="section-title">Habilidades <span>& tecnologías</span></h2>
          <div className="skills-grid">
            {skillIcons.map(({ name, src }) => (
              <div key={name} className="skill-item">
                <img src={src} alt={name} className="skill-icon" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="proyectos" className="section section-alt">
          <h2 className="section-title">Proyectos <span>destacados</span></h2>
          <div className="projects-grid">
            {projects.map(({ title, description, logo, href }) => (
              <article key={title} className="card card-project">
                <div className="card-logo-wrap">
                  <img src={logo} alt={title} className="card-logo" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={href} className="card-link">Ver proyecto →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="section contact-section">
          <h2 className="section-title">Contacto</h2>
          <p className="contact-text">
            ¿Tienes un proyecto en mente? Escríbeme.
          </p>
          <div className="contact-links">
            <a href="mailto:tu@email.com" className="btn btn-primary">tu@email.com</a>
            <a href="https://github.com/Frwops" target="_blank" rel="noopener noreferrer" className="contact-social">GitHub</a>
            <a href="#" className="contact-social">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} — Portafolios</p>
        </div>
      </footer>
    </>
  )
}

export default App
