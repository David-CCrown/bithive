import { navLinks } from "@/lib/config";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface NavLinksProps {
    isMobile?: boolean;
}

const NavLinks:React.FC<NavLinksProps> = ({isMobile=false}) => {
    return (
        <div className={cn("flex items-center", {"flex-col mt-8": isMobile}, {"flex-row": !isMobile})}>
              {
                navLinks.map((link) => (
                    <NextLink
                    key={link.name}
                    href={link.path}
                    className={cn("select-none font-[700] text-[16px] text-foreground transition-colors duration-300 hover:bg-muted active:bg-none rounded-lg", {"w-full": isMobile, }, "py-2 px-4", {"w-full": isMobile})}
            >
                {link.name}
          </NextLink>
                ))
            }
        </div>
    )
}

export default NavLinks;