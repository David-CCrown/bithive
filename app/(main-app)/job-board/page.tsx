import AIInputQuestBoard from "@/components/ai-input-quest-board";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Job Board",
    description: "Communicate with the AI to get the best quests for you",
}

export default function JobBoardPage() {
    return (
        <div>
            <div className=" max-w-[90%] lg:max-w-5xl mx-auto  my-14">
                <h1 className="text-3xl md:text-4xl font-[700] mb-2 gradient-text">Bithive QuestMaster</h1>
                <p className="text-base md:text-lg text-gray-600">
                    Your AI Guild Advisor. Discover quests. Boost your rank.
                </p>
                
                <div className="mt-10 w-full md:w-[80%] lg:w-[60%]">
                    <AIInputQuestBoard />
                </div>
             </div>
        </div>
    )
}