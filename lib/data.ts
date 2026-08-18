export const personal = {
  name: 'Eman Tahir',
  role: 'Software Engineering Student',
  university: 'COMSATS University Islamabad — Lahore Campus',
  degree: 'BS Software Engineering',
  graduation: '2028',
  location: 'Lahore, Pakistan',
  email: 'emantair3912@gmail.com',
  github: 'https://github.com/emantair3912-lab',
  linkedin: 'https://www.linkedin.com/in/eman-tahir-0a7842396/',
  resume: '/resume.pdf',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const engineeringSteps = [
  { number: '01', title: 'Understand', desc: 'Clarify the problem before writing any code.' },
  { number: '02', title: 'Break Down', desc: 'Split the challenge into smaller, solvable parts.' },
  { number: '03', title: 'Design', desc: 'Model the structure, data, and relationships.' },
  { number: '04', title: 'Build', desc: 'Implement cleanly using solid engineering principles.' },
  { number: '05', title: 'Test', desc: 'Validate behaviour and handle the edge cases.' },
  { number: '06', title: 'Improve', desc: 'Refine, refactor, and learn from the result.' },
]

export const skillCategories = [
  {
    id: 'programming',
    label: 'Programming',
    accent: 'sage',
    items: ['Java', 'C++'],
  },
  {
    id: 'tools',
    label: 'Tools',
    accent: 'powder',
    items: ['Git', 'VS Code'],
  },
  {
    id: 'databases',
    label: 'Databases',
    accent: 'peach',
    items: ['MySQL', 'SQLite'],
  },
  {
    id: 'core',
    label: 'Core',
    accent: 'cream',
    items: ['Object-Oriented Programming', 'Data Structures', 'DBMS'],
  },
  {
    id: 'project-tech',
    label: 'Project Technologies',
    accent: 'mint',
    items: [
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'JWT',
      'SQL',
      'Groq AI',
      'Plotly',
      'Mermaid.js',
      'Concurrency',
      'Multi-Agent Systems',
    ],
  },
] as const

export type CaseSection = { heading: string; body: string }

export type Project = {
  id: string
  number: string
  title: string
  subtitle?: string
  description: string
  technologies: string[]
  github: string
  palette: { primary: string; secondary: string; ink: string }
  caseStudy: CaseSection[]
}

export const projects: Project[] = [
  {
    id: 'unipath',
    number: '01',
    title: 'UniPath AI',
    subtitle: 'Production Multi-Agent University Admission Platform',
    description:
      'Explainable multi-agent university admission assistant for Lahore covering 15+ universities.',
    technologies: [
      'Java',
      'OOP',
      'Multi-Agent System',
      'Concurrency',
      'Groq AI',
      'Python',
      'SQLite',
      'Plotly',
      'Mermaid.js',
    ],
    github: 'https://github.com/emantair3912-lab',
    palette: { primary: 'powder', secondary: 'mint', ink: 'forest' },
    caseStudy: [
      {
        heading: 'Overview',
        body: 'A final-year AI project built as an explainable, multi-agent assistant that helps students navigate university admissions across 15+ institutions in Lahore.',
      },
      {
        heading: 'Problem',
        body: 'Admission information is scattered, inconsistent, and hard to compare. Students need clear, trustworthy answers rather than a single opaque recommendation.',
      },
      {
        heading: 'Approach',
        body: 'Multiple cooperating agents handle different parts of the workflow and coordinate concurrently, keeping every step of the reasoning transparent to the user.',
      },
      {
        heading: 'Technologies',
        body: 'Java with strong OOP foundations, a multi-agent system running on a ThreadPoolExecutor, a Groq AI chatbot, Python web scraping, SQLite storage, and Plotly / Mermaid.js visualisations.',
      },
      {
        heading: 'Architecture',
        body: 'A user query flows through the multi-agent system, which gathers and reconciles university information before returning a single explainable response.',
      },
      {
        heading: 'Learning',
        body: 'Designing concurrent agents taught me how to structure independent units of work, keep systems explainable, and combine AI with classic engineering.',
      },
    ],
  },
  {
    id: 'maze',
    number: '02',
    title: 'Maze Grid Solver',
    description:
      'Java-based maze grid project that generates and solves mazes using BFS/DFS, focused on OOP, Data Structures and algorithmic problem solving.',
    technologies: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
    github: 'https://github.com/emantair3912-lab',
    palette: { primary: 'sage', secondary: 'cream', ink: 'forest' },
    caseStudy: [
      {
        heading: 'Overview',
        body: 'A Java application that generates grid mazes and visualises how breadth-first and depth-first search explore them to find a path.',
      },
      {
        heading: 'Problem',
        body: 'Search algorithms are easy to describe but hard to intuit. Seeing BFS and DFS expand step by step makes the trade-offs tangible.',
      },
      {
        heading: 'Approach',
        body: 'The maze is modelled as a graph of cells. Each algorithm walks that graph differently, and the traversal order is surfaced visually.',
      },
      {
        heading: 'Algorithms',
        body: 'Breadth-first search explores level by level to guarantee the shortest path, while depth-first search dives deep before backtracking.',
      },
      {
        heading: 'Data Structures',
        body: 'Queues drive BFS, stacks and recursion drive DFS, and a visited set prevents revisiting cells within the grid graph.',
      },
      {
        heading: 'Learning',
        body: 'Building this deepened my grasp of graph traversal, complexity, and how the right data structure shapes an algorithm.',
      },
    ],
  },
  {
    id: 'nexus',
    number: '03',
    title: 'Nexus Jobs',
    subtitle: 'Flask-Based Job Portal',
    description: 'Flask-based job portal using Python, SQLite, HTML and CSS.',
    technologies: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JWT', 'SQL'],
    github: 'https://github.com/emantair3912-lab',
    palette: { primary: 'peach', secondary: 'powder', ink: 'slate' },
    caseStudy: [
      {
        heading: 'Overview',
        body: 'A job portal that connects applicants and administrators, covering the core workflow of posting, applying, and tracking jobs.',
      },
      {
        heading: 'Problem',
        body: 'Hiring workflows involve many moving parts — listings, applications, interviews, and reporting — that need to stay organised in one place.',
      },
      {
        heading: 'Approach',
        body: 'A Flask backend with SQLite persistence and server-rendered HTML/CSS, secured with JWT authentication and structured SQL queries.',
      },
      {
        heading: 'Features',
        body: 'Job filtering, resume uploads, application tracking, interview scheduling, and admin reporting.',
      },
      {
        heading: 'Technologies',
        body: 'Python and Flask for the application layer, SQLite and SQL for data, HTML/CSS for the interface, and JWT for authentication.',
      },
      {
        heading: 'Learning',
        body: 'This project tied together full-stack fundamentals — routing, authentication, database design, and building features end to end.',
      },
    ],
  },
]

export const academic = {
  label: 'Academic Projects & Team Collaboration',
  activities: ['Team Collaboration', 'Planning', 'Implementation', 'Testing', 'Documentation'],
  concepts: ['OOP', 'Data Structures', 'DBMS'],
}
