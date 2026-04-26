import { useEffect, useState } from 'react'
import './ProjectDetail.css'

function ProjectDetail({ project, onClose }) {
    const [isClosing, setIsClosing] = useState(false)

    // Handle scroll locking and escape key
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            onClose()
        }, 600) // matches the CSS transition duration
    }

    if (!project) return null

    return (
        <div className={`project-detail-overlay ${isClosing ? 'is-closing' : ''}`}>
            <button className="project-detail-close" onClick={handleClose} aria-label="Close case study">
                <span className="close-text">CLOSE</span>
                <div className="close-icon">
                    <span></span>
                    <span></span>
                </div>
            </button>

            <div className="project-detail-scroll">
                {/* Hero Section */}
                <header className="pd-hero">
                    <div className="pd-hero-bg">
                        <img src={project.coverImage} alt={project.title} />
                        <div className="pd-hero-gradient"></div>
                    </div>
                    <div className="pd-container pd-hero-content">
                        <h1 className="pd-title">{project.title}</h1>
                        <p className="pd-tagline">{project.description}</p>
                    </div>
                </header>

                {/* Metadata Sidebar + Content */}
                <div className="pd-container pd-body">
                    <aside className="pd-sidebar">
                        <div className="pd-meta">
                            <span className="pd-meta-label">Role</span>
                            <span className="pd-meta-value">{project.role || 'Lead Designer & Developer'}</span>
                        </div>
                        <div className="pd-meta">
                            <span className="pd-meta-label">Year</span>
                            <span className="pd-meta-value">{project.year || '2025'}</span>
                        </div>
                        <div className="pd-meta">
                            <span className="pd-meta-label">Tech Stack</span>
                            <div className="pd-tags">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="pd-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                        {project.link && project.link !== '#' && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary pd-link">
                                Visit Live Site
                            </a>
                        )}
                    </aside>

                    <article className="pd-content">
                        <h2>The Challenge</h2>
                        <p>
                            In today's digital landscape, standing out requires more than just a functional product; 
                            it requires an experience. For <strong>{project.title}</strong>, the main objective was to rethink 
                            how users interact with the core features while ensuring absolute performance and stability 
                            under high load.
                        </p>
                        
                        <h2>The Solution</h2>
                        <p>
                            We adopted a design-first approach, wireframing the entire user journey before writing a single 
                            line of code. By leveraging modern web technologies and advanced CSS, we built a 
                            fluid, premium interface that engages users.
                        </p>

                        <div className="pd-gallery">
                            <img src={project.coverImage} alt={`${project.title} screenshot 1`} className="pd-gallery-img" />
                            {/* Placeholder for more images if the user provides them later */}
                        </div>

                        <h2>The Result</h2>
                        <p>
                            A dramatic increase in user engagement and a significantly lower bounce rate. The architecture 
                            is now fully scalable, ready to handle future feature expansions seamlessly.
                        </p>
                    </article>
                </div>
                
                <footer className="pd-footer">
                    <button className="btn btn-outline" onClick={handleClose}>Back to Magazine</button>
                </footer>
            </div>
        </div>
    )
}

export default ProjectDetail
