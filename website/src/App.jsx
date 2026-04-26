import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

function App() {
    const [activeProject, setActiveProject] = useState(null)

    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <FeaturedWork onOpenProject={setActiveProject} />
                <About />
                <Contact />
            </main>
            <Footer />

            {/* Full-Screen Project Detail Overlay */}
            {activeProject && (
                <ProjectDetail 
                    project={activeProject} 
                    onClose={() => setActiveProject(null)} 
                />
            )}
        </div>
    )
}

export default App
