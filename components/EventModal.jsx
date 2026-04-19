"use client";

import { motion } from "framer-motion";

export default function EventModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white text-black p-10 max-w-xl text-center"
      >
        <h2 className="text-3xl font-bold">Host Your Event</h2>
        <p className="mt-4">
          World-class venues, global audience reach, unmatched scale.
        </p>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 px-6 py-2 bg-black text-white"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
