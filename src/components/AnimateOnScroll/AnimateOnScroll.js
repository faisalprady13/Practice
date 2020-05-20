import React from "react";
import Title from "./Title/Title";
import Zoom from "react-reveal/Zoom";

const AnimateOnScroll = () => {
  return (
    <div>
      <p>FIXED BACKGROUND</p>
      <Zoom>
        <Title name="food-background" />
      </Zoom>
      <Title name="color-background" />
      <Title name="car-background" />
    </div>
  );
};

export default AnimateOnScroll;
