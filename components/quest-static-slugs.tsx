import { questSlugs } from "@/lib/config";
import { NavigationMenu, NavigationMenuLink } from "./ui/navigation-menu";
import Link from "next/link";

const QuestStaticSlugs = ()=> {
    return (
        <div className="mb-6">
            <NavigationMenu className="w-[80%] mx-auto flex items-center flex-wrap"  >
                    {
                    questSlugs.map((quest) => (
                        <NavigationMenuLink key={quest.label} asChild>
                        <Link
                            href={`/quests${quest.href}`}
                            className="text-sm font-medium text-muted-foreground hover:text-primary"
                        >
                            {quest.label}
                        </Link>
                        </NavigationMenuLink>
                    ))
                    }
                </NavigationMenu>
        </div>
    )
}

export default QuestStaticSlugs;