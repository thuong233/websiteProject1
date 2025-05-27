import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/specialSection/SkillsMain";
import NewsMain from "./components/NewsSection/NewsMain";
import SubSkills from "./components/specialSection/SubSkills";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
// import SubHeroSection from "./components/heroSection/SubHeroSection";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
      <NewsMain />
      <SkillsMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />

      <HelperSection />
    </main>
  );
}

export default App;
