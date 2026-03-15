import { Compass, ScanSearch, Lightbulb, Building2, TrendingUp, GitMerge } from 'lucide-react'

export const sv = {
  meta: {
    title: 'Morning Ventures — Venture Studio för etablerade företag',
    description: 'Morning Ventures är en venture studio som hjälper etablerade företag att bygga nya affärer med startup-metodik och entreprenöriellt tänkande.',
  },
  nav: {
    home: 'Hem',
    whatWeDo: 'Vad vi gör',
    about: 'Om oss',
    whyMorning: 'Varför Morning?',
    contact: 'Kontakt',
  },
  hero: {
    heading: 'En venture studio för etablerade företag.',
    sub: 'Ta hjälp av startup entreprenörer för att snabbare utnyttja ditt etablerade bolags befintliga tillgångar och släpp loss dina inbyggda orättvisa konkurrensfördelar.',
    cta: 'Vad är corporate venturing?',
  },
  whatWeDo: {
    quote: 'Många inser att de kan göra något. Få vet vad, färre vet hur. Vi är de som ser till att det händer.',
    desc: 'Världen förändras och teknologiska möjligheter och hot uppstår allt snabbare. Därför börjar allt fler stora företag arbeta med corporate venturing. En process där man skapar nya bolag och tjänster baserat på den befintliga verksamhetens styrkor men med startups tankesätt och arbetsmetoder.',
  },
  services: [
    { icon: Compass,    title: 'Venture Strategi',     description: 'Identifiera vilken venturemodell som passar bäst. Skapa interna innovationsteam, samarbeta med startups eller investera i externa ventures.' },
    { icon: ScanSearch, title: 'Opportunity Mapping',  description: 'Analysera marknader och branscher för att hitta potential för tillväxt och innovation. Identifiera affärsområden, konkurrenter och kundbehov.' },
    { icon: Lightbulb,  title: 'Konceptutveckling',    description: 'Utveckla koncept och idéer som kan omvandlas till nya ventures. Skapa MVP tjänster, utvärdera teknikplattformar eller designa affärsmodeller.' },
    { icon: Building2,  title: 'Bolagsbyggande',       description: 'Bygga nya venturebolag, etablera team och organisation. Motivera personal. Hitta och säkra finansiering. Implementera processer för mätning.' },
    { icon: TrendingUp, title: 'Tillväxt & Skalning',  description: 'Skala upp och expandera verksamheten. Hitta nya kunder, utveckla nya produkter eller tjänster, eller expandera till nya marknader.' },
    { icon: GitMerge,   title: 'Exit / Integration',   description: 'När venturebolaget har nått sina mål och skapat värde för moderbolaget, hjälper vi till att avgöra om det är dags att sälja eller integrera det med moderbolaget.' },
  ],
  vemArDu: {
    heading: 'Vem är du?',
    body: 'Du är företagsägare, affärsutvecklare eller grundare som vill öka tempot. Du ser digitala möjligheter men behöver en partner som inte bara hjälper dig rita kartan, utan också hålla i ratten. Vi söker dig som vill kombinera egna resurser med ett team som har mandat och förmåga att exekvera på riktigt.',
  },
  vilkaArVi: {
    label: 'Vilka är vi?',
    body1: 'This is not our first rodeo. Vi är operativa entreprenörer som bygger och skalar bolag. Vi kliver in där det behövs som mest genom interim management, strategisk rekrytering, produktutveckling och finansiering för att säkra tillväxt. Vi vet att all belöning kräver risk och inget kommer gratis.',
    body2: 'Vår metodik bygger på att vara en partner som definierar hur tillgångar kan bli nya lösningar, snarare än en passiv leverantör. Erfarenhet + AI innebär vi nyttjar teknik för att radikalt korta tid till marknad, öka precision i beslutsunderlag och snabbt materialisera.',
  },
  ai: {
    heading: 'AI = Accelerera eller bli omsprungen.',
    body1: 'AI är inte en teknisk diskussion, det är ett avgörande vägval för framtidens affär. Inom corporate venturing raderar AI friktionen mellan storföretagets tyngd och startup-världens hastighet. Det handlar om att ge tillgångar rätt kraft och riktning i en tid av aldrig tidigare skådad accelererad förändring.',
    body2: 'Vi integrerar AI i hela kedjan – från research och tjänsteutveckling till exekvering – detta kortar radikalt tiden till marknad. Rätt utnyttjat är AI en avgörande möjlighet att snabbt kapitalisera på befintliga värden. Missas tåget är risken att agila, AI-native utmanare gör det på samma marknad.',
  },
  contact: {
    heading: 'Vill du veta mer?',
    name: 'För- & efternamn',
    company: 'Företag',
    email: 'E-post',
    message: 'Hur kan vi hjälpa dig?',
    submit: 'Hör av dig!',
    emailSubject: (name: string, company: string) => `Kontakt från ${name}${company ? ` (${company})` : ''}`,
    emailBody: (name: string, company: string, email: string, message: string) =>
      `Namn: ${name}\nFöretag: ${company}\nE-post: ${email}\n\n${message}`,
  },
  footer: {
    copy: `© ${new Date().getFullYear()} Morning Ventures AB`,
  },
}

export type Content = typeof sv
