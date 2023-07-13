import { AmbientLight, SpotLight, SpotLightHelper } from "three";

function createLights() {
  const ambientLight = new AmbientLight("white", 0.5);
  return ambientLight;
}

function createSpotlight() {
  const spotLightMiddle = new SpotLight("white", 400, 0, Math.PI / 4, 0.8);
  const spotLightRight = new SpotLight("white", 400, 0, Math.PI / 4, 0.8);
  const spotLightLeft = new SpotLight("white", 400, 0, Math.PI / 4, 0.8);
  const spotLightText = new SpotLight("white", 200, 0, Math.PI / 4, 1);

  spotLightMiddle.position.set(0, 10, 5);
  spotLightMiddle.target.position.set(0, 0, -5);
  spotLightMiddle.castShadow = true;

  spotLightRight.position.set(30, 10, 5);
  spotLightRight.target.position.set(30, 0, -5);
  spotLightRight.castShadow = true;

  spotLightLeft.position.set(-30, 10, 5);
  spotLightLeft.target.position.set(-30, 0, -5);
  spotLightLeft.castShadow = true;

  spotLightText.position.set(0, 10, 5);
  spotLightText.target.position.set(0, 10, -5);
  spotLightText.castShadow = true;

  const spotHelper = new SpotLightHelper(spotLightMiddle);
  const spotHelperRight = new SpotLightHelper(spotLightRight);
  const spotHelperLeft = new SpotLightHelper(spotLightLeft);
  const spotHelperText = new SpotLightHelper(spotLightText);
  return {
    spotLightMiddle,
    spotLightRight,
    spotLightLeft,
    spotLightText,
    spotHelper,
    spotHelperRight,
    spotHelperLeft,
    spotHelperText,
  };
}

export { createLights, createSpotlight };
