import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Content } from '../content/sv'

interface Props {
  content: Content
  lang: 'sv' | 'en'
}

export default function Header({ content: c, lang }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <Link to={lang === 'en' ? '/en' : '/'} className="logo">
          <img src="/logo-black.svg" alt="Morning Ventures" height="28" />
        </Link>

        <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>{c.nav.home}</a>
          <a href="#what-we-do" onClick={() => setMenuOpen(false)}>{c.nav.whatWeDo}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{c.nav.about}</a>
          <a href="#why-morning" onClick={() => setMenuOpen(false)}>{c.nav.whyMorning}</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>{c.nav.contact}</a>
        </nav>

        <div className="header-right">
          <Link to={lang === 'sv' ? '/en' : '/'} className="lang-toggle">
            {lang === 'sv' ? 'EN' : 'SV'}
          </Link>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
