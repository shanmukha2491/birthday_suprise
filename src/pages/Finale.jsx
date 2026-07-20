import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import celebrationGif from "../assets/gifs/celebration.gif";

const Finale = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Initial Confetti
    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.5 },
    });

    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const celebrateAgain = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 8,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 8,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
      });
    }, 200);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-purple-100 px-6">
      {/* Floating Background */}

      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-pink-300 opacity-30 blur-3xl animate-pulse" />

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple-300 opacity-30 blur-3xl animate-pulse" />

      {/* Floating Emojis */}

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute left-10 top-24 text-5xl"
      >
        🎈
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="absolute right-12 top-36 text-4xl"
      >
        🎉
      </motion.div>

      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute bottom-20 left-12 text-4xl"
      >
        ✨
      </motion.div>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="z-10 max-w-2xl rounded-3xl bg-white/80 p-10 text-center shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-center gap-5">
              <motion.span
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-5xl"
              >
                🎉
              </motion.span>

              <h1 className="text-2xl font-black text-pink-500 md:text-6xl">
                Happy Birthday!
              </h1>

              <motion.span
                animate={{ rotate: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-5xl"
              >
                🎉
              </motion.span>
            </div>

            <img
              src={celebrationGif}
              alt="Celebration"
              className="mx-auto mt-8 w-64 rounded-2xl"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg leading-9 text-gray-700"
            >
              Thanks for making ordinary days a little more memorable.
              <br />
              <br />
              Some conversations fade away, but a few quietly stay with us.
              <br />
              <br />
              If I had the chance, I'd gladly relive those moments all over
              again.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-xl font-semibold text-pink-500"
            >
              <br />
              Stay happy, keep exploring, and never lose that childlike
              excitement.
            </motion.p>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={celebrateAgain}
              className="mt-10 rounded-full bg-pink-500 px-8 py-4 font-semibold text-white shadow-xl"
            >
              🎁 Celebrate Again
            </motion.button>

            <p className="mt-10 text-sm text-gray-500">
              Made with lots of debugging, coffee ☕, memes 😂, and a little bit
              of care.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Finale;
