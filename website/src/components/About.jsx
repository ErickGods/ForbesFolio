import './About.css'

function About() {
    const stats = [
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
    ]

    const deliverables = [
        {
            title: 'High-Performance Web Applications',
            items: [
                'Full-stack applications with React, Next.js and modern frameworks',
                'Scalable back-end APIs with Laravel, Node.js and Supabase',
                'Automated CI/CD pipelines with GitHub Actions for zero-downtime deploys',
            ],
        },
        {
            title: 'Premium Digital Experiences',
            items: [
                'Pixel-perfect interfaces crafted with UX/UI best practices',
                'Responsive, accessible designs that work across every device',
                'E-commerce platforms with payment gateway integration',
            ],
        },
        {
            title: 'Business-Ready Solutions',
            items: [
                'Admin dashboards and data-driven portals for real-time insights',
                'Authentication systems with multi-role access control',
                'End-to-end project delivery — from strategy to production deployment',
            ],
        },
    ]

    const processSteps = [
        { id: '01', title: 'Discover & Strategy', desc: 'Deep-diving into your business goals and user needs to build a rock-solid project foundation.' },
        { id: '02', title: 'Design & Prototyping', desc: 'Crafting pixel-perfect, premium interfaces that captivate users and elevate brands.' },
        { id: '03', title: 'Development & Delivery', desc: 'Engineering robust, scalable code with CI/CD pipelines for reliable, automated deployments.' },
    ]

    const certifications = [
        // Add your certifications here as you earn them:
        // { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2025' },
    ]

    return (
        <section id="about" className="about section">
            <div className="container">
                {/* Section Header */}
                <div className="about-header text-center">
                    <p className="section-tagline">The Architect</p>
                    <h2 className="section-title">Beyond Just Code</h2>
                    <div className="divider divider-center"></div>
                </div>

                {/* Journey Narrative */}
                <div className="about-journey">
                    <div className="journey-story">
                        <h3 className="journey-heading">From Curiosity to Full-Stack Engineering</h3>
                        <p className="journey-text">
                            My journey started where most developers begin: with a curiosity that wouldn't quit.
                            What began as tinkering with HTML and CSS quickly evolved into a deep obsession with
                            building <strong>complete digital systems</strong> — from database architecture to
                            the final pixel on screen.
                        </p>
                        <p className="journey-text">
                            Along the way, I realized that beautiful interfaces mean nothing without solid engineering
                            behind them, and robust back-ends are wasted without thoughtful user experiences in front.
                            That realization shaped everything I do today.
                        </p>
                    </div>

                    <div className="journey-callout">
                        <blockquote className="callout-quote">
                            <span className="callout-mark" aria-hidden="true">"</span>
                            Today, I don't just build websites — I engineer digital ecosystems where
                            design precision meets technical excellence.
                        </blockquote>
                    </div>
                </div>

                {/* Stats */}
                <div className="about-stats-modern">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-modern-item">
                            <span className="stat-number">{stat.number}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* What I Deliver */}
                <div className="about-deliverables">
                    <h3 className="deliverables-heading">What I Deliver</h3>
                    <div className="deliverables-grid">
                        {deliverables.map((group, index) => (
                            <div key={index} className="deliverable-card">
                                <span className="deliverable-number" aria-hidden="true">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h4 className="deliverable-title">{group.title}</h4>
                                <ul className="deliverable-list">
                                    {group.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Process */}
                <div className="about-grid">
                    <div className="about-process">
                        <h4 className="process-heading">The Process</h4>
                        <div className="process-list">
                            {processSteps.map((step, index) => (
                                <div key={index} className="process-item">
                                    <span className="process-id">{step.id}</span>
                                    <div className="process-details">
                                        <h5 className="process-title">{step.title}</h5>
                                        <p className="process-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="about-certifications">
                        <h4 className="certs-heading">Certifications</h4>
                        {certifications.length > 0 ? (
                            <div className="certs-list">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="cert-item">
                                        <span className="cert-name">{cert.name}</span>
                                        <span className="cert-issuer">{cert.issuer}</span>
                                        <span className="cert-year">{cert.year}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="certs-coming-soon">
                                <span className="certs-icon" aria-hidden="true">◆</span>
                                <p className="certs-placeholder">
                                    Certifications in progress. This section will be updated
                                    as new credentials are earned.
                                </p>
                                <span className="certs-status">Coming Soon</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
