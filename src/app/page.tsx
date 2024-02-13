import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <main className="w-auto flex flex-col gap-14 overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
