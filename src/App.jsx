import AppRouter from "./router/AppRouter";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import DesktopOnly from "./components/DesktopOnly/DesktopOnly";
import { useRef } from "react";

function App() {
  const musicRef = useRef(null);

  return (
    <DesktopOnly>
      <div className="min-h-screen select-none overflow-x-hidden bg-pink-50">
        <ScrollToTop />
        <MusicPlayer ref={musicRef} />
        <AppRouter musicRef={musicRef} />
      </div>
    </DesktopOnly>
  );
}

export default App;
