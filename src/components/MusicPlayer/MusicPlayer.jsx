import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import music from "../../assets/music/background.mp3";

const MusicPlayer = forwardRef((props, ref) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    playMusic: async () => {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.log("Unable to play music");
      }
    },
  }));

  const toggleMusic = async () => {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.log("Unable to play music");
      }
    }
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
});

export default MusicPlayer;
