import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- add this
import { Liquid } from "../../../components/uilayouts/liquid-gradient";

const COLORS = {
  color1: "#FF0000", // red
  color2: "#008000", // green
  color3: "#FF4C4C", // light red
  color4: "#00FF00", // bright green
  color5: "#FF6666",
  color6: "#66FF66",
  color7: "#CC0000",
  color8: "#009900",
  color9: "#FF3333",
  color10: "#33FF33",
  color11: "#AA0000",
  color12: "#00CC00",
  color13: "#FF1A1A",
  color14: "#1AFF1A",
  color15: "#FF8080",
  color16: "#00FF80",
  color17: "#FF4040",
};

const FancyButton = ({ text, icon: Icon, to }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // <-- initialize

  const handleClick = () => {
    if (to) {
      navigate(to); // <-- go to route
    }
  };

  return (
    <div className="flex justify-center">
      <div
        className="relative inline-block w-40 h-[2.7em] group dark:bg-black bg-white dark:border-white border-black border-2 rounded-lg overflow-hidden cursor-pointer"
        onClick={handleClick} // <-- navigate on click
      >
        {/* Liquid Glow Effect */}
        <div className="absolute w-[112%] h-[128%] top-[8%] left-1/2 -translate-x-1/2 filter blur-[19px] opacity-70">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Liquid isHovered={isHovered} colors={COLORS} />
          </div>
        </div>

        {/* Background Layers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[92%] h-[113%] rounded-lg bg-[#010128] filter blur-[7px]" />
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <span className="absolute inset-0 bg-black rounded-lg" />
          <Liquid isHovered={isHovered} colors={COLORS} />
        </div>

        {/* Button Content */}
        <button
          className="absolute inset-0 bg-transparent rounded-lg"
          aria-label={text}
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="flex items-center justify-center gap-2 text-lg font-semibold tracking-wide text-white group-hover:text-yellow-400">
            {Icon && <Icon className="w-5 h-5" />}
            {text}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FancyButton;
