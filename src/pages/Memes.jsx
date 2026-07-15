import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import MemeCard from "../components/MemeCard/MemeCard.jsx";
import memes from "../data/memes.js";

const Memes = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-center text-4xl font-black text-pink-500 md:text-6xl">
            Meme Collection 😂
          </h1>

          <p className="mt-4 text-center text-gray-600">
            Because no birthday website is complete without memes.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3">
          {memes.map((meme, index) => (
            <motion.div
              key={meme.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="mb-6 break-inside-avoid"
            >
              <MemeCard image={meme.image} caption={meme.caption} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Card */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className="mt-16 rounded-3xl bg-white p-8 text-center shadow-xl"
        >
          <h2 className="text-2xl font-bold">Final Observation 🧐</h2>

          <p className="mt-5 text-lg text-gray-600">
            Scientists still haven't figured out how one person can be this
            funny without even trying.
          </p>
        </motion.div>

        {/* Continue */}

        <div className="mt-14 text-center">
          <button
            onClick={() => navigate("/reasons")}
            className="rounded-full bg-pink-500 px-10 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Memes;
