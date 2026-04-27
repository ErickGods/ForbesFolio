import './About.css'

function About() {
    const stats = [
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
    ]

    const processSteps = [
        { id: '01', title: 'Discover & Strategy', desc: 'Understanding your business goals and user needs to build a solid foundation.' },
        { id: '02', title: 'Design & Prototyping', desc: 'Crafting pixel-perfect, premium interfaces that engage and inspire.' },
        { id: '03', title: 'Development', desc: 'Translating design into robust, scalable, and high-performance code.' },
    ]

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-header text-center">
                    <p className="section-tagline">The Architect</p>
                    <h2 className="section-title">Beyond Just Code</h2>
                    <div className="divider divider-center"></div>
                </div>

                <div className="about-grid">
                    <div className="about-manifesto">
                        <h3 className="manifesto-title">I craft digital ecosystems.</h3>
                        <p className="manifesto-text">
                            I am a multidisciplinary digital creator with a deep passion for the intersection between 
                            <strong> engineering</strong> and <strong>design</strong>. I don't just build websites; I engineer experiences 
                            that elevate brands and drive measurable business results.
                        </p>
                        <p className="manifesto-text">
                            My philosophy is rooted in the belief that true digital excellence requires both 
                            technical mastery and aesthetic sensitivity. Every pixel matters, and every line of code counts.
                        </p>
                        
                        <div className="about-stats-modern">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-modern-item">
                                    <span className="stat-number">{stat.number}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

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
                </div>
            </div>
        </section>
    )
}

export default About
