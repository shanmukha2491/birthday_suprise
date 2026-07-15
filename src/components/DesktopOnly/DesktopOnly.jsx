import desktopGif from "../../assets/gifs/cat_specs.gif";

const DesktopOnly = ({ children }) => {
  return (
    <>
      {/* Mobile & Tablet */}

      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-100 px-8 text-center lg:hidden">
        <img src={desktopGif} alt="Desktop Only" className="w-72" />

        <h1 className="mt-8 text-3xl font-bold text-pink-500">
          Almost there! 💻
        </h1>

        <p className="mt-5 max-w-md text-lg leading-8 text-gray-600">
          I made this little birthday surprise especially for a bigger screen.
          Please open it on a laptop or desktop for the best experience.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
          <p className="text-lg font-semibold">🎵 One more thing...</p>

          <p className="mt-3 text-gray-600">
            Turn your volume on before opening it. The music is part of the
            surprise. 🎧
          </p>
        </div>
      </div>

      {/* Desktop */}

      <div className="hidden lg:block">{children}</div>
    </>
  );
};

export default DesktopOnly;
