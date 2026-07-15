import ObservationCard from "../ObservationCard/ObservationCard";
import { observations } from "../../data/wrapped";

const ObservationList = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {observations.map((item, index) => (
        <ObservationCard key={item.id} observation={item} index={index} />
      ))}
    </div>
  );
};

export default ObservationList;
