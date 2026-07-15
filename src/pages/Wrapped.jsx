import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ObservationList from "../components/ObservationList/ObservationList";
import LittleThings from "../components/LittleThings/LittleThings";
import Achievements from "../components/Achievements/Achievements";

const Wrapped = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-black text-pink-500">
            Things I Quietly Noticed ✨
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            No statistics. No percentages. Just a few things I genuinely admire.
          </p>
        </motion.div>

        <div className="mt-14">
          <ObservationList />
        </div>

        <LittleThings />

        <Achievements />

        <div className="mt-20 text-center">
          <button
            onClick={() => navigate("/memes")}
            className="rounded-full bg-pink-500 px-10 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wrapped;
