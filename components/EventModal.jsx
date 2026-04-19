"use client";

import { motion } from "framer-motion";

export default function EventModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center max-w-2xl px-6"
      >
        <h2 className="text-4xl font-bold">Global Event Platform</h2>
        <p className="mt-6 text-lg text-gray-300">
          Host concerts, brand activations, and world-class events at one of the
          most visited destinations on Earth.
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
