import { Helmet } from 'react-helmet-async'
import { Brain } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import type { Content } from '../content/sv'

interface Props { content: Content }

export default function Home({ content: c }: Props) {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
      </Helmet>

      {/* ── Hero ── */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <h1 className="hero-animate hero-animate--1">{c.hero.heading}</h1>
          <p className="hero-sub hero-animate hero-animate--2">{c.hero.sub}</p>
          <a href="#what-we-do" className="btn btn-yellow hero-animate hero-animate--3">{c.hero.cta}</a>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="section section-dark" id="what-we-do">
        <div className="section-inner">
          <div className="what-header">
            <h2 className="what-quote" data-reveal data-delay="0">{c.whatWeDo.quote}</h2>
            <p className="what-desc" data-reveal data-delay="120">{c.whatWeDo.desc}</p>
          </div>
          <div className="services-grid">
            {c.services.map((s) => (
              <div key={s.title} className="service-card">
                <s.icon className="service-icon" size={22} strokeWidth={1.5} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image / Vem är du? ── */}
      <section className="split-grid" id="why-morning">
        <div className="split-grid__img" data-reveal data-delay="0">
          <img src="/vem-ar-du.png" alt="Entrepreneurs collaborating in a modern office" loading="lazy" />
        </div>
        <div className="split-grid__block split-grid__block--white" data-reveal data-delay="150">
          <h2>{c.vemArDu.heading}</h2>
          <p className="block-body">{c.vemArDu.body}</p>
        </div>
      </section>

      {/* ── Vilka är vi? / Image ── */}
      <section className="split-grid" id="about">
        <div className="split-grid__block split-grid__block--yellow" data-reveal data-delay="0">
          <p className="block-label">{c.vilkaArVi.label}</p>
          <p className="block-body">{c.vilkaArVi.body1}</p>
          <p className="block-body" style={{ marginTop: '1rem' }}>{c.vilkaArVi.body2}</p>
        </div>
        <div className="split-grid__img" data-reveal data-delay="150">
          <img src="/vilka-ar-vi.jpg" alt="Morning Ventures team in strategy session" loading="lazy" />
        </div>
      </section>

      {/* ── AI Section ── */}
      <section className="section section-ai" id="ai">
        <div className="section-inner ai-inner">
          <Brain className="ai-icon" size={80} strokeWidth={1} data-reveal data-delay="0" />
          <h2 className="ai-heading" data-reveal data-delay="100">{c.ai.heading}</h2>
          <p className="ai-body" data-reveal data-delay="200">{c.ai.body1}</p>
          <p className="ai-body" data-reveal data-delay="300">{c.ai.body2}</p>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section section-contact section-dark" id="contact">
        <div className="section-inner section-inner--narrow">
          <h2 className="contact-heading" data-reveal data-delay="0">{c.contact.heading}</h2>
          <form
            className="contact-form"
            data-reveal
            data-delay="120"
            onSubmit={(e) => {
              e.preventDefault()
              const fd = new FormData(e.currentTarget)
              const name    = fd.get('name') as string
              const company = fd.get('company') as string
              const email   = fd.get('email') as string
              const message = fd.get('message') as string
              const subject = encodeURIComponent(c.contact.emailSubject(name, company))
              const body    = encodeURIComponent(c.contact.emailBody(name, company, email, message))
              window.location.href = `mailto:info@morgenland.se?subject=${subject}&body=${body}`
            }}
          >
            <input name="name"    type="text"  placeholder={c.contact.name}    required />
            <input name="company" type="text"  placeholder={c.contact.company} />
            <input name="email"   type="email" placeholder={c.contact.email}   required />
            <textarea name="message" placeholder={c.contact.message} rows={5} />
            <div className="form-submit">
              <button type="submit" className="btn btn-yellow">{c.contact.submit}</button>
            </div>
          </form>
          <p className="contact-address" data-reveal data-delay="200">
            Regeringsgatan 111<br />111 39 Stockholm
          </p>
        </div>
      </section>

      <footer className="footer footer-dark">
        <p>{c.footer.copy}</p>
      </footer>
    </>
  )
}
