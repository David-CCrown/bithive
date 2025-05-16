'use client';

import { motion } from "motion/react";

const steps = [
  {
        icon: <div className="w-6 h-6 text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
    </div>,
    title: "Create Your Hive Identity",
    description: "Sign up using Civic Auth to get your decentralized identity and embedded wallet — your passport into the world of work.",
  },
  {
      icon: <div className="w-6 h-6 text-yellow-500">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

    </div>,
    title: "Explore Available Quests",
    description: "Browse real-world tasks, gigs, and missions tailored to your current rank and skills. From micro-tasks to elite roles.",
  },
  {
      icon: <div className="w-6 h-6 text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>

    </div>,
    title: "Earn, Rank Up & Get Rated",
    description: "Complete quests, receive peer reviews, and grow your reputation on-chain. Your progress is your power.",
  },
  {
      icon: <div className="w-6 h-6 text-yellow-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
    </div>,
    title: "Unlock Elite Opportunities",
    description: "High-rank adventurers can receive international placements and trusted roles in top organizations.",
  },
];

const HowItWorks = () => {
    return (
        <div className="min-h-[100vh] p-4">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <div className="">
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
                    <p className="text-lg mb-4">
                        Your journey through BitHive is a climb. Accept quests, prove your value, and ascend in the guild.
                    </p>
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-10">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.6 }}
                            className="p-6 bg-gray-50 rounded-xl shadow-md flex items-start space-x-4"
                        >
                            <div className="mt-1">{step.icon}</div>
                            <div>
                            <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                            <p className="text-gray-600 mt-1">{step.description}</p>
                            </div>
                        </motion.div>
                        ))}
                </div>
                    
                </div>
                
        </div>
    );
}

export default HowItWorks;