"use client";

import { motion } from "framer-motion";

export default function EventModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl px-6"
      >
        <h2 className="text-4xl font-bold">Global Event Platform</h2>

        <p className="mt-6 text-gray-400">
          Host concerts, brand activations, and large-scale experiences in the world’s most visited destination.
        </p>

        <button
          onClick={() => setOpen(false)}
          className="mt-10 px-8 py-3 border border-white hover:bg-white hover:text-black transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
