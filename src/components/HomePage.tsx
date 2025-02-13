import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
