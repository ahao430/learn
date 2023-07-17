window.onload = function () {
  createWorld()
}

function createWorld () {
  initRender() // 渲染器
  initCamera() // 相机
  initLight() // 光源
  initObject() // 物体
  initScene() // 场景
  render()
}

var renderer
var width
var height
function initRender () {
  width = window.innerWidth
  height = window.innerHeight
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  })
  renderer.setSize(width, height)
  renderer.setClearColor('#000000', 1.0)
  renderer.setPixelRatio(window.devicePixelRatio)
  document.getElementById('retina').appendChild(renderer.domElement)
}

var camera
var origPoint = new THREE.Vector3(0,0,0)
function initCamera () {
  camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000)
  camera.position.set(200, 400, 600)
  camera.up.set(0,1,0)
  camera.lookAt(origPoint)
}

var pointLight
var ambientLight
function initLight () {
  pointLight = new THREE.PointLight(0xffffff, 1, 2000)
  pointLight.position.set(70, 112, 98)
  ambientLight = new THREE.AmbientLight(0x333333)
}

var cube
function initObject () {
  var geometry = new THREE.BoxGeometry(100, 100, 100)
  var material = new THREE.MeshLambertMaterial({ color: 0xfffffff})
  cube = new THREE.Mesh(geometry, material)
  cube.position.set(0,0,0)
}

var scene
function initScene () {
  scene = new THREE.Scene()
  scene.add(pointLight)
  scene.add(ambientLight)
  scene.add(cube)
}

function render () {
  renderer.clear()
  renderer.render(scene, camera)
  cube.rotation.x += 0.005
  cube.rotation.y += 0.005
  // cube.rotation.z += 0.005
  requestAnimationFrame(render)
}