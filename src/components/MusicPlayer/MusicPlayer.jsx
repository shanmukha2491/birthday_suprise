import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import music from "../../assets/music/background.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const playMusic = async () => {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked");
      }
    };

    playMusic();
  }, []);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-pink-500 p-4 text-white shadow-xl"
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>
    </>
  );
};

export default MusicPlayer;
