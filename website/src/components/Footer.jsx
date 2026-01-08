import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <a href="#" className="footer-logo">
                        <span className="logo-text">Forbes</span>
                        <span className="logo-accent">Folio</span>
                    </a>
                    <p className="footer-tagline">Crafting digital excellence.</p>
                </div>

                <nav className="footer-nav">
                    <a href="#about" className="footer-link">About</a>
                    <a href="#portfolio" className="footer-link">Work</a>
                    <a href="#contact" className="footer-link">Contact</a>
                </nav>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} ForbesFolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
