import './About.css'

function About() {
    const stats = [
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
    ]

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-header text-center">
                    <p className="section-tagline">About Me</p>
                    <h2 className="section-title">Passionate About Creating Excellence</h2>
                    <div className="divider divider-center"></div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a creative professional with a passion for crafting exceptional digital
                            experiences. With expertise in design, engineering and development, I bring ideas to life
                            through clean code and thoughtful design.
                        </p>
                        <p>
                            My approach combines strategic thinking with creative execution, ensuring
                            every project not only looks beautiful but also delivers measurable results
                            for my clients.
                        </p>
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
