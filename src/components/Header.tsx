import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <img src="/logo-black.svg" alt="Morning Ventures" height="28" />
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav${menuOpen ? ' nav--open' : ''}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>Hem</a>
          <a href="#what-we-do" onClick={() => setMenuOpen(false)}>Vad vi gör</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Om oss</a>
          <a href="#why-morning" onClick={() => setMenuOpen(false)}>Varför Morning?</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Kontakt</a>
        </nav>
      </div>
    </header>
  )
}
