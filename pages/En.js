import { Projects } from "../src/components/Projects";
import { NavWeb } from "../src/components/Navs/NavWeb";
import { ExperienceAndEducation } from "../src/components/ExperienceAndEducation/ExperienceAndEducation";
import { Contact } from "../src/components/Contact";
import { NavMobile } from "../src/components/Navs/NavMobile";
import Head from "next/head";
import { EnglishPresentation } from "../src/components/Ingles/Presentation/EnglishPresetation";
import { EnglishAboutMe } from "../src/components/Ingles/AboutMe/EnglishAboutMe";
export default function Home() {
  return (
    <>
      <Head>
        <title>Gonzalo Cervan - Portfolio -</title>
      </Head>
      <div className="relative">
        <EnglishPresentation />
        <EnglishAboutMe />
        <NavWeb />
        <NavMobile />
        <Projects />
        <ExperienceAndEducation />
        <Contact />
      </div>
    </>
  );
}
