import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
// import { Input } from '@/components/ui/input';

export default function QuestBoard() {
  const featuredQuests = [
    {
      title: 'Frontend Design Sprint',
      description: 'Build a marketing site with animations.',
      time: '3 days',
      reward: 'XP + NFT',
      video: '/videos/frontend.mp4',
    },
    {
      title: 'Smart Contract Bug Bounty',
      description: 'Find vulnerabilities in a testnet token.',
      time: '2 days',
      reward: 'Token + XP',
      video: '/videos/contract.mp4',
    },
    // ...more quests
  ];

  const gridQuests = [
    {
      title: 'UI Fixes for Open Source App',
      image: '/images/ui.jpg',
      tags: ['#Design', '#Frontend'],
      time: '1 day',
      reward: 'XP',
    },
    {
      title: 'Create DAO Logo Animation',
      image: '/images/animation.jpg',
      tags: ['#Motion', '#Web3'],
      time: '3 days',
      reward: 'XP + Token',
    },
    // ...more quests
  ];

  return (
    <div className="mt-8 space-y-12">
      {/* Featured Quests */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Quests</h2>
              <ScrollArea className="flex gap-6 overflow-x-auto pb-4" results={featuredQuests.length}>
                  <div className="flex w-max space-x-4 p-4">
                  {featuredQuests.map((quest, index) => (
                        <Card key={index} className="min-w-[300px] w-[320px]">
                        <video
                            src={quest.video}
                            autoPlay
                            muted
                            loop
                            className="rounded-t-xl w-full h-40 object-cover"
                        />
                        <CardContent className="space-y-2">
                            <h3 className="text-lg font-semibold">{quest.title}</h3>
                            <p className="text-sm text-muted-foreground">{quest.description}</p>
                            <div className="text-xs">⏱ {quest.time} • 🎖 {quest.reward}</div>
                            <Button className="w-full">View Quest</Button>
                        </CardContent>
                        </Card>
                    ))}
              </div>
      
        </ScrollArea>
      </section>

      {/* Grid Quest Feed */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Quest Feed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridQuests.map((quest, index) => (
            <Card key={index}>
              <img src={quest.image} alt={quest.title} className="rounded-t-xl w-full h-40 object-cover" />
              <CardContent className="space-y-2">
                <h3 className="text-lg font-semibold">{quest.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {quest.tags.map((tag, idx) => (
                    <Badge key={idx}>{tag}</Badge>
                  ))}
                </div>
                <div className="text-xs">⏱ {quest.time} • 🎖 {quest.reward}</div>
                <div className="flex gap-2">
                  <Button size="sm">Apply</Button>
                  <Button size="sm" variant="secondary">Watch Brief</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Guild Challenges */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Guild Challenge: Seasonal Bounty</h2>
        <p className="mb-4">Join your guild and complete this bounty before time runs out!</p>
        <div className="text-sm">⏳ Ends in: 2d 5h 12m</div>
      </section>

      {/* Ongoing Quests */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Your Ongoing Quests</h2>
        <Card>
          <CardContent className="space-y-2">
            <h3 className="text-lg">Optimize Crypto Analytics UI</h3>
            <Progress value={60} />
            <div className="text-xs text-muted-foreground">Last updated: 1h ago</div>
            <Button>Continue Quest</Button>
          </CardContent>
        </Card>
      </section>

      {/* Earn While You Learn */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Earn While You Learn</h2>
        <Card>
          <CardContent className="space-y-2">
            <h3 className="text-lg">Intro to Blockchain with Quests</h3>
            <Badge>Verified</Badge>
            <div className="text-xs">🎖 Reward: Token + XP</div>
            <Button>Join</Button>
          </CardContent>
        </Card>
      </section>

      {/* QuestMaster AI Widget */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <Button className="rounded-full shadow-xl px-6 py-3">🧙 QuestMaster</Button>
      </div> */}
    </div>
  );
}
