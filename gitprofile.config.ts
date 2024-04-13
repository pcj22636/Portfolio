// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pcj22636', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['pcj22636/my-project1', 'pcj22636/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['pcj22636/gitprofile', 'pcj22636/pandora'], // List of repository names to display. example: ['pcj22636/my-project1', 'pcj22636/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Home Network Heatmap',
          description: 
            'Home network map and signal review',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/presentation/u/1/d/1mVusOdy9SK5lxLmtlW6Cx7uiVJ1o8HV7/edit?usp=drive_web&ouid=112859243206455551697&rtpof=true',
        },
        {
          title: 'Blog 2',
          description:
            'Networking Blog',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/195WypPVWhfjt1ySso_o_6fjxx2A_EQ9t/edit#heading=h.gjdgxs',
        },
        {
          title: 'Data Scientist Report',
          description:
            'Report on findings of the job requirements of a Data Scientist',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/u/1/d/1a52-R7_U1LYt555GdXGhVe6MjlH3qHM-/edit?usp=drive_web&ouid=112859243206455551697&rtpof=true',
        },
        {
          title: 'Bullseye Presentation',
          description:
            'Strategy First BUS1200 Presentation',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/presentation/u/1/d/1vESApi42vxrVpFND4mDYjtiD7j-FuqBI/edit?usp=drive_web&ouid=112859243206455551697&rtpof=true',
        },
        {
          title: 'TryHackMe Assignment',
          description:
            'TryHackMe Workbook',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/11yV-Qs_YsrIyrTnavFI2rC1SC_OeBXkbRlZ8CWV6Wgg/edit',
        },
        {
          title: 'Use of Analytics in Management',
          description:
            'Team Project around Analytics in Management',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/1jiv9ds4CeYNJmKaOFhhCmYdT-_ajjDPs/edit',
        },
        {
          title: 'XYZ Security Audit',
          description:
            'Security Audit',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/d/1paJi3h0QCWpWCNNcF_n1_1X-G7xClLcj/edit#heading=h.gjdgxs',
        },
        {
          title: 'Linux Commands File Permissions',
          description:
            'Linux Commands',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'NIST Audit',
          description:
            'Cybersecurity Audit',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://docs.google.com/document/u/1/d/18xoUuwxqGwr1ztOIJCPzjgCfm8E-yy8v/edit?usp=drive_web&ouid=112859243206455551697&rtpof=true',
        },
        {
          title: 'ISC2 Completiton',
          description:
            'Completion of ISC2 Cybersecurity',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://drive.google.com/drive/u/1/folders/1rZ23lWu5qYHl9oJsm_piJIUbRB7RhH8J?ths=true',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Chris Patera',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/christopherjpatera/',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'chrispatera1@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1kdvlwIegAGxh5JPS2hBR7pE5FHIyzhP4/edit?usp=sharing&ouid=108823435341836501055&rtpof=true&sd=true',
  },
  skills: [
    'Excel',
    'PowerPoint',
    'Word',
    'MySQL',
   ],
  experiences: [
    {
      company: 'Central Piedemont',
      position: 'Director: Academic Operations',
      from: 'May 2021',
      to: 'Present',
      companyLink: 'https://cpcc.edu',
    },
    {
      company: 'Central Piedmont',
      position: 'Coordnator: Course Entry & Faculty Contracts',
      from: 'August 2017',
      to: 'April 2021',
      companyLink: 'https://cpcc.edu',
    },
  ],
  certifications: [
    {
 
    },
  ],
  educations: [
    {
      institution: 'East Carolina University',
      degree: 'Bachelors: Management of Information Systems',
      from: '2020',
      to: '2025',
    },
    {
      institution: 'Central Piedmont Community College',
      degree: 'Associates of Arts',
      from: '2007',
      to: '2016',
    },
  ],
  publications: [
    {
     
    },
    {
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
