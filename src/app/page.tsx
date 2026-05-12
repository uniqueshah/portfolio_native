import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

/**
 * Marketing landing: single-page layout ordered to match `Navbar` hash targets
 * (`#home` … `#contact`) and the hero scroll affordance.
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Site-wide footer; year updates from runtime clock */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shahnazar. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

