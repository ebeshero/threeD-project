import * as THREE from 'three';
import './style.css';
/*import javascriptLogo from './javascript.svg'
//import viteLogo from 'public.vite.svg'*/
// import { setupCounter } from '../counter.js'
// Setup

const scene = new THREE.Scene();
const libraryTexture = new THREE.TextureLoader().load('images/Merton_College_library_hall.jpg')

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
});


const geometry = new THREE.BoxGeometry(10, 10, 10);

//set the color of the basic material in the object parameters `{}`

const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );

const cube = new THREE.Mesh( geometry, material );


cube.position.z = -15;
cube.position.x = -15;

cube.rotation.x = 2;
cube.rotation.y = .5;

const ico = new THREE.IcosahedronGeometry(10);
const icoMaterial = new THREE.MeshPhongMaterial({ color: 0x006699});
const icoMesh = new THREE.Mesh(ico, icoMaterial);



// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

scene.background = libraryTexture;
scene.add( cube );
scene.add(icoMesh);

icoMesh.position.z= -15;
icoMesh.position.x= 15;
scene.add(pointLight);
scene.add(ambientLight);

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

function animate() {
        requestAnimationFrame( animate );
        // slowly rotate the cube:
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        // rotate the icosahedron a little faster in the opposite direction:
        icoMesh.rotation.z += -0.02
        icoMesh.rotation.y += -0.01

        renderer.render( scene, camera );
}

animate();

/*document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>*/


/* setupCounter(document.querySelector('#counter')) */
        



