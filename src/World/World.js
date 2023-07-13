import { createCamera } from "./components/camera.js";
import { createImage, createWall, createText } from "./components/objects.js";
import { createLights, createSpotlight } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Vector2 } from "three";
import GUI from 'lil-gui'

let scene;
let camera;
let renderer;
let cameraCenter = new Vector2();
let cameraHorzLimit = 35;
let cameraVertLimit = 2;
let mouse = new Vector2();

class World {
  constructor(container) {
    camera = createCamera();
    cameraCenter.x = camera.position.x;
    cameraCenter.y = camera.position.y;
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const wall = createWall();
    const ambientLight = createLights();
    const {
      spotLightMiddle,
      spotLightRight,
      spotLightLeft,
      spotLightText,
      spotHelper,
      spotHelperRight,
      spotHelperLeft,
      spotHelperText,
    } = createSpotlight();
    scene.add(wall, ambientLight);
    scene.add(spotLightMiddle, spotLightRight, spotLightLeft, spotLightText);
    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  async init() {
    const image = await createImage("assets/images/img1.jpeg", 0, false);
    const image2 = await createImage("assets/images/img2.jpeg", 10, false);
    const image3 = await createImage("assets/images/img3.jpeg", 20, true);
    const image4 = await createImage("assets/images/img4.jpeg", 30, false);
    const image5 = await createImage("assets/images/img5.jpeg", 40, false);
    const image6 = await createImage("assets/images/img6.jpeg", -10, false);
    const image7 = await createImage("assets/images/img7.jpeg", -20, true);
    const image8 = await createImage("assets/images/img8.jpeg", -30, false);
    const image9 = await createImage("assets/images/img9.jpeg", -40, false);
    scene.add(
      image,
      image2,
      image3,
      image4,
      image5,
      image5,
      image6,
      image7,
      image8,
      image9
    );

    const text = await createText();

    scene.add(text);

    document.addEventListener("mousemove", this.onDocumentMouseMove, false);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  animate() {
    this.updateCamera();
    requestAnimationFrame(this.animate.bind(this));
    renderer.render(scene, camera);
  }

  updateCamera() {
    camera.position.x = cameraCenter.x + mouse.x * cameraHorzLimit;
    camera.position.y = cameraCenter.y + mouse.y * cameraVertLimit;
  }

  onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
}

export { World };
