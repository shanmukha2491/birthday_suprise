import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ReasonCard from "../components/ReasonCard/ReasonCard";
import reasons from "../data/reasons";

const Reasons = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-100">
      {/* Background */}

      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-pink-200 opacity-30 blur-3xl" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-purple-200 opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-black text-pink-500 md:text-6xl">
            Still Left To Do... 🌍
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            A tiny bucket list of adventures waiting to happen.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
              className="h-full"
            >
              <ReasonCard
                emoji={reason.emoji}
                title={reason.title}
                text={reason.text}
              />
            </motion.div>
          ))}
        </div>

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-3xl bg-white p-10 shadow-xl"
        >
          <p className="text-center text-2xl italic leading-10 text-gray-700">
            "The best memories are usually the ones nobody planned."
          </p>
        </motion.div>

        {/* Ending Note */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="mt-10 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
            Hopefully this list never gets completed... because every adventure
            should lead to another one.
          </p>
        </motion.div>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => navigate("/feelings")}
            className="rounded-full bg-pink-500 px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-pink-600"
          >
            One Last Thing →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Reasons;
