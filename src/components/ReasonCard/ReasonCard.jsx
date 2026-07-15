import { motion } from "framer-motion";

const ReasonCard = ({ emoji, title, text }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
      }}
      className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* Emoji */}

      <div className="text-5xl">{emoji}</div>

      {/* Title */}

      <h2 className="mt-6 min-h-[72px] text-3xl font-bold leading-tight text-gray-800">
        {title}
      </h2>

      {/* Description */}

      <p className="mt-5 flex-1 text-lg leading-8 text-gray-600">{text}</p>
    </motion.div>
  );
};

export default ReasonCard;
