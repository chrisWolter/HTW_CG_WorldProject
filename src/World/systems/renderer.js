import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.shadowMap.enabled = true;
  renderer.useLegacyLights = false;

  return renderer;
}

export { createRenderer };
