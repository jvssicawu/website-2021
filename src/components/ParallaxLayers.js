import React, { useEffect } from 'react';
import Parallax from 'parallax-js';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
`;

const Layer = styled.div`
  margin: auto;
  text-align: center;
`;

const ParallaxLayers = () => {
  useEffect(() => {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, { relativeInput: true });
    parallaxInstance.scalar(5.0, 5.0);
  });
  return (
    <ParallaxContainer id="scene">
      <Layer data-depth="0.1">
        <img src="assets/parallax/Layer3.svg" alt="layer3" />
      </Layer>
      <Layer data-depth="0.4">
        <img src="assets/parallax/Layer4.svg" alt="layer4" />
        <img src="assets/parallax/Layer5.svg" alt="layer5" />
        <img src="assets/parallax/Layer2.svg" alt="layer2" />
      </Layer>
      <Layer data-depth="0.8">
        <img src="assets/parallax/Layer3.svg" alt="layer3" />
      </Layer>
    </ParallaxContainer>
  );
};

export default ParallaxLayers;
