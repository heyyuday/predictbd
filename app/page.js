'use client';

import { motion } from 'framer-motion';

const markets = [
  { id: 1, question: "Will Bitcoin hit $100k in 2026?", yes: 62 },
  { id: 2, question: "Will Apple release new VR headset this year?", yes: 48 },
  { id: 3, question: "Will US cut interest rates next quarter?", yes: 55 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-black">

      {/* HERO */}
      <section className="h-[70vh] flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Predict the Future
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-600 max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Clean, data-driven prediction markets powered by real-world events.
        </motion.p>
      </section>

      {/* CATEGORY SWITCH */}
      <div className="flex justify-center mb-10">
        <div className="bg-white p-1 rounded-full shadow flex gap-2">
          <button className="px-6 py-2 rounded-full bg-black text-white text-sm">
            International
          </button>
          <button className="px-6 py-2 rounded-full text-gray-500 text-sm">
            National
          </button>
        </div>
      </div>

      {/* MARKETS */}
      <section className="max-w-4xl mx-auto px-4 space-y-6 pb-20">
        {markets.map((m, i) => (
          <motion.div
            key={m.id}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h2 className="text-lg font-medium">{m.question}</h2>

            {/* PROBABILITY BAR */}
            <div className="mt-5">
              <div className="flex justify-between text-sm mb-1">
                <span>Yes</span>
                <span>{m.yes}%</span>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${m.yes}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

    </main>
  );
}
