import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/subHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/specialSection/SkillsMain";
import NewsMain from "./components/NewsSection/NewsMain";
import SubSkills from "./components/specialSection/SubSkills";
import ProjectsMain from "./components/projectsSection/ProjectsMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <NewsMain />
      <SkillsMain />
      <SubSkills />
      <ProjectsMain />

      <HelperSection />
    </main>
  );
}

export default App;
