import './Hero.css'

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-tagline">Welcome to my portfolio</p>
                    <h1 className="hero-title">
                        I craft <span className="text-gold">digital experiences</span> that inspire
                    </h1>
                    <p className="hero-description">
                        A creative professional dedicated to building beautiful,
                        functional, and business-centered digital products.
                    </p>
                    <div className="hero-actions">
                        <a href="#portfolio" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Get in Touch</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image-frame">
                        <img src={`${import.meta.env.BASE_URL}images/mySelf.jpg`} alt="ForbesFolio" className="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
