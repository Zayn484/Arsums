import React from "react";
import WaterWave from "react-water-wave";
import image from "../../assets/demo.jpg";

const waterWave = props => (
  <WaterWave imageUrl={image}>{methods => props.children}</WaterWave>
);

export default waterWave;
