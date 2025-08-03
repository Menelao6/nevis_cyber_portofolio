import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import FeaturedWriteups from "./components/FeaturedWriteups/FeaturedWriteups";
import Certifications from "./components/Certifications/Certifications"
import SkillsAndTools from "./components/SkillsAndTools/SkillsAndTools"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedWriteups />
      <Certifications />
      <SkillsAndTools />
      <Footer />
    </div>
  );
}
