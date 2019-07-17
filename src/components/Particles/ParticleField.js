import React from "react";
import ParticleField from "react-particles-webgl";
import logo from "../../logo.svg";

export default props => {
  const snowConfig = {
    showCube: false,
    dimension: "3D",
    velocity: 1.2,
    boundaryType: "passthru",
    antialias: false,
    direction: {
      xMin: -0.6,
      xMax: 0.3,
      yMin: -1,
      yMax: -0.6,
      zMin: -0.6,
      zMax: 0.3
    },
    lines: {
      colorMode: "rainbow",
      color: "#351CCB",
      transparency: 0.9,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 150,
      visible: false
    },
    particles: {
      colorMode: "solid",
      color: "#000",
      transparency: 0.9,
      shape: "circle",
      boundingBox: "canvas",
      count: 2500,
      minSize: 1,
      maxSize: 25,
      visible: true
    },
    cameraControls: {
      enabled: true,
      enableDamping: true,
      dampingFactor: 0.2,
      enableZoom: true,
      autoRotate: false,
      autoRotateSpeed: 0.3,
      resetCameraFlag: true
    }
  };

  const triangleConfig = {
    showCube: false,
    dimension: "3D",
    velocity: 2,
    boundaryType: "bounce",
    antialias: true,
    direction: {
      xMin: -1,
      xMax: 1,
      yMin: -1,
      yMax: 1,
      zMin: -1,
      zMax: 1
    },
    lines: {
      colorMode: "solid",
      color: "#ffffff",
      transparency: 0.9,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 150,
      visible: true
    },
    particles: {
      colorMode: "rainbow",
      color: "#ffffff",
      transparency: 0.9,
      shape: "square",
      boundingBox: "canvas",
      count: 500,
      minSize: 10,
      maxSize: 75,
      visible: false,
      backgroundColor: "#ccc"
    },

    cameraControls: {
      enabled: true,
      enableDamping: true,
      dampingFactor: 0.2,
      enableZoom: true,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      resetCameraFlag: false
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    >
      <ParticleField config={props.snow ? snowConfig : triangleConfig} />
    </div>
  );
};
