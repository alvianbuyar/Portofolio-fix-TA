const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true});
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
const scene = new THREE.Scene();
let Mesh;
let light;
let light2;

function init() {
    camera.position.set(0, 35, 0);
    renderer.setSize(canvas.height = 1260, canvas.width = 700);
    // renderer.setSize(canvas.height = 630, canvas.width = 350);
    document.body.appendChild(renderer.domElement);
}

function setLight() {
    light = new THREE.AmbientLight(0xffffff);
    light.position.set(0,7,15)
    light.intensity = 1;
    scene.add(light);
    // scene.add(new THREE.PointLightHelper(light,1,0x00ff00));

    light2 = new THREE.PointLight(0xfffff0,0.5,50);
    light.intensity = 1;
    light2.position.set(0,25,5);
    scene.add(light2);
    // scene.add(new THREE.PointLightHelper(light2,1,0x00ff00));
}

function loadGLTF() {
    let balloonLoader = new THREE.GLTFLoader();

    balloonLoader.load('./model/coffee.gltf', (gltf) => {
        Mesh = gltf.scene;
        Mesh.scale.set(2.5,2.5,2.5);
        scene.add(Mesh);
        Mesh.position.x = 0;
        Mesh.position.y = -1;
        Mesh.position.z = 0;
    });
}

let controls = new THREE.OrbitControls(camera, renderer.domElement);

function update(){
    renderer.render(scene,camera);
    requestAnimationFrame(update);
}

init();
setLight();
loadGLTF();
update();