import { AboutMe } from "../src/components/AboutMe";
import { Projects } from "../src/components/Projects";
import { NavWeb } from "../src/components/Navs/NavWeb";
import { Experience } from "../src/components/Experience";
import { Skills } from "../src/components/Skills";
import { Education } from "../src/components/Education";
import { Contact } from "../src/components/Contact";
import { Presentation } from "../src/components/Presentation";
import { NavMobile } from "../src/components/Navs/NavMobile";
export default function Home() {
  return (
    <div className="relative">
      <Presentation />
      <AboutMe />
      <NavWeb />
      <NavMobile />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
