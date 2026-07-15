import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LetterCard from "../components/LetterCard/LetterCard";

const Feelings = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-100">
      {/* Background Blobs */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-pink-200 opacity-30 blur-3xl" />

      <div className="absolute right-0 bottom-10 h-96 w-96 rounded-full bg-purple-200 opacity-30 blur-3xl" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16">
        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl font-black text-pink-500 md:text-6xl"
        >
          Before You Go...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-center text-gray-500 italic"
        >
          Just a tiny note from me.
        </motion.p>

        {/* Letter */}

        <div className="mt-12 w-full max-w-3xl">
          <LetterCard>
            <div className="space-y-6 text-lg leading-9 text-gray-700">
              <p>
                If you've made it this far... thank you for entertaining my
                random idea. 😄
              </p>

              <p>
                I just wanted to say that I'm genuinely grateful our paths
                crossed.
              </p>

              <p>
                Thank you for all the random conversations, unnecessary debates,
                food discussions, memes, and the little moments that somehow
                became some of my favorite memories.
              </p>

              <p>
                One thing I've always admired about you is how genuine you are.
                You're self-aware, kind, and never too proud to admit when
                you're wrong. That's something I really respect.
              </p>

              <p>
                And despite all that maturity, you still get excited over the
                smallest things. I honestly hope life never changes that part of
                you.
              </p>

              <p>
                Whether you realize it or not, you've made quite a few ordinary
                days a little brighter.
              </p>

              <p className="font-semibold text-center text-pink-500 text-xl">
                So here's to more laughter, more good food, more adventures, and
                a wonderful year ahead.
              </p>

              <p className="text-center text-2xl">Happy Birthday. 🤍</p>
            </div>
          </LetterCard>
        </div>

        {/* Button */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/finale")}
          className="mt-12 rounded-full bg-pink-500 px-10 py-4 font-semibold text-white shadow-xl transition"
        >
          One Last Surprise 🎁
        </motion.button>
      </div>
    </div>
  );
};

export default Feelings;
