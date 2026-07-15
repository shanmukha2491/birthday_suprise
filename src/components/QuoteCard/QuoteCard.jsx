import { motion } from "framer-motion";

const QuoteCard = ({ emoji, title, text }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,

        rotate: -2,
      }}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      <div className="text-5xl">{emoji}</div>

      <h2 className="mt-5 text-2xl font-bold">{title}</h2>

      <p className="mt-4 text-gray-600">{text}</p>
    </motion.div>
  );
};

export default QuoteCard;
