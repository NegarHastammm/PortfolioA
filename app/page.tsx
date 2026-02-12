import Hero from "./ui/Hero";
import Projects from "./ui/Projects";
import About from "./ui/About";
import Contact from "./ui/Contact";
export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
