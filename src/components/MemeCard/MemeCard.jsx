import { motion } from "framer-motion";

const MemeCard = ({ image, caption }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.04,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="group h-full overflow-hidden rounded-3xl border border-grey-100 bg-white shadow-lg"
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={image}
          alt={caption}
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Caption */}

      <div className="flex min-h-[110px] items-center justify-center p-6">
        <p className="text-center text-lg leading-7 text-gray-700">{caption}</p>
      </div>
    </motion.div>
  );
};

export default MemeCard;
