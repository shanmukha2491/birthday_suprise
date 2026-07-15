import AchievementCard from "../AchievementCard/AchievementCard";
import { achievements } from "../../data/wrapped";

const Achievements = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl font-bold">
        If Life Had Achievements 🏆
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {achievements.map((item, index) => (
          <AchievementCard key={index} title={item} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
