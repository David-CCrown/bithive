import { title } from "@/lib/primitives";
import { Button } from "./ui/button";
import HeroLottieAnimation from "./hero-lottie-animation";
import CivicAuthTag from "./civic-auth-tag";

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center  h-[calc(100vh-6rem)] relative">
            <div className="max-w-3xl mx-auto px-4">
                 <h1 className={title({ size: "lg", class: "font-[700]" })}>From Micro-Gigs to Global Missions — Earn Your Way Up.</h1>
                <p className="mt-6 text-lg md:text-xl text-gray-700">
                    Discover ranked work, build reputation, and earn real-world rewards on BitHive — the guild-inspired job network.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" variant="secondary">
                        Join the Hive
                    </Button>
                    <Button size="lg" variant="outline">
                        Learn More
                    </Button>
                </div>
                <CivicAuthTag  />
             </div>
           {/* <HeroLottieAnimation /> */}
        </div>
    )
}

export default Hero;