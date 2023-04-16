import { Projects } from "../src/components/Projects";
import { ExperienceAndEducation } from "../src/components/ExperienceAndEducation/ExperienceAndEducation";
import { Contact } from "../src/components/Contact";
import Head from "next/head";
import { EnglishPresentation } from "../src/components/Ingles/Presentation/EnglishPresetation";
import { EnglishAboutMe } from "../src/components/Ingles/AboutMe/EnglishAboutMe";
import { EnglishNavWeb } from "../src/components/Ingles/Navs/EnglishNavWeb";
import { EnglishNavMobile } from "../src/components/Ingles/Navs/EnglishNavMobile";
export default function Home() {
  return (
    <>
      <Head>
        <title>Gonzalo Cervan - Portfolio -</title>
      </Head>
      <div className="relative">
        <EnglishPresentation />
        <EnglishAboutMe />
        <EnglishNavWeb />
        <EnglishNavMobile/>
        <Projects />
        <ExperienceAndEducation />
        <Contact />
      </div>
    </>
  );
}
