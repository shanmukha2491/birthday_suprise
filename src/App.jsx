import AppRouter from "./router/AppRouter";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import DesktopOnly from "./components/DesktopOnly/DesktopOnly";

function App() {
  return (
    <DesktopOnly>
      <div className="min-h-screen overflow-x-hidden bg-pink-50">
        <ScrollToTop />
        <MusicPlayer />
        <AppRouter />
      </div>
    </DesktopOnly>
  );
}

export default App;
