/**
 * Portfolio Content & Configuration
 * ---------------------------------------------------------------------------
 * Edit this file to customize copy, stats, skills, projects, timeline items,
 * testimonials, and contact details without touching component markup.
 */

export type ProjectCategory = 'All' | 'Web' | 'UI/UX' | 'Tools';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  year: string;
  role: string;
  shortDescription: string;
  techStack: string[];
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  outcome: string;
  liveUrl: string;
  repoUrl: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  note: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  summary: string;
  items: SkillItem[];
}

export interface TimelineEntry {
  id: string;
  type: 'Work' | 'Education';
  period: string;
  role: string;
  organization: string;
  location: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const PORTFOLIO_PROFILE = {
  displayName: 'Alif Ahmed',
  wordmark: 'Alif Ahmed.',
  realNameCredit: 'Rayhan Uddin',
  roleHeadline: 'Creative Developer, UI/UX Designer & Digital Problem Solver',
  heroHeadline: 'Interfaces engineered for clarity, speed, and quiet craft.',
  heroBio:
    'I design and build responsive web applications, systematic component libraries, and developer tools that turn complex workflows into intuitive digital products.',
  heroPortrait: '/src/assets/images/hero_alif_portrait_1795631011576.jpg',
  heroPortraitAlt:
    'Editorial studio portrait of Alif Ahmed seated at an architectural desk with a laptop and sketchbook',
  location: 'Dhaka, Bangladesh · Remote Worldwide',
  email: 'hello@alifahmed.studio',
  availability: 'Open for select product collaborations in 2027',
  stats: [
    { value: '6+', label: 'Years of Experience' },
    { value: '48', label: 'Completed Projects' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '14', label: 'Design Systems Built' },
  ],
  about: {
    heading: 'Bridging visual precision with resilient frontend architecture.',
    paragraphs: [
      'Operating under the studio moniker Alif Ahmed—the creative portfolio practice led and maintained by Rayhan Uddin—my work sits at the intersection of interaction design and modern web engineering. Over the past six years, I have partnered with product teams, founders, and agencies to ship interfaces that feel effortless on first load and remain maintainable years later.',
      'Rather than treating design and code as separate handoff phases, I prototype directly in the browser, validate accessibility early, and craft modular systems grounded in typography, spacing math, and real user constraints.',
    ],
    principles: [
      {
        index: '01',
        title: 'Clarity before ornamentation',
        description:
          'Every typographic scale, border, and interaction exists to lower cognitive friction and guide user focus.',
      },
      {
        index: '02',
        title: 'Performance as a design material',
        description:
          'Sub-second paints, semantic markup, and keyboard-first accessibility are built into the foundation—not bolted on.',
      },
      {
        index: '03',
        title: 'Maintainable systems over one-offs',
        description:
          'Clean tokens, predictable CSS architecture, and modular JavaScript keep teams shipping with confidence.',
      },
    ],
  },
  socials: [
    { label: 'GitHub', handle: '@alifahmed-dev', href: '#contact' },
    { label: 'LinkedIn', handle: '/in/alifahmed-ux', href: '#contact' },
    { label: 'Dribbble', handle: '@alifahmed.design', href: '#contact' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend-ui',
    title: 'Frontend & UI',
    summary: 'Semantic markup, responsive layout architecture, and interactive client-side engineering.',
    items: [
      { name: 'HTML5 & Semantic Accessibility', level: 96, note: 'WCAG AA landmarks & ARIA' },
      { name: 'CSS3 & Tailwind CSS', level: 95, note: 'Grid, Flexbox & custom tokens' },
      { name: 'JavaScript (ES2024) & TypeScript', level: 92, note: 'Modular state & DOM APIs' },
      { name: 'Performance & Motion Craft', level: 89, note: 'Compositor animations & CWV' },
    ],
  },
  {
    id: 'design-prototyping',
    title: 'Design & Prototyping',
    summary: 'Structuring legible information hierarchies, scalable token libraries, and user flows.',
    items: [
      { name: 'UI/UX Interaction Design', level: 94, note: 'End-to-end user journeys' },
      { name: 'Design Systems & Tokens', level: 91, note: 'Multi-theme component specs' },
      { name: 'Wireframing & Rapid Prototyping', level: 90, note: 'Low-to-high fidelity flows' },
      { name: 'Vector Graphics & Iconography', level: 85, note: 'Custom SVG craft' },
    ],
  },
  {
    id: 'tools-workflow',
    title: 'Tools & Workflow',
    summary: 'Disciplined version control, cross-device QA, and collaborative shipping practices.',
    items: [
      { name: 'Git & Collaborative Workflows', level: 92, note: 'Clean PRs & release hygiene' },
      { name: 'Responsive Cross-Device QA', level: 95, note: '360px mobile to 1440px+ desktop' },
      { name: 'Performance Optimization', level: 90, note: 'Bundle & asset auditing' },
      { name: 'Browser DevTools & Testing', level: 88, note: 'Profiling & unit verification' },
    ],
  },
];

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'kinetix-commerce',
    title: 'Kinetix Audio Storefront',
    category: 'Web',
    year: '2026',
    role: 'Lead Frontend & UI Architect',
    shortDescription:
      'High-contrast headless storefront for precision desktop audio hardware with instant faceted filtering and keyboard-accessible cart flows.',
    techStack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'REST API'],
    image: '/src/assets/images/project_kinetix_commerce_1795631012006.jpg',
    imageAlt: 'Studio monitor displaying the Kinetix Audio dark storefront beside a mechanical keyboard and aluminum DAC',
    challenge:
      'Audio enthusiasts needed to compare technical impedance specs across 60+ SKUs without leaving the catalog grid or waiting on full-page reloads.',
    solution:
      'Built a lightweight client-side filter index paired with an inline spec drawer, reducing comparison clicks by half while keeping LCP under 1.1 seconds.',
    outcome: '+34% checkout completion rate within 90 days of launch.',
    liveUrl: 'https://kinetix-audio.example.com',
    repoUrl: 'https://github.com/alifahmed-dev/kinetix-storefront',
  },
  {
    id: 'meridian-analytics',
    title: 'Meridian Ledger Analytics',
    category: 'Web',
    year: '2025',
    role: 'Senior Product Engineer',
    shortDescription:
      'Treasury and cashflow intelligence web app featuring tabular financial grids, scenario forecasting, and exportable audit reports.',
    techStack: ['TypeScript', 'CSS Grid', 'Canvas Charts', 'Accessible Tables'],
    image: '/src/assets/images/project_meridian_analytics_1795631012647.jpg',
    imageAlt: 'Laptop on a concrete desk displaying the Meridian Ledger financial analytics interface',
    challenge:
      'Finance operators struggled with dense spreadsheets that lacked clear visual hierarchy and broke alignment across currency conversions.',
    solution:
      'Designed an editorial tabular layout locked to monospace tabular numerals, progressive row disclosure, and crisp cobalt trend sparklines.',
    outcome: 'Adopted by 120+ finance teams; cut weekly reconciliation prep time by 42%.',
    liveUrl: 'https://meridian-ledger.example.com',
    repoUrl: 'https://github.com/alifahmed-dev/meridian-analytics',
  },
  {
    id: 'atelier-design-system',
    title: 'Atelier UI Foundation',
    category: 'UI/UX',
    year: '2026',
    role: 'Design Systems Lead',
    shortDescription:
      'Cross-platform editorial design system uniting typography specimens, semantic dark/light tokens, and 45 documented UI primitives.',
    techStack: ['Design Tokens', 'Figma', 'CSS Variables', 'WCAG AA'],
    image: '/src/assets/images/project_atelier_design_system_1795631012183.jpg',
    imageAlt: 'Typography specimen cards, metal grid ruler, and tablet showing Atelier UI component swatches',
    challenge:
      'Four product squads were shipping inconsistent button radii, mismatched contrast ratios, and duplicated modal logic across releases.',
    solution:
      'Authored a strict 60-30-10 color token architecture, nested radius math rules, and interactive documentation synced directly with CSS variables.',
    outcome: 'Reduced UI QA regressions by 58% across three consecutive product launches.',
    liveUrl: 'https://atelier-system.example.com',
    repoUrl: 'https://github.com/alifahmed-dev/atelier-tokens',
  },
  {
    id: 'solace-health-ux',
    title: 'Solace Care Patient Portal',
    category: 'UI/UX',
    year: '2025',
    role: 'Lead UX Designer',
    shortDescription:
      'Calm mobile-first appointment booking and health summary experience crafted to reduce patient anxiety in clinical workflows.',
    techStack: ['UX Research', 'Prototyping', 'Mobile First', 'Accessibility'],
    image: '/src/assets/images/project_solace_health_ux_1795631013117.jpg',
    imageAlt: 'Smartphone resting on a pale matte stone slab showing the Solace Care mobile appointment interface',
    challenge:
      'Elderly and first-time patients frequently abandoned clinic scheduling due to cluttered multi-step forms and low-contrast labels.',
    solution:
      'Restructured intake into a single scannable timeline with 48px touch targets, plain-language prompts, and clear confirmation states.',
    outcome: 'Task completion improved from 61% to 93% in moderated usability testing.',
    liveUrl: 'https://solace-portal.example.com',
    repoUrl: 'https://github.com/alifahmed-dev/solace-care-ux',
  },
  {
    id: 'gridforge-css-tool',
    title: 'GridForge CSS Inspector',
    category: 'Tools',
    year: '2026',
    role: 'Creator & Maintainer',
    shortDescription:
      'Browser-based layout grid visualizer and CSS custom property generator for aligning multi-column editorial breakpoints in real time.',
    techStack: ['Vanilla JS', 'CSS Custom Properties', 'Clipboard API', 'SVG'],
    image: '/src/assets/images/project_gridforge_css_tool_1795631013967.jpg',
    imageAlt: 'Desktop monitor showing the GridForge CSS layout wireframe overlay and token generator panel',
    challenge:
      'Frontend engineers routinely guessed responsive gutter ratios when translating editorial mockups into fluid CSS Grid rules.',
    solution:
      'Created a zero-dependency overlay inspector that previews 12-column math across mobile, tablet, and desktop widths and exports ready-to-paste CSS.',
    outcome: 'Over 4,200 monthly active designers and frontend engineers use the web utility.',
    liveUrl: 'https://gridforge.example.com',
    repoUrl: 'https://github.com/alifahmed-dev/gridforge-inspector',
  },
  {
    id: 'chroma-contrast-cli',
    title: 'ChromaCheck WCAG Matrix',
    category: 'Tools',
    year: '2024',
    role: 'Author',
    shortDescription:
      'Interactive contrast ratio auditing matrix and palette pair validator ensuring AA and AAA legibility across light and dark themes.',
    techStack: ['TypeScript', 'Color Math', 'WCAG 2.2', 'Export JSON'],
    image: '/src/assets/images/project_chroma_contrast_cli_1795631014584.jpg',
    imageAlt: 'Neutral gray and cobalt color swatches beside a tablet displaying a WCAG contrast ratio matrix',
    challenge:
      'Teams adopting dark mode often discovered unreadable muted text pairs only after components reached production.',
    solution:
      'Engineered an automated luminance matrix that flags failing foreground/background pairs before merge and suggests nearest compliant steps.',
    outcome: 'Integrated into 18 open-source UI kits and internal agency starter templates.',
    liveUrl: 'https://chromacheck.example.com',
    repoUrl: 'https://github.com/alifahmed-dev/chromacheck-wcag',
  },
];

export const TIMELINE_ITEMS: TimelineEntry[] = [
  {
    id: 'exp-1',
    type: 'Work',
    period: '2024 — Present',
    role: 'Principal Creative Developer & UI/UX Consultant',
    organization: 'Independent Studio (Alif Ahmed)',
    location: 'Remote',
    highlights: [
      'Architected design systems and responsive web applications for fintech, developer tooling, and consumer hardware brands.',
      'Delivered WCAG AA compliant interfaces with sub-second initial paint and modular, dependency-light frontend codebases.',
    ],
  },
  {
    id: 'exp-2',
    type: 'Work',
    period: '2022 — 2024',
    role: 'Senior Frontend Engineer & Product Designer',
    organization: 'Northstar Digital Labs',
    location: 'Dhaka / Hybrid',
    highlights: [
      'Led the UI overhaul of a multi-tenant analytics suite serving 80,000+ monthly business users.',
      'Mentored 5 junior developers on semantic HTML5, CSS Grid architecture, and accessible modal patterns.',
    ],
  },
  {
    id: 'exp-3',
    type: 'Work',
    period: '2020 — 2022',
    role: 'UI/UX Designer & Frontend Developer',
    organization: 'Vektor Interactive Agency',
    location: 'Dhaka',
    highlights: [
      'Translated brand identities into high-converting marketing sites and custom interactive showcases.',
      'Reduced average client page weight by 46% through disciplined asset optimization and CSS refactoring.',
    ],
  },
  {
    id: 'edu-1',
    type: 'Education',
    period: '2016 — 2020',
    role: 'B.Sc. in Computer Science & Interaction Design',
    organization: 'Institute of Information & Engineering',
    location: 'Dhaka',
    highlights: [
      'Focused coursework in Human-Computer Interaction, Web Systems Architecture, and Visual Typography.',
      'Graduated with Distinction; capstone project explored accessible data tables for low-vision users.',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Our previous dashboard felt overwhelming to new analysts and struggled on smaller screens. Alif redesigned the entire navigation and table hierarchy in four weeks—onboarding support tickets dropped by 38% the very next quarter.',
    author: 'Nadia Karim',
    role: 'VP of Product',
    company: 'Meridian Financial',
  },
  {
    id: 'test-2',
    quote:
      'Rarely do you work with a designer who writes production CSS and JavaScript as cleanly as he crafts typography. He untangled our fragmented component styles into a documented token system our engineers actually enjoy using.',
    author: 'Marcus Vance',
    role: 'Engineering Manager',
    company: 'Kinetix Audio',
  },
  {
    id: 'test-3',
    quote:
      'Patients were abandoning our mobile booking flow mid-way through intake. Alif simplified the journey into clear, calm steps—completion rates jumped past 90% and accessibility audits passed on the first review.',
    author: 'Dr. Farhan Rahman',
    role: 'Clinical Operations Director',
    company: 'Solace Health',
  },
];
