import { Helmet } from 'react-helmet-async'
import { Compass, ScanSearch, Lightbulb, Building2, TrendingUp, GitMerge, Brain } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: Compass,
    title: 'Venture Strategi',
    description: 'Identifiera vilken venturemodell som passar bäst. Skapa interna innovationsteam, samarbeta med startups eller investera i externa ventures.',
  },
  {
    icon: ScanSearch,
    title: 'Opportunity Mapping',
    description: 'Analysera marknader och branscher för att hitta potential för tillväxt och innovation. Identifiera affärsområden, konkurrenter och kundbehov.',
  },
  {
    icon: Lightbulb,
    title: 'Konceptutveckling',
    description: 'Utveckla koncept och idéer som kan omvandlas till nya ventures. Skapa MVP tjänster, utvärdera teknikplattformar eller designa affärsmodeller.',
  },
  {
    icon: Building2,
    title: 'Bolagsbyggande',
    description: 'Bygga nya venturebolag, etablera team och organisation. Motivera personal. Hitta och säkra finansiering. Implementera processer för mätning.',
  },
  {
    icon: TrendingUp,
    title: 'Tillväxt & Skalning',
    description: 'Skala upp och expandera verksamheten. Hitta nya kunder, utveckla nya produkter eller tjänster, eller expandera till nya marknader.',
  },
  {
    icon: GitMerge,
    title: 'Exit / Integration',
    description: 'När venturebolaget har nått sina mål och skapat värde för moderbolaget, hjälper vi till att avgöra om det är dags att sälja eller integrera det med moderbolaget.',
  },
]

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Helmet>
        <title>Morning Ventures — Venture Studio för etablerade företag</title>
        <meta name="description" content="Morning Ventures är en venture studio som hjälper etablerade företag att bygga nya affärer med startup-metodik och entreprenöriellt tänkande." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="hero" id="home">
        <div className="hero-inner">
          <h1 className="hero-animate hero-animate--1">En venture studio för etablerade företag.</h1>
          <p className="hero-sub hero-animate hero-animate--2">
            Ta hjälp av startup entreprenörer för att snabbare utnyttja ditt etablerade bolags
            befintliga tillgångar och släpp loss dina inbyggda orättvisa konkurrensfördelar.
          </p>
          <a href="#what-we-do" className="btn btn-yellow hero-animate hero-animate--3">Vad är corporate venturing?</a>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="section section-dark" id="what-we-do">
        <div className="section-inner">
          <div className="what-header">
            <h2 className="what-quote" data-reveal data-delay="0">
              Många inser att de kan göra något. Få vet vad, färre vet hur. Vi är de som ser till att det händer.
            </h2>
            <p className="what-desc" data-reveal data-delay="120">
              Världen förändras och teknologiska möjligheter och hot uppstår allt snabbare. Därför börjar allt fler
              stora företag arbeta med corporate venturing. En process där man skapar nya bolag och tjänster baserat
              på den befintliga verksamhetens styrkor men med startups tankesätt och arbetsmetoder.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className="service-card" data-reveal data-delay={i * 120}>
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
          <h2>Vem är du?</h2>
          <p className="block-body">
            Du är företagsägare, affärsutvecklare eller grundare som vill öka tempot. Du ser digitala möjligheter men behöver en partner som inte bara hjälper dig rita kartan, utan också hålla i ratten. Vi söker dig som vill kombinera egna resurser med ett team som har mandat och förmåga att exekvera på riktigt.
          </p>
        </div>
      </section>

      {/* ── Vilka är vi? / Image ── */}
      <section className="split-grid" id="about">
        <div className="split-grid__block split-grid__block--yellow" data-reveal data-delay="0">
          <p className="block-label">Vilka är vi?</p>
          <p className="block-body">
            This is not our first rodeo. Vi är operativa entreprenörer som bygger, finansierar och skalar bolag. Vi kliver in där det behövs som mest genom interim management, strategisk rekrytering och finansiering för att säkra er tillväxt.
          </p>
          <p className="block-body" style={{ marginTop: '1rem' }}>
            Vår metodik bygger på att vara en partner som identifierar tillgångar och lösningar, snarare än en passiv leverantör. AI är en av våra viktigaste enablers; vi nyttjar tekniken för att radikalt korta tid till marknad, öka precisionen i beslutsunderlag och snabbt kapitalisera på era tillgångar. Vi tar ansvar för hela resan – från första analys till en skalbar, lönsam affär.
          </p>
        </div>
        <div className="split-grid__img" data-reveal data-delay="150">
          <img src="/vilka-ar-vi.jpg" alt="Morning Ventures team in strategy session" loading="lazy" />
        </div>
      </section>

      {/* ── AI Section ── */}
      <section className="section section-ai" id="ai">
        <div className="section-inner ai-inner">
          <Brain className="ai-icon" size={80} strokeWidth={1} data-reveal data-delay="0" />
          <h2 className="ai-heading" data-reveal data-delay="100">AI = Accelerera eller bli omsprungen.</h2>
          <p className="ai-body" data-reveal data-delay="200">
            AI är inte en teknisk diskussion, det är ett avgörande vägval för framtidens affär. Inom corporate
            venturing raderar AI friktionen mellan storföretagets tyngd och startup-världens hastighet. Det
            handlar om att ge tillgångar rätt kraft och riktning i en tid av aldrig tidigare skådad
            accelererad förändring.
          </p>
          <p className="ai-body" data-reveal data-delay="300">
            Vi integrerar AI i hela kedjan – från research och tjänsteutveckling till exekvering – detta
            kortar radikalt tiden till marknad. Rätt utnyttjat är AI en avgörande möjlighet att snabbt
            kapitalisera på befintliga värden. Missas tåget är risken att agila, AI-native utmanare gör
            det på samma marknad.
          </p>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section section-contact section-dark" id="contact">
        <div className="section-inner section-inner--narrow">
          <h2 className="contact-heading" data-reveal data-delay="0">Vill du veta mer?</h2>
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
              const subject = encodeURIComponent(`Kontakt från ${name}${company ? ` (${company})` : ''}`)
              const body    = encodeURIComponent(`Namn: ${name}\nFöretag: ${company}\nE-post: ${email}\n\n${message}`)
              window.location.href = `mailto:info@morgenland.se?subject=${subject}&body=${body}`
            }}
          >
            <input name="name"    type="text"  placeholder="För- & efternamn" required />
            <input name="company" type="text"  placeholder="Företag" />
            <input name="email"   type="email" placeholder="E-post" required />
            <textarea name="message" placeholder="Hur kan vi hjälpa dig?" rows={5} />
            <div className="form-submit">
              <button type="submit" className="btn btn-yellow">Hör av dig!</button>
            </div>
          </form>
          <p className="contact-address" data-reveal data-delay="200">
            Regeringsgatan 111<br />111 39 Stockholm
          </p>
        </div>
      </section>

      <footer className="footer footer-dark">
        <p>© {new Date().getFullYear()} Morning Ventures AB</p>
      </footer>
    </>
  )
}
