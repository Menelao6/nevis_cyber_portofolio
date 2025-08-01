import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import FeaturedWriteups from "./components/FeaturedWriteups/FeaturedWriteups";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedWriteups />
    </div>
  );
}
