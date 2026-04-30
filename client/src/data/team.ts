export interface TeamMember {
  id: string;
  email: string;
  name: string;
  category: 'Faculty' | 'Research Scholar' | 'PhD Student' | 'MTech Student' | 'Undergraduate' | 'Post-Doctoral Fellow';
  role: string;
  researchField: string;
  educationalBackground: string;
  linkedinProfile?: string;
  googleScholar?: string;
  hobbies?: string;
  startDate: string;
  tenure: string;
  websiteLink?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    email: 'faculty@iisc.ac.in',
    name: 'Dr. Faculty Member',
    category: 'Faculty',
    role: 'Principal Investigator',
    researchField: 'Hypersonic Aerodynamics',
    educationalBackground: 'PhD in Aerospace Engineering',
    linkedinProfile: 'https://linkedin.com/in/faculty',
    googleScholar: 'https://scholar.google.com/citations?user=faculty',
    hobbies: 'Research, Teaching',
    startDate: '2015-01-15',
    tenure: '9 years',
    websiteLink: 'https://iisc.ac.in/faculty/member'
  },
  {
    id: '2',
    email: 'researcher@iisc.ac.in',
    name: 'Dr. Research Scholar',
    category: 'Post-Doctoral Fellow',
    role: 'Research Associate',
    researchField: 'Shock Wave Dynamics',
    educationalBackground: 'PhD in Mechanical Engineering',
    linkedinProfile: 'https://linkedin.com/in/researcher',
    googleScholar: 'https://scholar.google.com/citations?user=researcher',
    hobbies: 'Experimental Research',
    startDate: '2022-06-01',
    tenure: '2 years',
  },
  {
    id: '3',
    email: 'phd.student@iisc.ac.in',
    name: 'PhD Student Name',
    category: 'PhD Student',
    role: 'Research Scholar',
    researchField: 'High-Enthalpy Flows',
    educationalBackground: 'BTech in Aerospace Engineering',
    linkedinProfile: 'https://linkedin.com/in/phdstudent',
    hobbies: 'Computational Simulations',
    startDate: '2021-08-01',
    tenure: '3 years',
  },
];

export const researchAreas = [
  {
    id: 'hypersonic',
    title: 'Hypersonic Aerodynamics',
    description: 'Study of aerodynamic phenomena at hypersonic speeds, including shock-expansion theory and entropy layer effects.',
    keywords: ['Mach > 5', 'Shock Waves', 'Boundary Layers'],
    publications: 12,
  },
  {
    id: 'shock-waves',
    title: 'Shock Wave Dynamics',
    description: 'Investigation of shock wave interactions, reflections, and their effects on flow structures.',
    keywords: ['Shock Interactions', 'Reflection Patterns', 'Flow Visualization'],
    publications: 18,
  },
  {
    id: 'high-enthalpy',
    title: 'High-Enthalpy Flows',
    description: 'Research on high-temperature, high-pressure flows relevant to re-entry vehicles and advanced propulsion systems.',
    keywords: ['Re-entry', 'Thermal Effects', 'Chemical Reactions'],
    publications: 9,
  },
  {
    id: 'experimental',
    title: 'Experimental Techniques',
    description: 'Development and application of advanced measurement techniques for hypersonic flow characterization.',
    keywords: ['Wind Tunnels', 'Diagnostics', 'Data Acquisition'],
    publications: 14,
  },
  {
    id: 'computational',
    title: 'Computational Methods',
    description: 'CFD simulations and numerical methods for hypersonic flow analysis and prediction.',
    keywords: ['CFD', 'Simulations', 'Algorithms'],
    publications: 16,
  },
  {
    id: 'applications',
    title: 'Aerospace Applications',
    description: 'Application of research findings to aerospace vehicle design and performance optimization.',
    keywords: ['Vehicle Design', 'Performance', 'Optimization'],
    publications: 11,
  },
];

export const statistics = {
  foundedYear: 2015,
  totalPublications: 80,
  activeResearchers: 12,
  researchAreas: 6,
  collaborations: 15,
};
