// src/components/AnimatedIcon.jsx
import React from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";

/**
 * AnimatedIcon
 * Reproduce un archivo Lottie JSON en bucle o con autoplay según props.
 *
 * Props:
 *  - animationData: el objeto JSON importado o la ruta relativa al JSON.
 *  - width: ancho (en px, %, rem, etc.).
 *  - height: alto (en px, %, rem, etc.).
 *  - loop: boolean (por defecto true).
 *  - autoplay: boolean (por defecto true).
 *  - speed: número (por defecto 1).
 */
const AnimatedIcon = ({
  animationData,
  width = "80px",
  height = "80px",
  loop = true,
  autoplay = true,
  speed = 1,
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
        speed={speed}
      />
    </div>
  );
};

AnimatedIcon.propTypes = {
  animationData: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  speed: PropTypes.number,
};

export default AnimatedIcon;
