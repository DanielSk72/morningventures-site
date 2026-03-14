import { Helmet } from 'react-helmet-async'

const services = [
  {
    title: 'Venture Strategi',
    description: 'Vi kartlägger era styrkor och möjligheter och definierar en venture-strategi som skapar tillväxt utanför kärnaffären.',
  },
  {
    title: 'Opportunity Mapping',
    description: 'Systematisk identifiering av obearbetade marknader, latenta kundbehov och vita fläckar som kan bli nya affärer.',
  },
  {
    title: 'Konceptutveckling',
    description: 'Från insikt till prototyp – vi validerar idéer snabbt med lean-metodik innan ni investerar fullt ut.',
  },
  {
    title: 'Bolagsbyggande',
    description: 'Vi hjälper er att rekrytera, strukturera och lansera nya bolag med rätt ägarmodell och styrning från dag ett.',
  },
  {
    title: 'Tillväxt & Skalning',
    description: 'Go-to-market, distribution och skalbarhet – vi accelererar tillväxten med beprövade metoder från startup-världen.',
  },
  {
    title: 'Exit / Integration',
    description: 'Strategisk rådgivning kring exit, M&A eller integration av nya ventures i befintlig koncernstruktur.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Morning Ventures — Venture Studio för etablerade företag</title>
        <meta name="description" content="Morning Ventures är en venture studio som hjälper etablerade företag att bygga nya affärer med startup-metodik och entreprenöriellt tänkande." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-inner">
          <p className="hero-label">Venture Studio</p>
          <h1>Många inser att de kan göra något. Få vet vad. Färre vet hur.</h1>
          <p className="hero-sub">
            Vi är teamet som får det att hända. Morning Ventures hjälper etablerade företag att bygga nya affärer med startup-metodik och entreprenöriellt tänkande.
          </p>
          <a href="#contact" className="btn btn-primary">Kom i kontakt</a>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="section" id="what-we-do">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">Vad vi gör</p>
            <h2>En venture studio för etablerade företag</h2>
            <p className="section-desc">
              Vi kombinerar era befintliga tillgångar — varumärke, kapital, kunder och kompetens — med startup-metodikens hastighet och flexibilitet.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Morning ── */}
      <section className="section section-dark" id="why-morning">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">Varför Morning?</p>
            <h2>Bryggan mellan etablerat och nytt</h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <h3>Etablerade styrkor</h3>
              <p>Ni har varumärke, kunder och kapital. Vi vet hur man aktiverar dem för att skapa nytt.</p>
            </div>
            <div className="why-item">
              <h3>Startup-hastighet</h3>
              <p>Vi rör oss snabbt, validerar tidigt och pivoterar utan prestige – precis som de bästa startups.</p>
            </div>
            <div className="why-item">
              <h3>Från strategi till bolag</h3>
              <p>Vi stannar inte vid PowerPoint. Vi bygger med er hela vägen – från idé till lanserat bolag.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section" id="about">
        <div className="section-inner section-inner--narrow">
          <p className="section-label">Om oss</p>
          <h2>Operativa entrepreneurs med track record</h2>
          <p className="section-desc">
            Morning Ventures grundades av entrepreneurs och bolagsbyggare med erfarenhet från allt från börsnoteringarna till bootstrappade nischer. Vi vet vad som krävs – och vi gör det tillsammans med er, inte åt er.
          </p>
          <p className="section-desc" style={{ marginTop: '1rem' }}>
            Vi sitter på Regeringsgatan 111 i Stockholm och arbetar med etablerade bolag som söker snabbare digital transformation och vill möta branschutmaningar med ny kraft.
          </p>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section section-contact" id="contact">
        <div className="section-inner section-inner--narrow">
          <p className="section-label">Kontakt</p>
          <h2>Redo att bygga något nytt?</h2>
          <p className="section-desc">Hör av er – vi berättar gärna mer om hur vi arbetar.</p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Namn" required />
              <input type="text" placeholder="Företag" />
            </div>
            <input type="email" placeholder="E-post" required />
            <textarea placeholder="Meddelande" rows={5} required />
            <button type="submit" className="btn btn-primary">Skicka</button>
          </form>
          <p className="contact-address">Regeringsgatan 111, 111 39 Stockholm</p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Morning Ventures AB</p>
      </footer>
    </>
  )
}
