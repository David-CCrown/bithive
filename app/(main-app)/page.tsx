import FeaturedQuests from "@/components/featured-quest";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import WhyBitHive from "@/components/why-bithive";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyBitHive />
      <FeaturedQuests  />
    </>
  );
}
