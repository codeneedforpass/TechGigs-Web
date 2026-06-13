import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main>
        {/* Section 1: Hero Cover */}
        <Hero />

        {/* Section 2: About Focus */}
        <About />

        {/* Section 3: Services Showcase */}
        <Services />

        {/* Section 4: Projects Grid Templates */}
        <Projects />

        {/* Section 5: Connect / Form info */}
        <Contact />
      </main>

      {/* Footer Block */}
      <Footer />
    </div>
  );
}
