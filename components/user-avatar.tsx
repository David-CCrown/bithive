
import { getUser } from "@civic/auth-web3/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { LogoutCivicButton } from "./auth-civic-button";
import { Skeleton } from "./ui/skeleton";
import { SettingsIcon, UserIcon, WalletIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const userAvatarPagesList = [
     {
        label: "Profile",
        href: "/profile",
        icon: <UserIcon className="w-4 h-4 mr-2" />
    },
    {
        label: "Wallet",
        href: "/wallet",
        icon: <WalletIcon className="w-4 h-4 mr-2" />
    },
    {
        label: "Settings",
        href: "/settings",
        icon: <SettingsIcon className="w-4 h-4 mr-2" />
    },
   
]

const UserAvatar =  async () => {
    const user  = await getUser();
    return (
        <>
            <Popover>
              <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer" style={{ width: "40px", height: "40px" }}>
                        <AvatarFallback>
                            <Skeleton className="w-full h-full bg-gray-300" />
                        </AvatarFallback>
                        <AvatarImage
                            src={user?.picture}
                            alt={user?.name}
                            className="object-cover  flex items-center justify-center"
                            style={{ width: "50px", height: "50px" }}
                        />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-65" side="bottom" align="end">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col  items-center justify-center">
                            <Image src={user?.picture || "/default-avatar.png"} alt={user?.name || "Default User"} width={65} height={65} className="rounded-full" />
                            <h4 className="mt-2 text-base font-semibold">{user?.name}</h4>
                            <small>{ user?.email}</small>
                        </div>
                        <Separator className="my-2" />
                        
                        <div className="flex flex-col gap-2 p-2">
                            {
                                userAvatarPagesList.map(({icon, label, href}, idx) => (
                                    <Link tabIndex={-1}  href={href}  key={idx}>
                                        <Button className="cursor-pointer w-full justify-start text-left" variant="link">
                                            {icon}
                                            <span>{label}</span>
                                        </Button>
                                    </Link>
                                ))  
                            }
                            <Separator className="my-2" />
                            <LogoutCivicButton />
                      </div>
                  </div>
              </PopoverContent>
        </Popover>
           
        </>
    )
}

export default UserAvatar;