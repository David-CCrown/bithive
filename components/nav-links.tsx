import { navLinks } from "@/lib/config";
import NextLink from "next/link";
import { NavigationMenu, NavigationMenuLink } from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavLinksProps {
    isMobile?: boolean;
}

const NavLinks:React.FC<NavLinksProps> = ({isMobile=false}) => {
    return (
        <NavigationMenu className={cn({"hidden lg:flex flex-row gap-6": !isMobile, "w-[100%] block  gap-2": isMobile})}>
            {
                navLinks.map((link) => (
                    <NavigationMenuLink className={cn("py-1", {"w-full !rounded-lg": isMobile})}  asChild key={link.name}>
                        <NextLink
                            key={link.name}
                            href={link.path}
                            className={cn("font-[700] text-[16px] text-foreground transition-colors duration-300", {"w-full": isMobile})}
                    >
                        {link.name}
                    </NextLink>
                    </NavigationMenuLink>
                ))
            }
        </NavigationMenu>
    )
}

export default NavLinks;