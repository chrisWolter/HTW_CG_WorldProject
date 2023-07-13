import {
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  BoxGeometry,
  PlaneGeometry,
  TextureLoader,
} from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

async function createImage(url, x, vertical) {
  const loader = new TextureLoader();
  const material = new MeshBasicMaterial({ map: await loader.loadAsync(url) });
  let geometry;
  if (vertical) {
    geometry = new BoxGeometry(5, 5 * 1.523, 0.1);
  } else {
    geometry = new BoxGeometry(5 * 1.523, 5, 0.1);
  }

  const mesh = new Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.position.set(x, 5, -5);
  return mesh;
}

function createWall() {
  const material = new MeshPhongMaterial({
    color: 0x323232,
    dithering: true,
    shininess: 10,
  });
  const geometry = new PlaneGeometry(200, 100);
  const mesh = new Mesh(geometry, material);
  mesh.receiveShadow = true;
  mesh.position.set(0, -10, -5.5);
  return mesh;
}

async function createText() {
  const loader = new FontLoader();
  const font = await loader.loadAsync(
    "assets/fonts/helvetiker_bold.typeface.json"
  );

  const textGeometry = new TextGeometry("Iceland on 35mm Film", {
    font: font,
    size: 400,
    height: 2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelOffset: 0,
    bevelSegments: 5,
  });

  const material = new MeshPhongMaterial({
    color: 0x86d6d8,
    dithering: true,
    shininess: 120,
  });
  const mesh = new Mesh(textGeometry, material);
  mesh.geometry.center();
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  mesh.position.set(0, 10, -5);
  mesh.scale.set(0.001, 0.001, 0.001);

  return mesh;
}

export { createImage, createWall, createText };
