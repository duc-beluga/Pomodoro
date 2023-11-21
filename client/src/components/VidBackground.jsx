import React from "react";
import bgVideo from "../assets/background.mp4";

const VidBackground = () => {
  return (
    <video
      src={bgVideo}
      type="video/mp4"
      loop
      controls={false}
      muted
      autoPlay
      alt="bg-image"
      className="w-full h-full object-cover"
    />
  );
};

export default VidBackground;
