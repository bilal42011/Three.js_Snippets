import * as THREE from "three";
import { PlaneGeometry } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const welcomeHeading = document.getElementById("welcome-note");
// welcomeHeading.innerHTML = "Welcome to Three.js Parcel Setup!";

//Renderer is a kind of like tool which will allow us to add space in window on which we can add
//animations and 3d things
const renderer = new THREE.WebGL1Renderer();

//Setting the width and height of space for rendering three.js things.
renderer.setSize(window.innerWidth, window.innerHeight);

//injecting the space inside body using canvas element
document.body.appendChild(renderer.domElement);

// We need to things to render elements on html canvas and THREE.js

//A scene is basically like a film scene in which actor and other things that we want to
//to display in camera come so we need to create scene
const scene = new THREE.Scene();

//Two types of camera , we are using perspective camera for 3d use.
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

//Adding axes helper that display three axes of graph x,y and z
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//Setting camera postion so we could see the scene, by default position is (0,0,0)
camera.position.set(0, 2, 5);
orbit.update();

//Creating box and adding it to scene
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);

//adding rotation to boxN
// box.rotation.x = 5;
// box.rotation.y = 5;

// Adding plane geometry
// const PlaneGeometry = new THREE.PlaneGeometry(30, 30);
// const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
// const plane = new THREE.Mesh(PlaneGeometry, planeMaterial);

// scene.add(plane);

function animate(time) {
  box.rotation.x = time / 1000;
  box.rotation.y = time / 1000;
  // In order to render our scene through camera we need render method of renderer
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
