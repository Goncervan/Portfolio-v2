import { AboutMe } from "../src/components/AboutMe";
import { Projects } from "../src/components/Projects";
import { Nav } from "../src/components/Nav";
import { Experience } from "../src/components/Experience";
import { Skills } from "../src/components/Skills";
import { Education } from "../src/components/Education";
import { Contact } from "../src/components/Contact";
export default function Home() {
  return (
    <div className="relative">
      <AboutMe />
      <Nav />
      <Projects />
      <Experience />
      <Skills/>
      <Education/>
      <Contact />
    </div>
  );
}
