import {  MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import NavLinks from "./nav-links";

const NavMobile = ()=> {
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="hover:bg-accent"  variant="ghost" size="default">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetTitle content="navbar" />
                <SheetContent  className=" h-[96%] rounded-2xl self-center   mx-3">
                    <div className="w-full  p-4">
                         <NavLinks isMobile/>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default NavMobile;