import { Mic2Icon,  PlusIcon, SendIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { GlowingEffect } from "./ace/glowing-effects";

const AIInputQuestBoard = () => { 
    return (
        <Card className="p-0 shadow-0">
            <CardContent className="p-0 relative rounded-lg">
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                />
                <Textarea className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:border-blue-500  min-h-[140px] max-h-[200px] resize-none peer"
                    placeholder="Talk with your AI Guild Advisor. Ask about quests, guilds, and more."
                    rows={1} />
                <div className="absolute bottom-0 left-0  w-full px-4 py-3 flex items-center justify-between pointer-events-none group ">
                    <div className="flex items-center gap-2">
                        <Button className="cursor-pointer pointer-events-auto"  size="icon" variant="outline">
                            <PlusIcon />
                        </Button>
                         <Button className="cursor-pointer pointer-events-auto"  size="icon" variant="outline">
                            <Mic2Icon />
                        </Button>
                    </div>
                    <div className="">
                        <Button className="cursor-pointer pointer-events-auto"  size="icon" variant="ghost">
                            <SendIcon />
                        </Button>
                    </div>
                </div>
            </CardContent>
            
        </Card>
    )
}

export default AIInputQuestBoard;