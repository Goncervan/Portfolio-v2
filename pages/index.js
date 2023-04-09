import { AboutMe } from "../src/components/AboutMe/AboutMe";
import { Projects } from "../src/components/Projects";
import { NavWeb } from "../src/components/Navs/NavWeb";
import { Experience } from "../src/components/Experience";
import { Education } from "../src/components/Education";
import { Contact } from "../src/components/Contact";
import { Presentation } from "../src/components/Presentation";
import { NavMobile } from "../src/components/Navs/NavMobile";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Gonzalo Cervan - Portfolio -</title>
      </Head>
      <div className="relative">
        <Presentation />
        <AboutMe />
        <NavWeb />
        <NavMobile />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </>
  );
}
