import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//position
// mesh.position.z = 1
// mesh.position.x = 0.7
// mesh.position.y = -0.6
mesh.position.set(0.7, -0.6, 1)

//scale
// mesh.scale.x = 2
// mesh.scale.z = 0.5
// mesh.scale.y = 0.5

mesh.scale.set(2, 0.5, 0.5)

// //axesHelper
// const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)

//rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

camera.lookAt(mesh.position)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();
function animate() {

    requestAnimationFrame( animate );

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render( scene, camera );

} animate();

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)