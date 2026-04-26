import { useEffect, useState, useRef } from 'react'
import './Hero.css'

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const heroRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            // Calculate relative position (-1 to 1)
            const x = (clientX / innerWidth) * 2 - 1
            const y = (clientY / innerHeight) * 2 - 1
            setMousePosition({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    // Parallax intensities (smooth translation based on mouse)
    const imageX = mousePosition.x * -15
    const imageY = mousePosition.y * -15
    const textX = mousePosition.x * 10
    const textY = mousePosition.y * 10

    return (
        <section className="hero" ref={heroRef}>
            {/* Film Grain Overlay */}
            <div className="hero-grain" />

            <div className="container hero-container">
                <div 
                    className="hero-content"
                    style={{ transform: `translate3d(${textX}px, ${textY}px, 0)` }}
                >
                    <p className="hero-tagline reveal-text">Welcome to my portfolio</p>
                    <h1 className="hero-title">
                        <span className="reveal-word-wrapper"><span className="reveal-word" style={{ animationDelay: '0.1s' }}>I craft</span></span>
                        <br/>
                        <span className="reveal-word-wrapper"><span className="reveal-word text-gold" style={{ animationDelay: '0.3s' }}>digital experiences</span></span>
                        <br/>
                        <span className="reveal-word-wrapper"><span className="reveal-word" style={{ animationDelay: '0.5s' }}>that inspire.</span></span>
                    </h1>
                    <p className="hero-description reveal-text" style={{ animationDelay: '0.7s' }}>
                        A creative professional dedicated to building beautiful,
                        functional, and business-centered digital products.
                    </p>
                    <div className="hero-actions reveal-text" style={{ animationDelay: '0.9s' }}>
                        <a href="#featured-work" className="btn btn-primary magnetic-btn">View My Work</a>
                        <a href="#contact" className="btn btn-outline magnetic-btn">Get in Touch</a>
                    </div>
                </div>

                <div className="hero-visual">
                    {/* The large background text */}
                    <div 
                        className="hero-background-text"
                        style={{ transform: `translate3d(${imageX * 1.5}px, ${imageY * 1.5}px, 0)` }}
                        aria-hidden="true"
                    >
                        Forbes
                    </div>
                    
                    <div 
                        className="hero-image-frame"
                        style={{ transform: `translate3d(${imageX}px, ${imageY}px, 0)` }}
                    >
                        <img src={`${import.meta.env.BASE_URL}images/mySelf.jpg`} alt="Erick" className="hero-image" />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-text">SCROLL TO EXPLORE</div>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
