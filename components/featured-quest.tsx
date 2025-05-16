import { Quest } from "@/@types/interface";
import QuestPreviewCard from "./quest-preview-card";

const quests: Quest[] = [
  {
    title: "Emergency Clean-Up: Government House",
    rank: "B+ Required",
    reward: "₦25,000 + Bonus (Paid in USDC)",
    location: "Abuja, Nigeria",
    tags: ["urgent", "physical", "one-time"],
  },
  {
    title: "Part-Time Web3 Research Assistant",
    rank: "C+ and above",
    reward: "$300/mo",
    location: "Remote",
    tags: ["remote", "research", "monthly"],
  },
  {
    title: "Cook for a Startup Team (1 week)",
    rank: "C or higher",
    reward: "₦50,000",
    location: "Lagos, Nigeria",
    tags: ["short-term", "on-site", "food"],
  },
];


function FeaturedQuests() {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Featured Quests</h2>
          <p className="mt-2 text-gray-600">
            Choose your next adventure — filtered by skill, rank, and mission type.
          </p>
        </div>

       <div
        className="
          grid 
          grid-cols-1 
          gap-8 
          md:grid-cols-3
          overflow-x-auto
          snap-x
          snap-mandatory
          scrollbar-thin
          scrollbar-thumb-yellow-400
          scrollbar-track-gray-200
        "
        style={{ scrollSnapType: "x mandatory" }}
      >
                  {
                      quests.map((quest, idx) => (
                          <QuestPreviewCard key={idx} quest={quest} />
                      ))
            }
        </div>
      </div>
    </section>
  );
}

export default FeaturedQuests;
