import { motion } from "framer-motion";

const MemeCard = ({ image, caption }) => {
  return (
    <div
      className="group h-[420px] w-full cursor-pointer"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}

        <div
          className="absolute inset-0 overflow-hidden rounded-3xl bg-white shadow-xl"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <img src={image} alt="" className="h-full w-full object-cover" />

          <div className="absolute bottom-5 left-5 rounded-full bg-white/80 px-4 py-2 backdrop-blur">
            😂 Meme Card
          </div>
        </div>

        {/* BACK */}

        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-pink-400 to-purple-500 p-8 text-center text-white shadow-xl"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="mt-6 leading-8 text-lg">{caption}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default MemeCard;
