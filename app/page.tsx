import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import Projects from "../app/components/Projects";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}