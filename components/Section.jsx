"use client";

import { motion } from "framer-motion";

export default function Section({ children, bg }) {
  return (
    <section className={`h-screen w-full snap-start flex items-center justify-center relative ${bg}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
