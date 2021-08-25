import {
  BoxBufferGeometry,
  DirectionalLight,
  Mesh,
  MeshLambertMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

import "./style.css"; // Import the stylesheet for webpack

let camera, camera2, scene, renderer, mesh, mesh2;

init();
init2();

function init() {
  // camera
  camera = new PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    100,
    1000
  );
  camera.position.z = 500;
  camera.position.y = 100;
  camera.position.x = 100;

  // Create scene
  scene = new Scene();

  // Cube
  const geometry = new BoxBufferGeometry(100, 100, 100);
  const material = new MeshLambertMaterial({ color: 0xff0000 });
  mesh = new Mesh(geometry, material);
  scene.add(mesh);


  // Lights
  const directionalLight = new DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 1);
  scene.add(directionalLight);

  // Renderer
  renderer = new WebGLRenderer({
    antialias: true,
    canvas: document.getElementById("canvas"),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  window.addEventListener("resize", onWindowResize, false);

  animate();
}

function init2() {
  // camera
  camera2 = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      100,
      1000
  );
  camera2.position.z = 500;
  camera2.position.y = 200;
  camera2.position.x = 200;

  // Create scene
  scene = new Scene();

  // Cube
  const geometry2 = new BoxBufferGeometry(100, 100, 100);
  const material2 = new MeshLambertMaterial({ color: 0xff0000 });
  mesh2 = new Mesh(geometry2, material2);
  scene.add(mesh);


  // Lights
  const directionalLight2 = new DirectionalLight(0xffffff, 0.5);
  directionalLight2.position.set(0, 1, 1);
  scene.add(directionalLight2);

  // Renderer
  renderer = new WebGLRenderer({
    antialias: true,
    canvas: document.getElementById("canvas"),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  window.addEventListener("resize", onWindowResize2, false);

  animate2();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onWindowResize2() {
  camera2.aspect = window.innerWidth / window.innerHeight;
  camera2.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // Auto rotate cube
  mesh.rotation.x += 0;
  mesh.rotation.y += 0.01;
}

function animate2() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera2);

  // Auto rotate cube
  mesh.rotation.x += 0;
  mesh.rotation.y += 0.01;
}