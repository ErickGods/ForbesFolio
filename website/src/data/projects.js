// ============================================
// ForbesFolio — Projects Data
// ============================================
// Fonte única de dados para todos os projetos do portfólio.
// Cada entrada aqui vira uma "página" na revista.
//
// PARA ADICIONAR UM NOVO PROJETO:
// 1. Criar pasta: projects/<slug>/README.md (usar o template atualizado)
// 2. Adicionar cover image em: website/public/images/projects/<slug>.png
// 3. Adicionar nova entrada no array PROJECTS abaixo.
//    (Opcional: preencha as props 'link', 'challenge', 'solution', 'result' 
//    para popular o Modal de Deep Dive do projeto).
// 4. Abrir PR → CI valida automaticamente
// ============================================

const BASE_URL = import.meta.env.BASE_URL

const PROJECTS = [
    {
        id: 'hyundai-gptis',
        title: 'Parts Traceability System',
        coverImage: `${BASE_URL}images/projects/hyundai-gptis.png`,
        category: 'Supply Chain & MES',
        year: '2023 — Present',
        description:
            'End-to-end parts traceability system at Hyundai Motor Brasil. Responsible for managing datamatrix-based tracking across the entire supply chain, assembly line scanning stations, MES integration, and global data transmission to HQ in South Korea.',
        client: 'Hyundai Motor Brasil',
        role: 'Data & Automation Engineer',
        technologies: ['GPTIS', 'MES', 'EAI', 'Datamatrix', 'SQL / T-SQL', 'Power BI'],
        challenge:
            'Parts traceability in an automotive assembly plant is critical for quality, safety, and regulatory compliance. When I took over the GPTIS responsibility at Hyundai Motor Brasil, the system was operating with limited coverage — between 100 and 110 tracked parts per vehicle depending on the model — leaving significant gaps in the traceability chain.',
        solution:
            'I implemented a systematic approach to expand GPTIS coverage: detailed mapping of all eligible parts, configuration of new scanning stations on the assembly line, integration with Hyundai\'s datamatrix label standards, and optimization of the MES → EAI → Korea Portal data flow. Each added part required datamatrix format validation, station reading tests, and end-to-end transmission confirmation.',
        result:
            'Over 50% increase in tracked parts across all models. Existing models went from 100-110 to 166-170 tracked parts, and the new model launched under my management already operates with 175-179 tracked parts. The average reading index reached 97.8%, demonstrating high traceability system reliability.',
    },
    {
        id: 'hyundai-qapp',
        title: 'QApp — Quality Assurance Platform',
        coverImage: `${BASE_URL}images/projects/hyundai-qapp.png`,
        category: 'Data & Automation Engineering',
        year: '2024 — Present',
        description:
            'Enterprise quality assurance platform built as solo developer for Hyundai Motor Brasil. Centralizes warranty analysis, failure mode tracking, and part defect patterns for 40+ users across QA analysts, supervisors, managers, and mechanics.',
        client: 'Hyundai Motor Brasil',
        role: 'Solo Developer — Full Architecture',
        technologies: ['Power Apps', 'SQL Server', 'Power Automate', 'SharePoint', 'T-SQL', 'Data Modeling'],
        challenge:
            'The Quality Assurance team at Hyundai Motor Brasil lacked a centralized system to manage the entire warranty analysis process. Analysts were working with fragmented tools and manual processes to track warranty entries, repair dates, part codes, and failure modes across multiple dealers. This fragmentation made it nearly impossible to identify patterns — such as which failure mode was causing the most warranties or which parts had the highest defect rates — leading to delayed responses and reactive rather than proactive quality management.',
        solution:
            'I designed and built the QApp from the ground up as a solo developer, architecting a robust SQL Server backend with dimensional modeling (fact and dimension tables), views, stored procedures, and triggers to ensure data integrity and high-performance queries. The user-facing application was developed in Power Apps, providing an intuitive interface for 40 users across four different roles. Power Automate handles workflow automation, while SharePoint provides complementary storage. The platform integrates with existing GPTIS traceability data through the shared SQL Server infrastructure.',
        result:
            'Since its official deployment in May 2024, QApp has become the single source of truth for quality assurance at Hyundai Motor Brasil. All 40 team members actively use the platform daily, tracking warranties by analyst, entry date, repair date, indicator date, part code, and dealer. The centralized failure mode registry now enables data-driven decisions — the team can instantly identify which failure modes cause the most warranty claims and which parts have the highest defect rates, transforming quality management from reactive to proactive.',
    },
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
