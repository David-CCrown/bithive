import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discover the best Quests",
    description: "Get tailored quests for you",
}

export default function QuestsPage() {
  return (
    <div>
      <h1>Quest Page</h1>
      <p>This is the quest page.</p>
    </div>
  );
}