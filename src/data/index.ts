import type { NavLink, Skill, Service, Project, ContactInfo, Value, Experience } from '../types';

export const navLinks: NavLink[] = [
  { label: 'À propos',      href: '#about' },
  { label: 'Compétences',   href: '#skills' },
  { label: 'Services',      href: '#services' },
  { label: 'Projets',       href: '#projects' },
  { label: 'Expérience',    href: '#experience' },
  { label: 'Contact',       href: '#contact' },
];

export const skills: Skill[] = [
  // Design
  { name: 'Figma',           icon: 'https://cdn.simpleicons.org/figma/ffffff',               category: 'design' },
  { name: 'Photoshop',       icon: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF',       category: 'design' },
  { name: 'Illustrator',     icon: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00',     category: 'design' },
  { name: 'Canva',           icon: 'https://cdn.simpleicons.org/canva/00C4CC',                category: 'design' },
  // Développement
  { name: 'HTML / CSS',      icon: 'https://cdn.simpleicons.org/html5/E34F26',               category: 'dev' },
  { name: 'Bootstrap',       icon: 'https://cdn.simpleicons.org/bootstrap/7952B3',            category: 'dev' },
  { name: 'WordPress',       icon: 'https://cdn.simpleicons.org/wordpress/ffffff',            category: 'dev' },
  { name: 'PHP',             icon: 'https://cdn.simpleicons.org/php/777BB4',                  category: 'dev' },
  { name: 'Elementor',       icon: 'https://cdn.simpleicons.org/elementor/92003B',            category: 'dev' },
  // Marketing
  { name: 'SEO',                icon: 'https://cdn.simpleicons.org/googlesearchconsole/4285F4', category: 'marketing' },
  { name: 'Google Analytics',   icon: 'https://cdn.simpleicons.org/googleanalytics/E37400',    category: 'marketing' },
  { name: 'SEMrush',            icon: 'https://cdn.simpleicons.org/semrush/FF642D',             category: 'marketing' },
  { name: 'Google Ads',         icon: 'https://cdn.simpleicons.org/googleads/4285F4',           category: 'marketing' },
  // Business
  { name: 'ChatGPT / IA',       icon: 'https://cdn.simpleicons.org/openai/ffffff',              category: 'business' },
  { name: 'Midjourney / IA',    icon: 'https://cdn.simpleicons.org/midjourney/ffffff',          category: 'business' },
  { name: 'Branding',           icon: '💎',                                                     category: 'business' },
  { name: 'Stratégie Digitale', icon: '🚀',                                                     category: 'business' },
  // Développement avancé
  { name: 'React / TypeScript', icon: 'https://cdn.simpleicons.org/react/61DAFB',               category: 'dev' },
  // IA & Innovation
  { name: 'MCP Protocol',       icon: '🤖',                                                     category: 'business' },
  { name: 'Claude AI',          icon: 'https://cdn.simpleicons.org/anthropic/ffffff',            category: 'business' },
  // Accessibilité
  { name: 'WCAG / A11y',        icon: '♿',                                                     category: 'dev' },
];

export const services: Service[] = [
  {
    id: 1,
    icon: '🖥️',
    title: 'Web Design & Développement',
    description: 'Création de sites web modernes, clairs et performants. Des interfaces qui convertissent et inspirent confiance.',
  },
  {
    id: 2,
    icon: '🎯',
    title: 'UI/UX Design',
    description: 'Interfaces intuitives centrées sur l\'utilisateur. Parcours optimisé, expérience mémorable.',
  },
  {
    id: 3,
    icon: '📈',
    title: 'SEO & Stratégie Digitale',
    description: 'Amélioration de votre visibilité en ligne et de votre positionnement sur les moteurs de recherche.',
  },
  {
    id: 4,
    icon: '🎨',
    title: 'Design Graphique',
    description: 'Créations visuelles impactantes : affiches, bannières, cartes de visite, supports print et digital.',
  },
  {
    id: 5,
    icon: '💎',
    title: 'Identité de Marque',
    description: 'Logo, charte graphique, couleurs et systèmes visuels cohérents qui définissent votre ADN.',
  },
  {
    id: 6,
    icon: '🤖',
    title: 'Création assistée par IA',
    description: 'Utilisation de l\'intelligence artificielle (ChatGPT, Midjourney) pour accélérer la création de contenus, de visuels et de stratégies digitales.',
  },
  {
    id: 7,
    icon: '⚙️',
    title: 'Innovation & Architecture IA (MCP)',
    description: 'Expert en pilotage d\'agents autonomes via le protocole MCP. Je connecte l\'IA aux données réelles de votre entreprise pour automatiser, livrer plus vite et sans erreurs.',
  },
  {
    id: 8,
    icon: '♿',
    title: 'Accessibilité Web (WCAG)',
    description: 'Audit et mise en conformité WCAG 2.1 AA. Sites inclusifs, utilisables par tous — automatisés par IA pour un rendu parfait en temps record.',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Affiche NAZA Night — KissDISCO',
    description: 'Affiche événementielle pour la soirée NAZA Night au KissDISCO Club. Design dynamique, ambiance néon et typographie percutante.',
    category: 'Événementiel',
    tags: ['Affiche', 'Événement', 'Photoshop'],
    color: '#10B981',
    image: '/projects/naza-night.webp',
  },
  {
    id: 2,
    title: 'Branding Burger Street',
    description: 'Bannière réseaux sociaux pour une enseigne de restauration rapide. Visuel appétissant, copywriting et mise en page impactante.',
    category: 'Branding',
    tags: ['Bannière', 'Food', 'Réseaux sociaux'],
    color: '#F97316',
    image: '/projects/burger-street.png',
  },
  {
    id: 3,
    title: 'Bannière Gaming — Réseaux sociaux',
    description: 'Bannière gaming personnalisée pour les réseaux sociaux. Style animé japonais, typographie bold et composition dynamique.',
    category: 'Design Graphique',
    tags: ['Gaming', 'Bannière', 'Social Media'],
    color: '#EF4444',
    image: '/projects/banniere-gaming.png',
  },
  {
    id: 4,
    title: 'Carte de visite — LOC VOITURE',
    description: 'Identité visuelle et carte de visite premium pour une agence de location de voitures. Élégance noire, logo auto et finition luxe.',
    category: 'Carte de visite',
    tags: ['Carte de visite', 'Automobile', 'Branding'],
    color: '#06B6D4',
    image: '/projects/loc-voiture.png',
  },
  {
    id: 5,
    title: 'Carte de visite — Coach Hockey',
    description: 'Carte de visite audacieuse et sportive pour un coach de hockey. Design épuré, couleurs vives et identité professionnelle forte.',
    category: 'Carte de visite',
    tags: ['Carte de visite', 'Sport', 'Identité'],
    color: '#84CC16',
    image: '/projects/coach-hockey.png',
  },
  {
    id: 6,
    title: 'Invitation Mariage — Paul & Julie',
    description: 'Faire-part de mariage élégant sur fond rosé avec composition florale. Typographie manuscrite et mise en page romantique.',
    category: 'Invitation',
    tags: ['Mariage', 'Invitation', 'Print'],
    color: '#EC4899',
    image: '/projects/mariage-paul-julie.webp',
  },
  {
    id: 7,
    title: 'Nonexist Studio',
    description: 'Site web créé pour Nonexist Studio.',
    category: 'Site Web',
    tags: ['WordPress', 'Web Design', 'UI/UX'],
    color: '#7C3AED',
    image: '/projects/nonexist-studio.png',
    link: 'https://nonexitstudio.com/',
    linkLabel: 'Voir le site',
  },
  {
    id: 8,
    title: 'Portfolio — dembambow.com',
    description: 'Mon portfolio personnel : site web vitrine présentant mes compétences, services et réalisations en UI/UX Design et développement web.',
    category: 'Site Web',
    tags: ['WordPress', 'Elementor', 'UI/UX'],
    color: '#7C3AED',
    image: '/projects/dembambow-com.png',
    link: 'https://dembambow.com',
    linkLabel: 'Voir le site',
  },
  {
    id: 9,
    title: 'Logo — Behlah Coiffure',
    description: 'Création du logo et de l\'identité visuelle de Behlah Coiffure. Design élégant et moderne pour un salon de coiffure afro.',
    category: 'Identité de Marque',
    tags: ['Logo', 'Branding', 'Illustrator'],
    color: '#D97706',
    image: '/projects/behlah-coiffure.png',
    link: 'https://www.instagram.com/behlah_coiffure/',
  },
];

export const contactInfo: ContactInfo = {
  email:    'dembambow.pro@gmail.com',
  phone:    '+33 06 66 22 51 55',
  linkedin: 'https://www.linkedin.com/in/demba-mbow/',
  location: 'Rouen, France',
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Référent Accessibilité Numérique & Accompagnement',
    company: 'Papillons Blancs 76 — Médico-Social',
    period: '2025 — Présent',
    description: 'Accompagnement de personnes en situation de handicap moteur et cognitif dans leurs usages numériques. Référent accessibilité numérique au sein d\'un établissement médico-social.',
    tasks: [
      'Analyse des usages digitaux pour des personnes avec handicap moteur et cognitif (User Research terrain)',
      'Identification des points de blocage sur les interfaces web en situation réelle',
      'Mise en place d\'ateliers numériques inclusifs et adaptés aux capacités des usagers',
      'Référent accessibilité et conformité WCAG des outils numériques utilisés',
    ],
  },
  {
    id: 2,
    role: 'Product Owner & Consultant Digital Indépendant',
    company: 'dembambow.com — Portfolio & Accompagnement Entrepreneurs',
    period: '2023 — Présent',
    description: 'Pilotage de projets web de A à Z pour des entrepreneurs et PME. Expertise WCAG, stratégie SEO et création de sites performants sous WordPress.',
    tasks: [
      'Pilotage de projets web : définition du besoin, création WordPress et mise en ligne',
      'Audit et mise en conformité WCAG 2.1 AA des sites clients',
      'Stratégie SEO et rédaction de contenus optimisés pour la performance digitale',
      'Conseil en identité visuelle, branding et présence digitale',
    ],
    links: [
      { label: 'dembambow.com', url: 'https://dembambow.com' },
      { label: 'Perform Digital', url: 'https://perform-digital.com' },
    ],
  },
  {
    id: 3,
    role: 'Responsable de Groupe — Spécialiste Inclusion & Accessibilité',
    company: 'Séjours Adaptés Handicap — CAP Picardie (6 séjours)',
    period: '2022 — 2025',
    description: 'Pilotage opérationnel de séjours pour groupes en situation de handicap multiple. Spécialiste de l\'inclusion et de la conception d\'activités adaptées.',
    tasks: [
      'Pilotage logistique, sécurité et budget de séjours pour groupes en situation de handicap multiple',
      'Conception de parcours et d\'activités favorisant l\'autonomie des usagers',
      'Adaptation de la communication et des supports en fonction des besoins spécifiques',
      'Responsable d\'une ligne de 34+ participants, gestion de la soute (38+ bagages)',
    ],
  },
  {
    id: 4,
    role: 'Animateur Enfants',
    company: 'Mairie de Rouen',
    period: '2024 — 2025',
    description: 'Animation d\'activités éducatives et ludiques pour enfants dans le cadre des programmes de la Mairie de Rouen.',
    tasks: [
      'Conception et animation d\'ateliers créatifs, activités manuelles et jeux collectifs',
      'Encadrement de sorties et gestion de groupes d\'enfants',
    ],
  },
  {
    id: 5,
    role: 'Cadreur / Partenariats / Création Contenu',
    company: 'FTKR FC',
    period: '2023 — Présent',
    description: 'Développement de la stratégie de communication et de l\'image du club FTKR FC. Production de contenus vidéo et gestion des partenariats.',
    tasks: [
      'Captation vidéo, montage et création de miniatures pour YouTube et TikTok',
      'Gestion des partenariats et développement commercial du club',
      'Création de contenus pour comptes influenceurs (réseaux sociaux)',
      'Communication digitale : réseaux sociaux, campagnes de visibilité',
    ],
    links: [
      { label: 'Instagram @ftkr_fc',  url: 'https://www.instagram.com/ftkr_fc/' },
      { label: 'YouTube — highlights', url: 'https://youtu.be/XWMqyRFUwQk' },
      { label: 'TikTok @ftk_fc',      url: 'https://www.tiktok.com/@ftk_fc' },
    ],
  },
];

export const values: Value[] = [
  {
    icon: '🤝',
    title: 'Inclusion & Humanité',
    description: 'Mon parcours auprès des personnes en situation de handicap nourrit chaque décision créative.',
  },
  {
    icon: '💡',
    title: 'Impact & Sens',
    description: 'Chaque projet doit créer une valeur réelle, pas seulement esthétique.',
  },
  {
    icon: '♾️',
    title: 'Apprentissage Continu',
    description: 'Le digital évolue vite — je m\'adapte et me forme en permanence.',
  },
  {
    icon: '🎯',
    title: 'Design Accessible',
    description: 'Concevoir pour tous, sans exception, est une exigence, pas une option.',
  },
];
