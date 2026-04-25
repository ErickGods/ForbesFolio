// ============================================
// ForbesFolio — Projects Data
// ============================================
// Fonte única de dados para todos os projetos do portfólio.
// Cada entrada aqui vira uma "página" na revista.
//
// PARA ADICIONAR UM NOVO PROJETO:
// 1. Criar pasta: projects/<slug>/README.md (usar o template)
// 2. Adicionar cover image em: website/public/images/projects/<slug>.png
// 3. Adicionar nova entrada no array PROJECTS abaixo
// 4. Abrir PR → CI valida automaticamente
// ============================================

const BASE_URL = import.meta.env.BASE_URL

const PROJECTS = [
    {
        id: 'vault-tech-website',
        title: 'Vault Tech — Website Corporativo',
        coverImage: `${BASE_URL}images/projects/vault-tech-website.png`,
        category: 'Web Development',
        year: '2025',
        description:
            'Redesign completo do website corporativo da Vault Tech com identidade visual moderna, ícones SVG profissionais, estética glassmorphism e deploy automatizado via GitHub Actions.',
        client: 'Vault Tech',
        role: 'Full-Stack Developer',
        technologies: ['HTML/CSS/JS', 'SVG', 'GitHub Actions', 'HostGator'],
    },
    {
        id: 'aquarela-ecommerce',
        title: 'Aquarela — E-Commerce',
        coverImage: `${BASE_URL}images/projects/aquarela-ecommerce.png`,
        category: 'Web Development',
        year: '2025',
        description:
            'Plataforma de e-commerce full-stack para joias e acessórios, com catálogo de produtos, carrinho, checkout completo e integração com gateway de pagamento AbacatePay.',
        client: 'BYDIO / Aquarela',
        role: 'Full-Stack Developer',
        technologies: ['HTML/CSS/JS', 'Laravel', 'AbacatePay', 'Tailwind CSS'],
    },
    {
        id: 'vtraining',
        title: 'VTraining — Portal Esportivo',
        coverImage: `${BASE_URL}images/projects/vtraining.png`,
        category: 'Web Development',
        year: '2025',
        description:
            'Portal de avaliações esportivas para personal trainers e atletas, com autenticação multi-perfil, dashboard de métricas e gestão de avaliações físicas.',
        client: 'VTraining',
        role: 'Full-Stack Developer',
        technologies: ['Next.js 15', 'Supabase', 'Tailwind CSS v4', 'TypeScript'],
    },
    {
        id: 'forbesfolio',
        title: 'ForbesFolio — Portfolio CI/CD',
        coverImage: `${BASE_URL}images/projects/forbesfolio.png`,
        category: 'DevOps',
        year: '2025',
        description:
            'Portfolio pessoal com estética de revista Forbes, pipeline CI/CD completo com GitHub Actions, validação automatizada de projetos e deploy automático para GitHub Pages.',
        client: 'Projeto Pessoal',
        role: 'Full-Stack Developer',
        technologies: ['React 18', 'Vite 5', 'Framer Motion', 'GitHub Actions', 'ESLint'],
    },
]

export default PROJECTS
