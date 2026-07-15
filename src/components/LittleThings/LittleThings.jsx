import { motion } from "framer-motion";
import { littleThings } from "../../data/wrapped";

const LittleThings = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-20 rounded-3xl bg-white p-8 shadow-xl"
    >
      <h2 className="text-center text-3xl font-bold">
        Tiny Things I've Noticed 🌸
      </h2>

      <div className="mt-8 space-y-5">
        {littleThings.map((item, index) => (
          <p key={index} className="text-lg text-gray-700">
            {item}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default LittleThings;
