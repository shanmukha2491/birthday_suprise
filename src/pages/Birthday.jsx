import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import BirthdayCounter from "../components/BirthdayCounter/BirthdayCounter";
import QuoteCard from "../components/QuoteCard/QuoteCard";

import birthdayGif from "../assets/gifs/birthday.gif";

const Birthday = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-purple-100 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Background Blur */}

        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-pink-200 blur-3xl opacity-30" />

        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-purple-300 blur-3xl opacity-30" />

        <div className="container mx-auto px-6 py-20">
          {/* Hero */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-black text-pink-500">
              🎉 Happy Birthday 🎉
            </h1>

            <p className="mt-5 text-2xl font-medium text-gray-600">
              Today the world became slightly more chaotic... and way more fun.
            </p>

            <img
              src={birthdayGif}
              className="mx-auto mt-10 w-72 rounded-3xl shadow-xl"
            />
          </motion.div>

          {/* Counter */}

          <div className="mt-20">
            <BirthdayCounter />
          </div>

          {/* Wishes */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 grid md:grid-cols-3 gap-8"
          >
            <QuoteCard
              emoji="🧸"
              title="Tiny Human Energy"
              text="Somehow manages to be an adult and an adorable little kid at the exact same time."
            />

            <QuoteCard
              emoji="🍰"
              title="Birthday Physics"
              text="On birthdays, calories become compliments. It's basic science."
            />

            <QuoteCard
              emoji="🤍"
              title="Safe Place"
              text="Thank you for being the kind of person whose presence quietly makes everything feel a little better."
            />
          </motion.div>
          {/* Button */}

          <div className="mt-24 text-center">
            <button
              onClick={() => navigate("/wrapped")}
              className="rounded-full bg-pink-500 px-10 py-4 text-white font-semibold hover:scale-105 duration-300"
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
