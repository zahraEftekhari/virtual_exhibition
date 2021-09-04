import * as THREE from "three";
import "./style.css"; // Import the stylesheet for webpack

document.getElementById("view1").requestFullscreen();
function main() {
  const canvas = document.querySelector('#view1');
  const shape1 = document.querySelector('#shape1');
  const shape2 = document.querySelector('#shape2');
  const shape3 = document.querySelector('#shape3');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.zoom = 0.2;
  camera.position.set(0,10,20);
  

  function actionsEvent(e){
    e = e || window.event;
    let location = camera.sphereRadius;
    console.log(location);
    if(e.keyCode == "38"){
      z -= 0.1;
      camera.position.set(x, y, z);
    }
    else if(e.keyCode = "40"){
      z += 0.1;
      camera.position.set(x, y, z);
    }
    else if(e.keyCode = "37"){
      x -= 0.1;
      camera.position.set(x, y, z);
    }
    else if(e.keyCode = "39"){
      x += 0.1;
      camera.position.set(x, y, z);
    }
  }

  const scene = new THREE.Scene();

  {
    const color = 0xc3ecef;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({color});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  const cubes = [
    makeInstance(geometry, 0xc3ecef,  0),
    makeInstance(geometry, 0xc3ecef, -2),
    makeInstance(geometry, 0xc3ecef,  2),
  ];

  function render(time) {
    time *= 0.001;  // convert time to seconds

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

}

main();
