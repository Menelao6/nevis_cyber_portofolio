import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import FeaturedWriteups from "./components/FeaturedWriteups/FeaturedWriteups";
import Certifications from "./components/Certifications/Certifications"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedWriteups />
      <Certifications />
    </div>
  );
}
