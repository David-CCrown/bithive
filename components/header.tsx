import Logo from "./logo";
import NavLinks from "./nav-links";
import Notification from "./notification";
import AuthCivicButton from "./auth-civic-button";
import UserAvatar from "./user-avatar";
import NavMobile from "./nav-mobile";
import { Suspense } from "react";
import getUserAction from "./services/actions/getUserAction";

const Header =  async () => {
    const user = await getUserAction();
    // const [rank, setRank] = useState('S'); // Example static rank
    return (
        <header className="flex items-center justify-between py-6 px-4 lg:px-12">
            <div className="flex items-center gap-4">
               <div className="lg:hidden"> <NavMobile /></div>
                <Logo  size={100} />
            </div>
           <div className="hidden lg:block"> <NavLinks /></div>
            <Suspense fallback={<div className="flex items-center gap-8"><Notification /></div>}>
                    <div className="flex items-center gap-8">
                        <Notification />
                        {
                            !!user ? (
                                <div className="flex items-center gap-2">
                                <UserAvatar  />
                                </div>
                            ) : (
                                <AuthCivicButton />
                            )
                        }
                    </div>
            </Suspense>
        </header>
    );
}

export default Header;
