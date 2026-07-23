import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import celebrationGif from "../assets/gifs/celebration.gif";

const Finale = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const startSequence = () => {
    setShowMessage(false);
    setShowReplay(false);
    setShowModal(false);

    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.5 },
    });

    setTimeout(() => setShowMessage(true), 1200);
    setTimeout(() => setShowReplay(true), 4200);
  };

  useEffect(() => {
    startSequence();
  }, []);

  const celebrateAgain = () => {
    const end = Date.now() + 3000;

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

  const replay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    startSequence();
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-purple-100 px-6">
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-pink-300 opacity-30 blur-3xl animate-pulse" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple-300 opacity-30 blur-3xl animate-pulse" />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute left-10 top-24 text-5xl"
      >
        🎈
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute right-12 top-36 text-4xl"
      >
        🎉
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute bottom-20 left-12 text-4xl"
      >
        ✨
      </motion.div>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
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
              Stay happy, keep exploring, and never lose that childlike
              excitement.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={celebrateAgain}
              className="mt-10 rounded-full bg-pink-500 px-8 py-4 font-semibold text-white shadow-xl"
            >
              🎁 Celebrate Again
            </motion.button>

            <AnimatePresence>
              {showReplay && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowModal(true)}
                    className="rounded-full border border-pink-300 px-8 py-4 font-semibold text-pink-600"
                  >
                    🔄 Replay Surprise
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-10 text-sm text-gray-500">
              Built with countless console.logs, way too much coffee ☕, random
              memes 😂, and more care than I'd probably admit.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="mx-6 max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
            >
              <div className="text-6xl">😂</div>
              <h2 className="mt-4 text-3xl font-bold text-pink-500">
                You silly...
              </h2>
              <p className="mt-5 leading-8 text-gray-700">
                You can replay this website whenever you want.
                <br />
                <br />
                But you can't replay a good conversation.
                <br />
                <br />
                Maybe... you could just call me instead? 📞❤️
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 rounded-full border border-pink-300 px-5 py-3"
                >
                  📞 I'll Think About It
                </button>

                <button
                  onClick={replay}
                  className="flex-1 rounded-full bg-pink-500 px-5 py-3 font-semibold text-white"
                >
                  😂 Okay Fine
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Finale;
