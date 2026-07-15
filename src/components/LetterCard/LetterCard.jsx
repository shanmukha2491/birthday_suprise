import { motion } from "framer-motion";

const LetterCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-2xl rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-lg"
    >
      {children}
    </motion.div>
  );
};

export default LetterCard;
