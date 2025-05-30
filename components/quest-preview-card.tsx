import { Quest } from "@/@types/interface";
import { Card, CardContent } from "./ui/card";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QuestPreviewCard: React.FC<{quest: Quest}> = ({ quest }) => { 
    
    return (
        <Card className="flex flex-col bg-gray-400 shadow-md p-4 h-[65vh]">
            <CardContent></CardContent>
        {/* <h2 className="text-xl font-bold">{quest.title}</h2>
        <p className="text-gray-700">{quest.description}</p>
        <div className="mt-2">
            <span className="text-sm text-gray-500">Reward: {quest.reward}</span>
        </div> */}
        </Card>
    );
}

export default QuestPreviewCard;