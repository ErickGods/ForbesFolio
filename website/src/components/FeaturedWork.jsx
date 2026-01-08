import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FeaturedWork.css'

// ============================================
// DATA - Extracted outside component to prevent re-renders
// ============================================
const WORKS_DATA = [
    {
        id: 1,
        title: 'Brand Identity Design',
        coverImage: './images/Forbes-Logo.jpg',
        category: 'Branding',
        year: '2024',
        description: 'A complete visual identity overhaul for a luxury fashion brand, including logo design, color palette, typography system, and comprehensive brand guidelines.',
        client: 'Luxe Atelier',
        role: 'Lead Designer',
    },
    {
        id: 2,
        title: 'E-Commerce Platform',
        coverImage: './images/Forbes-Logo.jpg',
        category: 'Web Development',
        year: '2024',
        description: 'Full-stack development of a modern e-commerce platform with seamless checkout experience, inventory management, and analytics dashboard.',
        client: 'Modern Retail Co.',
        role: 'Full-Stack Developer',
    },
    {
        id: 3,
        title: 'Mobile Banking App',
        coverImage: './images/Forbes-Logo.jpg',
        category: 'UI/UX Design',
        year: '2023',
        description: 'User experience design and interface development for a fintech startup, focusing on intuitive navigation and security-first approach.',
        client: 'FinFlow',
        role: 'UX Designer',
    },
    {
        id: 4,
        title: 'Corporate Website Redesign',
        coverImage: './images/Forbes-Logo.jpg',
        category: 'Web Design',
        year: '2023',
        description: 'Complete redesign of a Fortune 500 company website with improved accessibility, performance optimization, and modern visual language.',
        client: 'Global Corp',
        role: 'Creative Director',
    },
    {
        id: 5,
        title: 'SaaS Dashboard',
        coverImage: './images/Forbes-Logo.jpg',
        category: 'Product Design',
        year: '2023',
        description: 'Complex data visualization dashboard for enterprise analytics platform, featuring real-time updates and customizable widgets.',
        client: 'DataViz Pro',
        role: 'Product Designer',
    },
]

const TOTAL_PAGES = WORKS_DATA.length

// ============================================
// ANIMATION VARIANTS - Real Magazine Page Flip
// ============================================

// FORWARD FLIP (Right Arrow): Right page flips LEFT over the left page
// The right page pivots on its LEFT edge and rotates to cover the left page
const rightPageFlipVariants = {
    // New page coming in from the right (flat, ready position)
    enter: {
        rotateY: 180,
        transformOrigin: 'right center',
        zIndex: 2,
        boxShadow: '0 0 0 rgba(0, 0, 0, 0.15)',
    },
    // Page fully open (flat, visible)
    center: {
        rotateY: 0,
        transformOrigin: 'left center',
        zIndex: 1,
        boxShadow: '-5px 0 25px rgba(0, 0, 0, 0.15)',
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    // Page flipping away to the left
    exit: {
        rotateY: -180,
        transformOrigin: 'left center',
        zIndex: 3,
        boxShadow: '-30px 0 50px rgba(0, 0, 0, 0.4)',
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

// BACKWARD FLIP (Left Arrow): Left page flips RIGHT back to reveal previous
// The left page pivots on its RIGHT edge and rotates back to uncover content
const leftPageFlipVariants = {
    // Previous page coming back from the left (was flipped over)
    enter: {
        rotateY: -180,
        transformOrigin: 'left center',
        zIndex: 2,
        boxShadow: '0 0 0 rgba(0, 0, 0, 0.15)',
    },
    // Page fully open (flat, visible)
    center: {
        rotateY: 0,
        transformOrigin: 'right center',
        zIndex: 1,
        boxShadow: '5px 0 25px rgba(0, 0, 0, 0.15)',
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    // Page flipping away to the right
    exit: {
        rotateY: 180,
        transformOrigin: 'right center',
        zIndex: 3,
        boxShadow: '30px 0 50px rgba(0, 0, 0, 0.4)',
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

// Static page behind the flipping page
const staticPageVariants = {
    static: {
        scale: 1,
        opacity: 1,
        x: 0,
    },
    recessed: {
        scale: 0.98,
        opacity: 0.9,
        x: 0,
        transition: { duration: 0.3 },
    },
}

// Dynamic shadow that appears during flip
const flipShadowVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 }
    },
}

// Content stagger animation
const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1 + 0.5,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    }),
}

// ============================================
// COMPONENT
// ============================================
function FeaturedWork() {
    const [currentPage, setCurrentPage] = useState(0)
    const [direction, setDirection] = useState(1) // Default to forward direction
    const [isAnimating, setIsAnimating] = useState(false)

    // Use a ref to track direction immediately (avoids React batching issues)
    const animationDirRef = useRef(1)

    // Boundary checks - like a physical magazine, can't go past first/last page
    const isFirstPage = currentPage === 0
    const isLastPage = currentPage === TOTAL_PAGES - 1

    // Animation complete handler
    const handleAnimationComplete = useCallback(() => {
        setIsAnimating(false)
    }, [])

    // Fallback timeout to reset isAnimating (in case AnimatePresence doesn't fire)
    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false)
            }, 800) // Slightly longer than animation duration
            return () => clearTimeout(timeout)
        }
    }, [isAnimating, currentPage])

    // Navigate to next/previous page with boundary check
    const paginate = useCallback((newDirection) => {
        if (isAnimating) return

        const nextPage = currentPage + newDirection
        // Don't allow going before first page or after last page
        if (nextPage < 0 || nextPage >= TOTAL_PAGES) return

        // Set direction in ref immediately (no batching delay)
        animationDirRef.current = newDirection

        setIsAnimating(true)
        setDirection(newDirection)
        setCurrentPage(nextPage)
    }, [isAnimating, currentPage])

    // Jump to specific page
    const goToPage = useCallback((index) => {
        if (isAnimating || index === currentPage) return
        if (index < 0 || index >= TOTAL_PAGES) return

        const newDir = index > currentPage ? 1 : -1
        // Set direction in ref immediately (no batching delay)
        animationDirRef.current = newDir

        setIsAnimating(true)
        setDirection(newDir)
        setCurrentPage(index)
    }, [isAnimating, currentPage])

    // Keyboard navigation for accessibility (respects boundaries)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft' && !isFirstPage) {
                paginate(-1)
            } else if (e.key === 'ArrowRight' && !isLastPage) {
                paginate(1)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [paginate, isFirstPage, isLastPage])

    const currentWork = WORKS_DATA[currentPage]

    return (
        <section
            id="featured-work"
            className="featured-work section"
            aria-label="Featured Work Portfolio"
            role="region"
        >
            <div className="container">
                <motion.div
                    className="featured-work-header text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="section-tagline">Featured Work</p>
                    <h2 className="section-title">The Portfolio Magazine</h2>
                    <div className="divider divider-center"></div>
                    <p className="featured-work-intro">
                        Browse through my work like pages of a magazine
                    </p>
                </motion.div>

                <div
                    className="magazine-container"
                    role="group"
                    aria-roledescription="carousel"
                    aria-label={`Project ${currentPage + 1} of ${TOTAL_PAGES}: ${currentWork.title}`}
                >
                    {/* Previous Button - disabled on first page */}
                    <motion.button
                        className={`magazine-nav magazine-nav-prev ${isFirstPage ? 'disabled' : ''}`}
                        onClick={() => paginate(-1)}
                        aria-label="Go to previous project"
                        disabled={isAnimating || isFirstPage}
                        whileHover={!isFirstPage ? { scale: 1.08 } : {}}
                        whileTap={!isFirstPage ? { scale: 0.95 } : {}}
                        animate={{ opacity: isFirstPage ? 0.3 : 1 }}
                    >
                        <span className="nav-arrow" aria-hidden="true">‹</span>
                    </motion.button>

                    {/* Magazine Spread */}
                    <div
                        className="magazine-spread"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {/* LEFT PAGE */}
                        {animationDirRef.current > 0 ? (
                            // Forward: Left page is STATIC
                            <motion.div
                                className="magazine-page magazine-page-left"
                                variants={staticPageVariants}
                                animate={isAnimating ? 'recessed' : 'static'}
                                aria-hidden="true"
                            >
                                <div className="page-image">
                                    <img src={currentWork.coverImage} alt={currentWork.title} className="cover-image" />
                                    <motion.span
                                        className="page-category"
                                        key={`cat-${currentPage}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4, duration: 0.4 }}
                                    >
                                        {currentWork.category}
                                    </motion.span>
                                    <div className="page-overlay">
                                        <motion.span
                                            className="page-number"
                                            key={`num-${currentPage}`}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                        >
                                            0{currentPage + 1}
                                        </motion.span>
                                    </div>
                                    <motion.div
                                        className="page-shadow-overlay"
                                        variants={flipShadowVariants}
                                        initial="hidden"
                                        animate={isAnimating ? 'visible' : 'hidden'}
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            // Backward: Left page FLIPS
                            <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                                <motion.div
                                    key={`left-${currentPage}`}
                                    className="magazine-page magazine-page-left"
                                    variants={leftPageFlipVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                                    aria-hidden="true"
                                >
                                    <div className="page-image">
                                        <img src={currentWork.coverImage} alt={currentWork.title} className="cover-image" />
                                        <span className="page-category">{currentWork.category}</span>
                                        <div className="page-overlay">
                                            <span className="page-number">0{currentPage + 1}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        )}

                        {/* RIGHT PAGE */}
                        {animationDirRef.current > 0 ? (
                            // Forward: Right page FLIPS
                            <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                                <motion.article
                                    key={`right-${currentPage}`}
                                    className="magazine-page magazine-page-right"
                                    variants={rightPageFlipVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                                    aria-labelledby={`project-title-${currentWork.id}`}
                                >
                                    <motion.div className="page-flip-shadow" initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} exit={{ opacity: 0.3 }} transition={{ duration: 0.3 }} />
                                    <div className="page-content">
                                        <motion.div className="page-meta" custom={0} variants={contentVariants} initial="hidden" animate="visible">
                                            <span className="meta-year">{currentWork.year}</span>
                                            <span className="meta-divider" aria-hidden="true">—</span>
                                            <span className="meta-client">{currentWork.client}</span>
                                        </motion.div>
                                        <motion.h3 id={`project-title-${currentWork.id}`} className="page-title" custom={1} variants={contentVariants} initial="hidden" animate="visible">
                                            {currentWork.title}
                                        </motion.h3>
                                        <motion.p className="page-description" custom={2} variants={contentVariants} initial="hidden" animate="visible">
                                            {currentWork.description}
                                        </motion.p>
                                        <motion.div className="page-role" custom={3} variants={contentVariants} initial="hidden" animate="visible">
                                            <span className="role-label">Role:</span>
                                            <span className="role-value">{currentWork.role}</span>
                                        </motion.div>
                                        <motion.div className="page-footer" custom={4} variants={contentVariants} initial="hidden" animate="visible">
                                            <div className="page-indicator" role="tablist" aria-label="Project pages">
                                                {WORKS_DATA.map((_, index) => (
                                                    <motion.span
                                                        key={index}
                                                        className={`indicator-dot ${index === currentPage ? 'active' : ''}`}
                                                        role="tab"
                                                        aria-selected={index === currentPage}
                                                        aria-label={`Project ${index + 1}`}
                                                        animate={{ scale: index === currentPage ? 1.3 : 1, backgroundColor: index === currentPage ? '#B8860B' : '#d0d0d0' }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                ))}
                                            </div>
                                            <span className="page-count" aria-hidden="true">Page {currentPage + 1} of {TOTAL_PAGES}</span>
                                        </motion.div>
                                    </div>
                                </motion.article>
                            </AnimatePresence>
                        ) : (
                            // Backward: Right page is STATIC
                            <motion.article
                                className="magazine-page magazine-page-right"
                                variants={staticPageVariants}
                                animate={isAnimating ? 'recessed' : 'static'}
                                aria-labelledby={`project-title-${currentWork.id}`}
                            >
                                <div className="page-content">
                                    <motion.div className="page-meta" key={`meta-${currentPage}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                        <span className="meta-year">{currentWork.year}</span>
                                        <span className="meta-divider" aria-hidden="true">—</span>
                                        <span className="meta-client">{currentWork.client}</span>
                                    </motion.div>
                                    <motion.h3 id={`project-title-${currentWork.id}`} className="page-title" key={`title-${currentPage}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                        {currentWork.title}
                                    </motion.h3>
                                    <motion.p className="page-description" key={`desc-${currentPage}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                        {currentWork.description}
                                    </motion.p>
                                    <motion.div className="page-role" key={`role-${currentPage}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                        <span className="role-label">Role:</span>
                                        <span className="role-value">{currentWork.role}</span>
                                    </motion.div>
                                    <div className="page-footer">
                                        <div className="page-indicator" role="tablist" aria-label="Project pages">
                                            {WORKS_DATA.map((_, index) => (
                                                <motion.span
                                                    key={index}
                                                    className={`indicator-dot ${index === currentPage ? 'active' : ''}`}
                                                    role="tab"
                                                    aria-selected={index === currentPage}
                                                    aria-label={`Project ${index + 1}`}
                                                    animate={{ scale: index === currentPage ? 1.3 : 1, backgroundColor: index === currentPage ? '#B8860B' : '#d0d0d0' }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            ))}
                                        </div>
                                        <span className="page-count" aria-hidden="true">Page {currentPage + 1} of {TOTAL_PAGES}</span>
                                    </div>
                                </div>
                            </motion.article>
                        )}
                    </div>

                    {/* Next Button - disabled on last page */}
                    <motion.button
                        className={`magazine-nav magazine-nav-next ${isLastPage ? 'disabled' : ''}`}
                        onClick={() => paginate(1)}
                        aria-label="Go to next project"
                        disabled={isAnimating || isLastPage}
                        whileHover={!isLastPage ? { scale: 1.08 } : {}}
                        whileTap={!isLastPage ? { scale: 0.95 } : {}}
                        animate={{ opacity: isLastPage ? 0.3 : 1 }}
                    >
                        <span className="nav-arrow" aria-hidden="true">›</span>
                    </motion.button>
                </div>

                {/* Thumbnails Navigation */}
                <motion.nav
                    className="magazine-thumbnails"
                    aria-label="Project quick navigation"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {WORKS_DATA.map((work, index) => (
                        <motion.button
                            key={work.id}
                            className={`thumbnail ${index === currentPage ? 'active' : ''}`}
                            onClick={() => goToPage(index)}
                            disabled={isAnimating}
                            aria-label={`Go to project ${index + 1}: ${work.title}`}
                            aria-current={index === currentPage ? 'true' : undefined}
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.98 }}
                            animate={{
                                borderColor: index === currentPage ? '#B8860B' : '#e8e8e8',
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="thumbnail-number" aria-hidden="true">0{index + 1}</span>
                            <span className="thumbnail-title">{work.title}</span>
                        </motion.button>
                    ))}
                </motion.nav>

                {/* Hint with keyboard instructions */}
                <motion.p
                    className="magazine-hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    Use arrows or click thumbnails to browse • Keyboard: ← →
                </motion.p>
            </div>
        </section>
    )
}

export default FeaturedWork
