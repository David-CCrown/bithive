import { Metadata } from "next"


import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
    title: "Discover the best Guilds",
    description: "Join the best guilds in the Bithive ecosystem",
}


export default function GuildsPage() {
    return (
        <div className=" max-w-[95%]  mx-auto ">
            <div className=" mx-auto w-full  md:w-[80%]">
            <div className="space-y-12 px-6 py-10">
      {/* 🌟 Featured Guilds */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🌟 Featured Guilds</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3].map((_, i) => (
            <Card key={i} className="min-w-[280px] max-w-sm">
              <CardHeader>
                <img src="/guild-emblem.png" alt="Guild Emblem" className="rounded-md" />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="text-lg font-semibold">Guild Name #{i + 1}</h3>
                <p className="text-sm text-muted-foreground">Top design guild focused on frontend magic.</p>
                <div className="text-sm flex justify-between">
                  <span>👥 128 members</span>
                  <span>🎖 12,300 XP</span>
                </div>
                <Button size="sm">View Guild</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 📜 All Guilds */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between  md:items-center">
          <h2 className="text-2xl font-bold">📜 All Guilds</h2>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Input placeholder="Search guilds..." className="w-[200px]" />
            <Button variant="outline">Sort: Most Active</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="relative">
              <CardHeader>
                <img src="/guild-emblem.png" alt="Guild Emblem" className="rounded-md" />
              </CardHeader>
              <CardContent className="space-y-2">
                <h3 className="font-semibold text-md">Guild #{i + 1}</h3>
                <div className="flex flex-wrap gap-1 text-xs">
                  <Badge>#Frontend</Badge>
                  <Badge>#Newbie Friendly</Badge>
                  <Badge>🔥 Trending</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>🎖 {1000 + i * 123} XP</span>
                  <span>👥 {50 + i * 10} members</span>
                </div>
                <Button size="sm">Join Guild</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 🏆 Guild Achievements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">🏆 Guild Achievements</h2>
        <Card>
          <CardContent className="p-4 space-y-2">
            <h3 className="font-semibold">Frontend Wizards</h3>
            <p>🥇 Winner of Design Sprint 2025 • 15+ Quests Completed</p>
            <div className="flex gap-2 text-xs">
              <Badge variant="outline">Season Champ</Badge>
              <Badge variant="outline">Streak Master</Badge>
              <Badge variant="outline">Top 1%</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 📖 Create a Guild Info */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">📖 How to Create a Guild</h2>
        <Card>
          <CardContent className="space-y-2 p-4 text-sm">
            <p>✨ Must be Level 5 or above</p>
            <p>💰 Requires 500 XP to create</p>
            <p>📛 Guild emblem & description required</p>
            <p>🔗 One verified wallet or account</p>
            <Button className="mt-2">Create a Guild</Button>
          </CardContent>
        </Card>
      </section>

      {/* 🧙 Recommended Guilds AI Widget */}
      {/* <section>
        <div className="fixed bottom-4 right-4 w-[300px] shadow-xl rounded-xl bg-background border z-50">
          <CardHeader className="text-sm font-semibold bg-muted p-2 rounded-t-xl">🧙‍♂️ GuildFinder AI</CardHeader>
          <CardContent className="p-3 space-y-2 text-sm">
            <p>"Show me design-focused guilds"</p>
            <p>"Find active guilds for beginners"</p>
            <p>"Top guilds with paid quests?"</p>
          </CardContent>
        </div>
      </section> */}
    </div>
            </div>
         </div>
    
  )
}
