import { motion } from "framer-motion";

const AchievementCard = ({ title }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: -2,
      }}
      className="rounded-3xl bg-gradient-to-r from-pink-400 to-purple-500 p-8 text-center text-white shadow-xl"
    >
      <h2 className="text-xl font-bold">{title}</h2>
    </motion.div>
  );
};

export default AchievementCard;
