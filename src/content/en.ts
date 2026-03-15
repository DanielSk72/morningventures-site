import { Compass, ScanSearch, Lightbulb, Building2, TrendingUp, GitMerge } from 'lucide-react'
import type { Content } from './sv'

export const en: Content = {
  meta: {
    title: 'Morning Ventures — Venture Studio for Established Companies',
    description: 'Morning Ventures is a venture studio helping established companies build new businesses using startup methodology and entrepreneurial thinking.',
  },
  nav: {
    home: 'Home',
    whatWeDo: 'What we do',
    about: 'About us',
    whyMorning: 'Why Morning?',
    contact: 'Contact',
  },
  hero: {
    heading: 'A venture studio for established companies.',
    sub: 'Leverage startup entrepreneurs to faster exploit your established company\'s existing assets and unleash your built-in unfair competitive advantages.',
    cta: 'What is corporate venturing?',
  },
  whatWeDo: {
    quote: 'Many realise they can do something. Few know what, fewer know how. We are the ones who make it happen.',
    desc: 'The world is changing and technological opportunities and threats emerge faster than ever. That\'s why more and more large companies are working with corporate venturing — a process of creating new companies and services based on existing strengths, but with a startup mindset and working methods.',
  },
  services: [
    { icon: Compass,    title: 'Venture Strategy',      description: 'Identify which venture model fits best. Create internal innovation teams, collaborate with startups, or invest in external ventures.' },
    { icon: ScanSearch, title: 'Opportunity Mapping',   description: 'Analyse markets and industries to find potential for growth and innovation. Identify business areas, competitors and customer needs.' },
    { icon: Lightbulb,  title: 'Concept Development',   description: 'Develop concepts and ideas that can be transformed into new ventures. Build MVP services, evaluate technology platforms or design business models.' },
    { icon: Building2,  title: 'Company Building',      description: 'Build new venture companies, establish teams and organisation. Motivate staff. Find and secure financing. Implement measurement processes.' },
    { icon: TrendingUp, title: 'Growth & Scaling',      description: 'Scale up and expand operations. Find new customers, develop new products or services, or expand into new markets.' },
    { icon: GitMerge,   title: 'Exit / Integration',    description: 'When the venture company has reached its goals and created value for the parent company, we help determine whether it\'s time to sell or integrate.' },
  ],
  vemArDu: {
    heading: 'Who are you?',
    body: 'You are a business owner, business developer or founder who wants to accelerate. You see digital opportunities but need a partner who doesn\'t just help you draw the map, but also holds the wheel. We are looking for those who want to combine their own resources with a team that has the mandate and ability to execute for real.',
  },
  vilkaArVi: {
    label: 'Who are we?',
    body1: 'This is not our first rodeo. We are operative entrepreneurs who build and scale companies. We step in where it\'s needed most through interim management, strategic recruitment, product development and financing to secure growth. We know that all reward requires risk and nothing comes for free.',
    body2: 'Our methodology is built on being a partner that defines how assets can become new solutions, rather than a passive supplier. Experience + AI means we leverage technology to radically shorten time to market, increase precision in decision-making and rapidly materialise.',
  },
  ai: {
    heading: 'AI = Accelerate or get overtaken.',
    body1: 'AI is not a technical discussion — it\'s a decisive strategic choice for the future of business. In corporate venturing, AI erases the friction between the weight of a large corporation and the speed of the startup world. It\'s about giving assets the right force and direction in a time of never-before-seen accelerated change.',
    body2: 'We integrate AI across the entire chain — from research and service development to execution — radically shortening time to market. Properly leveraged, AI is a decisive opportunity to quickly capitalise on existing assets. Miss the train and agile, AI-native challengers will do it on your market instead.',
  },
  contact: {
    heading: 'Want to know more?',
    name: 'Full name',
    company: 'Company',
    email: 'Email',
    message: 'How can we help you?',
    submit: 'Get in touch!',
    emailSubject: (name: string, company: string) => `Contact from ${name}${company ? ` (${company})` : ''}`,
    emailBody: (name: string, company: string, email: string, message: string) =>
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
  },
  footer: {
    copy: `© ${new Date().getFullYear()} Morning Ventures AB`,
  },
}
