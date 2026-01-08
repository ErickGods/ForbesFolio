import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <FeaturedWork />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
