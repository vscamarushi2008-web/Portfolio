import ScrollProgress from "./components/ui/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Research from "./components/sections/Research";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Photography from "./components/sections/Photography";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="relative bg-void min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Research />
        <Projects />
        <Certifications />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
