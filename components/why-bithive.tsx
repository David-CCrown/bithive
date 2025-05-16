'use client'

import { motion } from "motion/react";
import {
  ShieldCheck,
  Users,
  BarChart2,
  Globe,
  Wallet,
} from "lucide-react";

const benefits = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />,
    title: "Verified Quests",
    desc: "Every task and gig is verified to ensure safety, fairness, and value.",
  },
  {
    icon: <Users className="w-6 h-6 text-yellow-500" />,
    title: "Dual-Side Ratings",
    desc: "Finders and seekers both build trust with every interaction.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-yellow-500" />,
    title: "Earn Instantly",
    desc: "Get paid directly to your Civic embedded wallet, no delays.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-yellow-500" />,
    title: "Rank-Based Access",
    desc: "More reputation unlocks bigger, better, even international quests.",
  },
  {
    icon: <Globe className="w-6 h-6 text-yellow-500" />,
    title: "Global Opportunities",
    desc: "Cross-border gigs become accessible as your Hive Rank grows.",
  },
];

export default function WhyBitHive() {
  return (
    <section className="w-full py-24 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">Why BitHive?</h2>
        <p className="mt-4 text-gray-600">
          BitHive isn’t just a platform — it’s an economy of trust. Climb the ranks, join forces, and unlock your work destiny.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {benefits.map((b, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="flex items-start space-x-4"
          >
            <div>{b.icon}</div>
            <div>
              <h4 className="text-lg font-semibold">{b.title}</h4>
              <p className="text-gray-600 mt-1">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
