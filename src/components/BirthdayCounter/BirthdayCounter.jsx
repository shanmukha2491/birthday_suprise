import { motion } from "framer-motion";

const BirthdayCounter = () => {
  const cards = [
    {
      title: "Age",

      value: "22",
    },

    {
      title: "Friendship",

      value: "999%",
    },

    {
      title: "Chaos",

      value: "∞",
    },

    {
      title: "Mood",

      value: "🥳",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          className="rounded-3xl bg-white p-8 shadow-xl text-center"
        >
          <h2 className="text-gray-500">{card.title}</h2>

          <h1 className="mt-3 text-5xl font-black text-pink-500">
            {card.value}
          </h1>
        </motion.div>
      ))}
    </div>
  );
};

export default BirthdayCounter;
