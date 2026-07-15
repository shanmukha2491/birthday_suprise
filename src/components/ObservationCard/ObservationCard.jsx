import { motion } from "framer-motion";

const ObservationCard = ({ observation, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="rounded-3xl bg-white shadow-xl overflow-hidden"
    >
      <div className={`bg-gradient-to-r ${observation.gradient} h-2`} />

      <div className="p-8">
        <div className="text-5xl">{observation.emoji}</div>

        <h2 className="mt-5 text-2xl font-bold">{observation.title}</h2>

        <p className="mt-4 text-gray-600 leading-8">{observation.text}</p>
      </div>
    </motion.div>
  );
};

export default ObservationCard;
