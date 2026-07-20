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
          Just one last thing I wanted to tell you.
        </motion.p>

        {/* Letter */}

        <div className="mt-12 w-full max-w-3xl">
          <LetterCard>
            <div className="space-y-6 text-lg leading-9 text-gray-700">
              <p className="text-xl font-semibold">Dear Dakshitha,</p>

              <p>
                If you've made it this far... thank you. Not just for going
                through this little birthday surprise, but for being someone who
                has unknowingly made my days a little brighter.
              </p>

              <p>
                I don't think I've ever properly said this, but I'm genuinely
                grateful that our paths crossed. Out of all the people in the
                world, somehow we ended up meeting, and I'm really happy we did.
              </p>

              <p>
                I honestly enjoy every moment we spend together. Whether it's
                our long calls, watching movies, talking about random things,
                sharing memes, debating over the silliest topics, or just
                sitting there in comfortable silence... they've become some of
                my favorite moments.
              </p>

              <p>
                Even though we're miles apart and haven't really spent much time
                together in person, I already feel so connected to you. It's a
                strange feeling, but one that makes me smile every time I think
                about it.
              </p>

              <p>
                Sometimes I catch myself wondering... what if I were actually
                there with you? Would we laugh even more? Would movie nights be
                different? Would we randomly go out for food because neither of
                us wanted to cook? Would we end up walking around with no real
                destination, just enjoying each other's company?
              </p>

              <p>
                But then I realize... it's not really about the fun itself. It's
                about all the little things that come with a genuine connection.
                The occasional small fights that we'd eventually laugh about.
                Taking turns treating each other to food. Being there during the
                good days and the not-so-good ones. Making ordinary moments feel
                special simply because of who you're spending them with.
              </p>

              <p>
                That's something I've always admired about you too. You're
                incredibly genuine. You're kind, thoughtful, self-aware, and
                never afraid to admit when you're wrong. Those qualities are
                honestly rare, and they're a big part of why I respect you so
                much.
              </p>

              <p>
                And despite all that maturity, you still get excited over the
                smallest things. I really hope life never changes that part of
                you because it's one of the most beautiful things about you.
              </p>

              <p>
                Whether you realize it or not, you've become someone I genuinely
                look forward to talking to. Thank you for every conversation,
                every laugh, every movie, every random discussion, and every
                memory we've made so far.
              </p>

              <p className="text-center text-xl font-semibold text-pink-500">
                Here's to creating many more memories together... hopefully some
                of them in person. 🤍
              </p>

              <p className="text-center text-2xl">Happy Birthday.</p>

              <p className="text-right italic">
                With lots of warmth,
                <br />
                Shanmukha
              </p>
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
