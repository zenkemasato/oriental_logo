import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const canvas = document.getElementById('canvas');

// フォントローダー
const fontLoader = new FontLoader();
const font = await fontLoader.loadAsync(`/fonts/droid_sans_mono_regular.typeface.json`);

// シーン
const scene = new THREE.Scene();

// camera 
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z =0;
// camera.position.z =36;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
renderer.setSize(innerWidth,innerHeight);

// O　のモデリング
const oGeometry = new THREE.RingGeometry( 12, 15, 100 );
const oMaterial = new THREE.MeshBasicMaterial( { color: 0x000080, side: THREE.DoubleSide } );
const ring = new THREE.Mesh( oGeometry, oMaterial );
scene.add( ring );

// Sのモデリング
const textS = new THREE.Mesh(
  new TextGeometry("S", {
    font: font, // フォントを指定 (FontLoaderで読み込んだjson形式のフォント)
    size: 1635,   // 文字のサイズを指定
    height: 1,  // 文字の厚さを指定
  }),
  new THREE.MeshBasicMaterial({
    color: 0x000080, // 文字の色
  })
);
textS.position.set(-7, -7.7, 14); // Meshの位置を設定
textS.scale.set(0.01, 0.01, 0.01); // Meshの拡大縮小設定
scene.add(textS);

// クロスのモデリング

const geometryOne = new THREE.BoxGeometry( 1, 35, 1 );
const materialOne = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const cubeOne = new THREE.Mesh( geometryOne, materialOne );
cubeOne.rotation.z += Math.PI/4;
cubeOne.position.x-=710;
cubeOne.position.y+=710;
scene.add( cubeOne );

const geometryTwe = new THREE.BoxGeometry( 0.5, 25, 1 );
const materialTwe = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const cubeTwe = new THREE.Mesh( geometryTwe, materialTwe );
cubeTwe.rotation.z -= Math.PI/4;
cubeTwe.position.x +=802;
cubeTwe.position.y +=802;
cubeTwe.position.z +=18;
scene.add( cubeTwe );

// オリエンタル警備の挿入

// テキストメッシュ
const textMesh = new THREE.Mesh(
  new TextGeometry("ORIENTAL SECURITY PROTECTION", {
    font: font, // フォントを指定 (FontLoaderで読み込んだjson形式のフォント)
    size: 350,   // 文字のサイズを指定
    height: 5,  // 文字の厚さを指定
  }),
  new THREE.MeshBasicMaterial({
    color: 0x000080, // 文字の色
  })
);
textMesh.position.set(-42, -705, 0);   // Meshの位置を設定
textMesh.scale.set(0.01, 0.01, 0.01); // Meshの拡大縮小設定
scene.add(textMesh);

// アニメーション制御
let time = 1;
let move = 1;
function animate() {
  if (time < 1440) {
    time++;
    requestAnimationFrame(animate);
    camera.position.z += 0.1,
    renderer.render(scene,camera);
  };
};

function animationY() {
  if (time < 1780) {
    time++;
    requestAnimationFrame(animationY);
    cubeOne.position.x+=1.5,
    cubeOne.position.y-=1.5,
    renderer.render(scene,camera);
  };
};

function animationX() {
  if(time < 1900){
    time++;
    requestAnimationFrame(animationX);
    cubeTwe.position.x-=1.5,
    cubeTwe.position.y-=1.5,
    renderer.render(scene,camera);
  };
};

function animationZ() {
  if (time<2050) {
    time ++;
    requestAnimationFrame(animationZ);
      textMesh.position.y+=1,
      renderer.render(scene,camera);
  }
};

/* ウィンドウ変更時にサイズを維持する処理 */
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

$(function() {
  $(".first-wrap").on("click", function() {//１．クリックしたときに
    $(".first-wrap").animate({
     
    });
  });
});

window.addEventListener("resize", onWindowResize);

animate();
animationX();
animationY();
animationZ();
