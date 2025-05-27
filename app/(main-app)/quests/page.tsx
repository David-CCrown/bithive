import QuestBoard from "@/components/quest-board";
import QuestSearch from "@/components/quest-search";
import QuestStaticSlugs from "@/components/quest-static-slugs";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Discover the best Quests",
    description: "Get tailored quests for you",
}

export default function QuestsPage() {
  return (
    <div className=" max-w-[95%]  mx-auto  my-8">
   
      <div className="mt-8  mx-auto w-[90%]  md:w-[80%]">
        <QuestStaticSlugs />
        <QuestSearch />
        <QuestBoard />
     </div>
   
    </div>
  );
}