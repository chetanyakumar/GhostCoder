export interface NavLink {
  id: string;
  label: string;
}

export interface StatItem {
  icon: string;
  label: string;
  value: string;
  detail: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  borderColor: string;
  glowColor: string;
  icon: string;
  skills: { name: string; tag?: string }[];
}

export interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  bullets?: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  image: string;
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date?: string;
  icon?: string;
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const heroStats: StatItem[] = [
  { icon: 'Brain', label: 'LLM & AI Models', value: 'Multi-LLM', detail: 'OpenAI, Gemini, Groq' },
  { icon: 'Code', label: 'Core Stack', value: 'Python + React', detail: 'FastAPI, Node, Tailwind' },
  { icon: 'Database', label: 'Databases', value: 'MongoDB & SQL', detail: 'Schema Optimization' },
  { icon: 'Award', label: 'Certifications', value: '3 Verified', detail: 'HackerRank, NPTEL, FCC' },
];

export const aboutBio =
  'I am Chetanya Kumar, a BCA student and AI Engineer specializing in GenAI, full-stack backend development, and intelligent software systems. I build AI-powered applications, high-throughput REST APIs, and responsive interfaces using Python, FastAPI, React, and Large Language Models. Focused on clean architecture, modern UI/UX, and solving complex engineering problems.';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    color: '#7C3AED', // Purple
    borderColor: 'rgba(124, 58, 237, 0.3)',
    glowColor: 'rgba(124, 58, 237, 0.25)',
    icon: 'Terminal',
    skills: [
      { name: 'Python', tag: 'Core' },
      { name: 'JavaScript', tag: 'ES6+' },
      { name: 'SQL', tag: 'Queries & Design' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    color: '#06B6D4', // Cyan
    borderColor: 'rgba(6, 182, 212, 0.3)',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    icon: 'Cpu',
    skills: [
      { name: 'OpenAI API', tag: 'LLM' },
      { name: 'Google Gemini', tag: 'LLM' },
      { name: 'Groq API', tag: 'Fast Inference' },
      { name: 'Prompt Engineering', tag: 'GenAI' },
      { name: 'RAG Architecture', tag: 'Retrieval' },
      { name: 'LangChain', tag: 'Orchestration' },
      { name: 'PyTorch', tag: 'Deep Learning' },
      { name: 'OpenCV', tag: 'Vision' },
      { name: 'ArcFace', tag: 'Biometrics' },
    ],
  },
  {
    category: 'Backend Development',
    color: '#4F46E5', // Indigo
    borderColor: 'rgba(79, 70, 229, 0.3)',
    glowColor: 'rgba(79, 70, 229, 0.25)',
    icon: 'Server',
    skills: [
      { name: 'FastAPI', tag: 'Python Async' },
      { name: 'Node.js', tag: 'Runtime' },
      { name: 'Express.js', tag: 'REST APIs' },
      { name: 'MongoDB', tag: 'NoSQL' },
      { name: 'MySQL', tag: 'Relational DB' },
    ],
  },
  {
    category: 'Frontend Development',
    color: '#38BDF8', // Light Blue / Sky
    borderColor: 'rgba(56, 189, 248, 0.3)',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    icon: 'Layout',
    skills: [
      { name: 'React', tag: 'UI Library' },
      { name: 'Tailwind CSS', tag: 'Styling' },
      { name: 'HTML5', tag: 'Semantic' },
      { name: 'CSS3', tag: 'Modern Styling' },
    ],
  },
  {
    category: 'Developer Tools',
    color: '#A855F7', // Violet
    borderColor: 'rgba(168, 85, 247, 0.3)',
    glowColor: 'rgba(168, 85, 247, 0.25)',
    icon: 'Wrench',
    skills: [
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'CI/CD & Workflows' },
      { name: 'Docker', tag: 'Containers' },
      { name: 'VS Code', tag: 'IDE' },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'ResumeForge AI',
    subtitle: 'AI-Powered Resume Builder & Analytics',
    tech: ['Python', 'FastAPI', 'React', 'MongoDB', 'OpenAI', 'Gemini', 'Groq'],
    description:
      'AI-powered Resume Builder with ATS Score calculation, granular Resume Analysis, Multi-LLM Support (OpenAI, Gemini, Groq), User Authentication, Resume Version History, and an intuitive Modern Dashboard.',
    bullets: [
      'Built multi-LLM orchestration layer enabling sub-second response times using Groq and fallback handling for OpenAI & Gemini.',
      'Designed real-time ATS scoring algorithm providing actionable feedback on keywords, formatting, and structural impact.',
      'Developed responsive React dashboard with authentication, dynamic resume customization, and PDF rendering.',
    ],
    githubUrl: 'https://github.com/chetanyakumar/ResumeForge-AI',
    liveUrl: 'https://resumeforge-ai.netlify.app',
    image: 'resumeforge_project',
    featured: true,
  },
  {
    title: 'Ear Biometric Authentication System',
    subtitle: 'Deep Learning Vision & Biometrics',
    tech: ['Python', 'PyTorch', 'ResNet50', 'ArcFace', 'OpenCV'],
    description:
      'Deep Learning based Ear Authentication System using ResNet50, ArcFace loss function, Siamese Networks, and OpenCV with comprehensive biometric verification metrics.',
    bullets: [
      'Trained ResNet50 backbone combined with ArcFace loss to produce highly discriminative 512-D feature embeddings.',
      'Implemented real-time ear detection & alignment pipeline using OpenCV for zero-friction user verification.',
      'Achieved robust classification precision across diverse lighting conditions and occlusion scenarios.',
    ],
    githubUrl: 'https://github.com/chetanyakumar/ear-biometric-auth',
    liveUrl: null,
    image: 'ear_biometrics_project',
    featured: true,
  },
  {
    title: 'Hotel Management System',
    subtitle: 'Scalable Full-Stack CRUD Platform',
    tech: ['Node.js', 'Express', 'MySQL', 'REST API', 'JWT'],
    description:
      'Scalable Full-Stack CRUD Application built with JWT Authentication, Role-Based Access Control (RBAC), REST APIs, and optimized MySQL relational database schema.',
    bullets: [
      'Engineered JWT authentication flow and granular RBAC to secure admin and guest endpoints.',
      'Normalized relational MySQL database structure (5+ interconnected tables) for optimal indexing and minimal query latencies.',
      'Constructed modular REST API server in Node.js & Express with strict validation middleware.',
    ],
    githubUrl: 'https://github.com/chetanyakumar/HOTEL-MANAGMENT-SYSTEM',
    liveUrl: null,
    image: 'hotel_project',
    featured: true,
  },
];

export const experience: ExperienceItem[] = [
  {
    period: 'Jan 2025 - Present',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Remote',
    bullets: [
      'Architected and delivered custom full-stack web applications using React and Node.js for global clients.',
      'Designed and integrated high-performance REST APIs with secure MongoDB and MySQL database architectures.',
      'Streamlined cloud deployment, domain management, and GitHub version control for production readiness.',
    ],
    tech: ['React', 'Node.js', 'REST APIs', 'Backend', 'MongoDB', 'Deployment', 'GitHub'],
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'GLA University, Mathura',
    period: '2024 - 2027',
    coursework: 'Data Structures & Algorithms, DBMS, Operating Systems, Software Engineering, Object Oriented Programming.',
  },
];

export const certifications: CertificationItem[] = [
  {
    name: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    date: 'Verified Certificate',
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Verified Developer Certification',
  },
  {
    name: 'Introduction to Programming in Python',
    issuer: 'NPTEL',
    date: 'National Certification',
  },
];

export const contactDetails = {
  email: 'chetanyakumar753@gmail.com',
  phone: '+91 82736 36942',
  whatsapp: '918273636942',
  github: 'https://github.com/chetanyakumar',
  linkedin: 'https://linkedin.com/in/chetanya-kumar',
  location: 'Mathura, India',
  resumeUrl: '/resume.pdf',
};
