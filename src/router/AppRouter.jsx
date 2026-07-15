import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Birthday from "../pages/Birthday";
import Wrapped from "../pages/Wrapped";
import Memes from "../pages/Memes";
import Reasons from "../pages/Reasons";
import Feelings from "../pages/Feelings";
import Finale from "../pages/Finale";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/birthday" element={<Birthday />} />

      <Route path="/wrapped" element={<Wrapped />} />

      <Route path="/memes" element={<Memes />} />

      <Route path="/reasons" element={<Reasons />} />

      <Route path="/feelings" element={<Feelings />} />

      <Route path="/finale" element={<Finale />} />
    </Routes>
  );
};

export default AppRouter;
