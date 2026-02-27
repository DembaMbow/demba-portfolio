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
    role: 'Chargé d\'affaires — Communication & Image',
    company: 'FTK FC',
    period: '2024 — Présent',
    description: 'Développement de la stratégie de communication et de l\'image du club FTK FC. Gestion des partenariats, production de contenus vidéo et pilotage de la visibilité digitale du club.',
    tasks: [
      'Chargé d\'affaires & développement de partenariats',
      'Communication digitale (réseaux sociaux, campagnes)',
      'Gestion de l\'image et de la réputation du club',
      'Filmage & production vidéo des matchs et événements',
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
