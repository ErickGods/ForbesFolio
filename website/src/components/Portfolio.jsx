import './Portfolio.css'

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Brand Identity',
            coverImage: './images/Forbes-Logo.jpg',
            category: 'Design',
            description: 'Complete visual identity for a luxury brand',
        },
        {
            id: 2,
            title: 'E-Commerce Platform',
            coverImage: './images/Forbes-Logo.jpg',
            category: 'Development',
            description: 'Full-stack online shopping experience',
        },
        {
            id: 3,
            title: 'Mobile Application',
            coverImage: './images/Forbes-Logo.jpg',
            category: 'App Design',
            description: 'iOS and Android app for wellness',
        },
        {
            id: 4,
            title: 'Corporate Website',
            coverImage: './images/Forbes-Logo.jpg',
            category: 'Web Design',
            description: 'Modern website for financial services',
        },
    ]

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container">
                <div className="portfolio-header text-center">
                    <p className="section-tagline">Portfolio</p>
                    <h2 className="section-title">Featured Work</h2>
                    <div className="divider divider-center"></div>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="portfolio-card">
                            <div className="portfolio-card-image">
                                <span className="portfolio-card-category">{project.category}</span>
                            </div>
                            <div className="portfolio-card-content">
                                <h3 className="portfolio-card-title">{project.title}</h3>
                                <p className="portfolio-card-description">{project.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
