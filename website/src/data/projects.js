// ============================================
// ForbesFolio — Projects Data
// ============================================
// This is the single source of truth for all portfolio projects.
// Each entry here becomes a "page" in the magazine.
//
// HOW TO ADD A NEW PROJECT:
// 1. Create a folder: projects/<slug>/README.md (use the template)
// 2. Add cover image to: website/public/images/projects/<slug>.jpg
// 3. Add a new entry to the PROJECTS array below
// 4. Open a PR — CI will validate everything
// ============================================

const BASE_URL = import.meta.env.BASE_URL

/**
 * @typedef {Object} Project
 * @property {string} id          - Unique identifier (slug)
 * @property {string} title       - Display title for the magazine page
 * @property {string} coverImage  - Path to the cover image
 * @property {string} category    - Project category
 * @property {string} year        - Year completed
 * @property {string} description - Brief description (1-3 sentences)
 * @property {string} client      - Client or company name
 * @property {string} role        - Your role in the project
 * @property {string[]} technologies - Main technologies used
 * @property {string} [demoUrl]   - Optional live demo URL
 * @property {string} [repoUrl]   - Optional repository URL
 */

/** @type {Project[]} */
const PROJECTS = [
    {
        id: 'brand-identity',
        title: 'Brand Identity Design',
        coverImage: `${BASE_URL}images/Forbes-Logo.jpg`,
        category: 'Branding',
        year: '2025',
        description:
            'A complete visual identity overhaul for a luxury fashion brand, including logo design, color palette, typography system, and comprehensive brand guidelines.',
        client: 'Vault Tech',
        role: 'Lead Designer',
        technologies: ['Figma', 'Illustrator', 'After Effects'],
    },
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        coverImage: `${BASE_URL}images/Forbes-Logo.jpg`,
        category: 'Web Development',
        year: '2024',
        description:
            'Full-stack development of a modern e-commerce platform with seamless checkout experience, inventory management, and analytics dashboard.',
        client: 'Modern Retail Co.',
        role: 'Full-Stack Developer',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
    {
        id: 'mobile-banking',
        title: 'Mobile Banking App',
        coverImage: `${BASE_URL}images/Forbes-Logo.jpg`,
        category: 'UI/UX Design',
        year: '2023',
        description:
            'User experience design and interface development for a fintech startup, focusing on intuitive navigation and security-first approach.',
        client: 'FinFlow',
        role: 'UX Designer',
        technologies: ['Figma', 'React Native', 'Firebase'],
    },
    {
        id: 'corporate-website',
        title: 'Corporate Website Redesign',
        coverImage: `${BASE_URL}images/Forbes-Logo.jpg`,
        category: 'Web Design',
        year: '2023',
        description:
            'Complete redesign of a Fortune 500 company website with improved accessibility, performance optimization, and modern visual language.',
        client: 'Global Corp',
        role: 'Creative Director',
        technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    },
    {
        id: 'saas-dashboard',
        title: 'SaaS Dashboard',
        coverImage: `${BASE_URL}images/Forbes-Logo.jpg`,
        category: 'Product Design',
        year: '2023',
        description:
            'Complex data visualization dashboard for enterprise analytics platform, featuring real-time updates and customizable widgets.',
        client: 'DataViz Pro',
        role: 'Product Designer',
        technologies: ['React', 'D3.js', 'GraphQL', 'AWS'],
    },
]

export default PROJECTS
