"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return(
        <section className="bg-liner-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold"
          >
            Shop Smarter with AI
          </motion.h1>
          <motion.p
           initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-slate-100"
          >
              Personalized recommendations, intelligent search,
          live shopper analytics and AI-powered experiences.
          </motion.p>
           <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg"
        >
          Explore Products
        </motion.button>
            </div>
        </section>
    )
}