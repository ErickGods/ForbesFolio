import { useRef, useState, forwardRef, useCallback, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import PROJECTS from '../data/projects'
import './FeaturedWork.css'

// ============================================
// DATA - Imported from centralized projects data file
// To add a new project page, edit: src/data/projects.js
// ============================================
const WORKS_DATA = PROJECTS
const TOTAL_PROJECTS = WORKS_DATA.length

// ============================================
// PAGE COMPONENTS (forwardRef required by react-pageflip)
// ============================================

/**
 * Cover Page — Full-bleed image with overlay text
 * Represents the visual/left page of a magazine spread
 */
const CoverPage = forwardRef(function CoverPage({ project, pageNumber }, ref) {
    return (
        <div className="magazine-page cover-page" ref={ref}>
            <img
                src={project.coverImage}
                alt={project.title}
                className="cover-image"
                loading="lazy"
            />
            <div className="cover-gradient-overlay" />
            <div className="cover-content">
                <span className="cover-category">{project.category}</span>
                <h3 className="cover-title">{project.title}</h3>
                <span className="cover-year">{project.year}</span>
            </div>
            <div className="cover-page-number">
                <span>{String(pageNumber).padStart(2, '0')}</span>
            </div>
            {/* Gutter shadow on the spine side */}
            <div className="page-gutter-shadow page-gutter-right" />
        </div>
    )
})

/**
 * Content Page — Editorial text layout
 * Represents the text/right page of a magazine spread
 */
const ContentPage = forwardRef(function ContentPage({ project, pageNumber, total }, ref) {
    return (
        <div className="magazine-page content-page" ref={ref}>
            {/* Gutter shadow on the spine side */}
            <div className="page-gutter-shadow page-gutter-left" />
            <div className="page-texture" />
            <div className="page-content">
                <div className="page-header">
                    <span className="meta-year">{project.year}</span>
                    <span className="meta-divider" aria-hidden="true">—</span>
                    <span className="meta-client">{project.client}</span>
                </div>

                <h3 className="page-title">{project.title}</h3>

                <p className="page-description">{project.description}</p>

                <div className="page-role">
                    <span className="role-label">Role:</span>
                    <span className="role-value">{project.role}</span>
                </div>

                <div className="page-techs">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>

                <div className="page-footer">
                    <div className="page-indicator-dots">
                        {WORKS_DATA.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator-dot ${index === Math.floor((pageNumber - 1)) ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                    <span className="page-count">
                        Project {pageNumber} of {total}
                    </span>
                </div>
            </div>
        </div>
    )
})

/**
 * Front Cover — First page of the magazine
 */
const FrontCover = forwardRef(function FrontCover(props, ref) {
    return (
        <div className="magazine-page front-cover" ref={ref} data-density="hard">
            <div className="front-cover-content">
                <div className="front-cover-masthead">
                    <span className="masthead-line" />
                    <span className="masthead-text">PORTFOLIO</span>
                    <span className="masthead-line" />
                </div>
                <h2 className="front-cover-title">Forbes<span className="text-gold">Folio</span></h2>
                <p className="front-cover-subtitle">A Collection of Digital Works</p>
                <div className="front-cover-meta">
                    <span>EDITION 2025</span>
                    <span className="meta-dot">•</span>
                    <span>{TOTAL_PROJECTS} PROJECTS</span>
                </div>
                <div className="front-cover-cta">
                    <span className="cta-arrow">→</span>
                    <span>Open to browse</span>
                </div>
            </div>
            <div className="front-cover-border" />
        </div>
    )
})

/**
 * Inside Front Cover — Blank or minimal
 */
const InsideFrontCover = forwardRef(function InsideFrontCover(props, ref) {
    return (
        <div className="magazine-page inside-cover" ref={ref} data-density="hard">
            <div className="page-texture" />
            <div className="inside-cover-content">
                <p className="inside-cover-text">Digital Portfolio — 2025 Edition</p>
            </div>
            <div className="page-gutter-shadow page-gutter-left" />
        </div>
    )
})

/**
 * Back Cover — Last page of the magazine
 */
const BackCover = forwardRef(function BackCover(props, ref) {
    return (
        <div className="magazine-page back-cover" ref={ref} data-density="hard">
            <div className="back-cover-content">
                <h3 className="back-cover-title">Thank You</h3>
                <p className="back-cover-text">
                    For taking the time to browse through my work.
                </p>
                <div className="divider divider-center" style={{ margin: '1.5rem auto' }} />
                <p className="back-cover-contact">
                    Let&apos;s build something great together.
                </p>
                <span className="back-cover-logo">Forbes<span className="text-gold">Folio</span></span>
            </div>
        </div>
    )
})

/**
 * Inside Back Cover
 */
const InsideBackCover = forwardRef(function InsideBackCover(props, ref) {
    return (
        <div className="magazine-page inside-cover" ref={ref} data-density="hard">
            <div className="page-texture" />
            <div className="page-gutter-shadow page-gutter-right" />
        </div>
    )
})

// ============================================
// MAIN COMPONENT
// ============================================
function FeaturedWork() {
    const bookRef = useRef(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [isFlipping, setIsFlipping] = useState(false)
    const [bookReady, setBookReady] = useState(false)

    // Page flip handler
    const onFlip = useCallback((e) => {
        setCurrentPage(e.data)
    }, [])

    const onChangeState = useCallback((e) => {
        setIsFlipping(e.data === 'flipping')
    }, [])

    const onInit = useCallback(() => {
        setBookReady(true)
    }, [])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!bookRef.current) return
            const pageFlip = bookRef.current.pageFlip()
            if (e.key === 'ArrowRight') {
                pageFlip.flipNext()
            } else if (e.key === 'ArrowLeft') {
                pageFlip.flipPrev()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Calculate which project we're viewing (accounting for front cover + inside front cover)
    const currentProjectIndex = Math.max(0, Math.floor((currentPage - 2) / 2))
    const isOnCover = currentPage < 2 || currentPage >= TOTAL_PROJECTS * 2 + 2
    const totalBookPages = 4 + TOTAL_PROJECTS * 2 // front+inside front, projects*2, inside back+back

    return (
        <section
            id="featured-work"
            className="featured-work section"
            aria-label="Featured Work Portfolio"
            role="region"
        >
            <div className="container">
                {/* Section Header */}
                <div className="featured-work-header text-center">
                    <p className="section-tagline">Featured Work</p>
                    <h2 className="section-title">The Portfolio Magazine</h2>
                    <div className="divider divider-center" />
                    <p className="featured-work-intro">
                        Browse through my work like pages of a magazine
                    </p>
                </div>

                {/* Flipbook */}
                <div className={`flipbook-wrapper ${isFlipping ? 'is-flipping' : ''} ${bookReady ? 'is-ready' : ''}`}>
                    {/* Spine indicator */}
                    <div className="magazine-spine" aria-hidden="true" />

                    <HTMLFlipBook
                        ref={bookRef}
                        width={450}
                        height={580}
                        size="stretch"
                        minWidth={280}
                        maxWidth={500}
                        minHeight={380}
                        maxHeight={620}
                        showCover={true}
                        drawShadow={true}
                        flippingTime={900}
                        usePortrait={true}
                        startZIndex={0}
                        autoSize={true}
                        maxShadowOpacity={0.6}
                        mobileScrollSupport={true}
                        clickEventForward={false}
                        useMouseEvents={true}
                        swipeDistance={30}
                        showPageCorners={true}
                        disableFlipByClick={false}
                        onFlip={onFlip}
                        onChangeState={onChangeState}
                        onInit={onInit}
                        className="magazine-flipbook"
                    >
                        {/* Front Cover & Inside Front Cover */}
                        <FrontCover />
                        <InsideFrontCover />

                        {/* Project Pages: Cover + Content for each */}
                        {WORKS_DATA.flatMap((project, index) => [
                            <CoverPage
                                key={`cover-${project.id}`}
                                project={project}
                                pageNumber={index + 1}
                            />,
                            <ContentPage
                                key={`content-${project.id}`}
                                project={project}
                                pageNumber={index + 1}
                                total={TOTAL_PROJECTS}
                            />,
                        ])}

                        {/* Inside Back Cover & Back Cover */}
                        <InsideBackCover />
                        <BackCover />
                    </HTMLFlipBook>
                </div>

                {/* Navigation Controls */}
                <div className="flipbook-controls" role="navigation" aria-label="Magazine navigation">
                    <button
                        className="flipbook-nav-btn flipbook-nav-prev"
                        onClick={() => bookRef.current?.pageFlip().flipPrev()}
                        aria-label="Previous page"
                        disabled={currentPage === 0}
                    >
                        <span className="nav-arrow" aria-hidden="true">‹</span>
                        <span className="nav-text">Prev</span>
                    </button>

                    <span className="flipbook-page-info">
                        {isOnCover ? 'Cover' : `Project ${currentProjectIndex + 1} of ${TOTAL_PROJECTS}`}
                    </span>

                    <button
                        className="flipbook-nav-btn flipbook-nav-next"
                        onClick={() => bookRef.current?.pageFlip().flipNext()}
                        aria-label="Next page"
                        disabled={currentPage >= totalBookPages - 1}
                    >
                        <span className="nav-text">Next</span>
                        <span className="nav-arrow" aria-hidden="true">›</span>
                    </button>
                </div>

                {/* Thumbnail Navigation */}
                <nav
                    className="magazine-thumbnails"
                    aria-label="Project quick navigation"
                >
                    {WORKS_DATA.map((work, index) => (
                        <button
                            key={work.id}
                            className={`thumbnail ${currentProjectIndex === index && !isOnCover ? 'active' : ''}`}
                            onClick={() => bookRef.current?.pageFlip().flip(2 + index * 2)}
                            aria-label={`Go to project ${index + 1}: ${work.title}`}
                            aria-current={currentProjectIndex === index && !isOnCover ? 'true' : undefined}
                        >
                            <span className="thumbnail-number" aria-hidden="true">
                                0{index + 1}
                            </span>
                            <span className="thumbnail-title">{work.title}</span>
                        </button>
                    ))}
                </nav>

                {/* Hint */}
                <p className="magazine-hint">
                    Drag pages to flip • Touch & swipe supported • Keyboard: ← →
                </p>
            </div>
        </section>
    )
}

export default FeaturedWork
