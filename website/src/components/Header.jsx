import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="container header-container">
                <a href="#" className="logo">
                    <span className="logo-text">Forbes</span>
                    <span className="logo-accent">Folio</span>
                </a>

                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#featured-work" className="nav-link">Work</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
