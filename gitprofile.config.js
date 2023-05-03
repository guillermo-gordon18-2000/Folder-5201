// gitprofile.config.js

const config = {
  github: {
    username: 'guillermo-gordon18-2000', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'guillermo-gordon-b641a71b7',
    twitter: 'Guille_Gordon',
    mastodon: 'arifszn@mastodon.social',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://cv-m24845.web.app/',
    phone: '6239-0757',
    email: 'guillermo.gordon@utp.ac.pa',
  },
  personal: {
    cedula: '8-959-2011',
    address: 'Calle D, plaza valecncia',
    phone: '6239-0757',
    fechaN: '8-18-2000',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Tailwind',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Sass',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Universidad Tecnologica de Panama',
      position: 'Estudiante',
      from: 'September 2019',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Control de versiones con GitLab',
      body: 'Banco general',
      year: 'agosto 2022',
      link: 'https://www.credential.net/c46572cd-bd81-44a3-9f5d-cae8a738acbc#gs.kmealj',
    },
    {
      name: 'Desarrollo FrontEnd Serverless',
      body: 'Banco general',
      year: 'agosto 2022',
      link: 'https://www.credential.net/0a68d640-e25e-489e-b212-48717a4b4f0e#gs.wfcpbt',
    },
    {
      name: 'Introducción a Docker',
      body: 'Banco general',
      year: 'agosto 2022',
      link: 'https://www.credential.net/fd2cbacf-6339-4ae0-b2a7-ee48a4decdef#gs.wfa17q',
    },
    {
      name: 'Introducción a Kafka',
      body: 'Banco general',
      year: 'agosto 2022',
      link: 'https://www.credential.net/171ed0e7-b75c-475c-8594-e937e73553da#gs.wfa2cw',
    },
    {
      name: 'Introducción a Kubernetes',
      body: 'Banco general',
      year: 'agosto 2022',
      link: 'https://www.credential.net/63cd05cd-f08a-4205-97e7-0d80b7c6de58#gs.wfa3zc',
    },
    {
      name: 'Principios de base de datos MySQL',
      body: 'Banco general',
      year: 'agosto 2022',
      link: 'https://www.credential.net/f0d45024-c942-43f6-8ba4-d6c70f4e6edc#gs.wfa4l1',
    },
    {
      name: 'Pruebas automatizadas',
      body: 'Banco general',
      year: 'agosto 2022',
      link: 'https://www.credential.net/e35847e5-d4c5-4f30-8543-2707c332acda#gs.wfa5x5',
    },
    {
      name: 'Principios de base de datos MySQL',
      body: 'Banco general',
      year: 'agosto 2022',
      link: 'https://www.credential.net/f0d45024-c942-43f6-8ba4-d6c70f4e6edc#gs.wfa4l1',
    },
    {
      name: 'Prácticas ágiles con Jira',
      body: 'Banco general',
      year: 'agosto 2022',
      link: 'https://www.credential.net/e938a729-8932-404d-9a2d-4f00d35675d8#gs.wfa6kw',
    },
  ],
  education: [
    {
      institution: 'C.E.B.G Santa Librada',
      degree: 'Basica , Premedia',
      from: '2012',
      to: '2014',
    },
    {
      institution: 'Instituto Bilingue internacional ',
      degree: 'Bachillerato en ciencias y letras ',
      from: '2012',
      to: '2014',
    },
    {
      institution: 'Universidad Tecnologica de Panama ',
      degree: 'Tecnico en Desarrollo de software',
      from: '2019',
      to: '2023',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: '',
      description:
        'Me apasiona crear soluciones innovadoras y eficientes mediante el uso de tecnologias de vanguardia. A lo largo de mi carrera he adquirido habilidades en diversas areas, como programación web, bases de datos y desarrollo móvil. Me considero una persona proactiva, autodidacta y comprometida con la calidad en mi trabajo. Estoy a la disposición de empresas que busquen un profesional altamente capacitado y con experiencia en el campo del desarrollo de software.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: '',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/guillermo-gordon18-2000"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
