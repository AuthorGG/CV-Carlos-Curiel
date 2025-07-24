import { useEffect, useState } from "react";
import "../assets/css/intro.css";

const Intro = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-container ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="intro-text">
        <span className="line line-es">
          ¡Hola! soy Carlos Curiel ¡bienvenid@ a mi portafolio!
        </span>
        <span className="line line-en">
          Hey there! I'm Carlos Curiel, welcome to my portfolio!
        </span>
      </h1>
    </div>
  );
};

export default Intro;
