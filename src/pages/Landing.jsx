import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import cat_music from "../assets/gifs/cat_music.gif";
import helloGif from "../assets/gifs/hello.gif";
import excitedGif from "../assets/gifs/excited.gif";
import calmGif from "../assets/gifs/calm.gif";

const Landing = ({ musicRef }) => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("");

  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveButton = () => {
    setNoPosition({
      x: Math.random() * 180 - 90,
      y: Math.random() * 120 - 60,
    });
  };

  const goToBirthday = () => {
    setTimeout(() => {
      navigate("/birthday");
    }, 2200);
  };

  const handleYes = () => {
    // Start music
    musicRef?.current?.playMusic();

    confetti({
      particleCount: 120,
      spread: 90,
    });

    setStep(2);
  };

  const handleReady = () => {
    setStatus("ready");

    confetti({
      particleCount: 200,
      spread: 130,
      origin: { y: 0.6 },
    });

    goToBirthday();
  };

  const handleNo = () => {
    setStatus("simple");
    goToBirthday();
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-100">
      <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-pink-200 opacity-30 blur-3xl animate-pulse" />

      <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-purple-200 opacity-30 blur-3xl animate-pulse" />

      <motion.div
        layout
        className="z-10 w-[90%] max-w-md rounded-3xl bg-white/80 p-10 text-center shadow-2xl backdrop-blur-xl"
      >
        <AnimatePresence mode="wait">
          {/* STEP 1 */}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <motion.h1
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="text-4xl font-bold"
              >
                Hey! 👋
              </motion.h1>

              <p className="mt-6 text-2xl font-semibold">
                I made something for you.
              </p>

              <p className="mt-2 text-gray-500">Wanna see it?</p>

              <img
                src={helloGif}
                className="mx-auto mt-8 w-56 rounded-2xl"
                alt=""
              />

              <div className="mt-8 flex justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYes}
                  className="rounded-full bg-pink-500 px-8 py-3 font-semibold text-white"
                >
                  Of Course ❤️
                </motion.button>

                <motion.button
                  animate={{
                    x: noPosition.x,
                    y: noPosition.y,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                  }}
                  onMouseEnter={moveButton}
                  onClick={moveButton}
                  className="rounded-full bg-pink-100 px-8 py-3 font-semibold text-pink-700"
                >
                  Nope 😅
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* STEP 2 */}

          {step === 2 && status === "" && (
            <motion.div
              key="step2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 className="text-4xl font-bold text-pink-500">
                One tiny request 🥹
              </h1>

              <img
                src={cat_music}
                className="mx-auto mt-8 w-56 rounded-2xl"
                alt=""
              />

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Turn your volume on 🎵
                <br />
                and let me do the rest.
              </p>

              <button
                onClick={handleReady}
                className="mt-8 rounded-full bg-pink-500 px-10 py-3 font-semibold text-white"
              >
                Let's Go ✨
              </button>
            </motion.div>
          )}

          {/* READY */}

          {status === "ready" && (
            <motion.div
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 className="text-5xl font-bold text-pink-500">Yay!! 🥳</h1>

              <img
                src={excitedGif}
                className="mx-auto mt-8 w-60 rounded-2xl"
                alt=""
              />

              <p className="mt-6 text-lg text-gray-600">
                Loading your birthday surprise...
              </p>
            </motion.div>
          )}

          {/* SIMPLE */}

          {status === "simple" && (
            <motion.div
              key="simple"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 className="text-4xl font-bold text-pink-500">
                That's okay 😊
              </h1>

              <img
                src={calmGif}
                className="mx-auto mt-8 w-60 rounded-2xl"
                alt=""
              />

              <p className="mt-6 text-lg leading-8 text-gray-600">
                I'll keep it simple.
                <br />
                Hope it still makes you smile.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Landing;
