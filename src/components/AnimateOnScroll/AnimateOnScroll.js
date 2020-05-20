import React from "react";
import Title from "./Title/Title";
import Zoom from "react-reveal/Zoom";

const AnimateOnScroll = () => {
  return (
    <div>
      <Zoom>
        <Title sectionTitle="food-background" />
      </Zoom>
      <Title sectionTitle="color-background" />
      <Title sectionTitle="car-background" />
    </div>
  );
};

export default AnimateOnScroll;
