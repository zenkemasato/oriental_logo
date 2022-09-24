import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Scene } from "three";

const canvas = document.getElementById('canvas');

// フォントローダー
const fontLoader = new FontLoader();
const font = await fontLoader.loadAsync(`/fonts/droid_sans_mono_regular.typeface.json`);

// シーン
const scene = new THREE.Scene();

// camera 
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z =40;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({canvas, alpha:true});
renderer.setSize(innerWidth,innerHeight);

// O　のモデリング
const oGeometry = new THREE.RingGeometry( 12, 15, 100 );
const oMaterial = new THREE.MeshBasicMaterial( { color: 0x000080, side: THREE.DoubleSide } );
const ring = new THREE.Mesh( oGeometry, oMaterial );
ring.position.z+=40;
scene.add( ring );

const oGeometryTwe = new THREE.RingGeometry( 12, 15, 100 );
const oMaterialTwe = new THREE.MeshBasicMaterial( { color: 0x000080, side: THREE.DoubleSide } );
const ringTwe = new THREE.Mesh( oGeometryTwe, oMaterialTwe );
ringTwe.position.z+=40;
scene.add( ringTwe );

// Sのモデリング
const sText = new THREE.Mesh(
  new TextGeometry("S", {
    font: font, // フォントを指定 (FontLoaderで読み込んだjson形式のフォント)
    size: 2600,   // 文字のサイズを指定
    height: 1,  // 文字の厚さを指定
  }),
  new THREE.MeshBasicMaterial({
    color: 0x000080, // 文字の色
  })
);
sText.position.set(-11, -12.3, 41); // Meshの位置を設定
sText.scale.set(0.01, 0.01, 0.01); // Meshの拡大縮小設定
scene.add(sText);

const sTextTwe = new THREE.Mesh(
  new TextGeometry("S", {
    font: font, // フォントを指定 (FontLoaderで読み込んだjson形式のフォント)
    size: 2600,   // 文字のサイズを指定
    height: 1,  // 文字の厚さを指定
  }),
  new THREE.MeshBasicMaterial({
    color: 0x000080, // 文字の色
  })
);
sTextTwe.position.set(-11, -12.3, 41); // Meshの位置を設定
sTextTwe.scale.set(0.01, 0.01, 0.01); // Meshの拡大縮小設定
scene.add(sTextTwe);

// クロスのモデリング

const geometryOne = new THREE.BoxGeometry( 1, 35, 1 );
const materialOne = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const cubeOne = new THREE.Mesh( geometryOne, materialOne );
cubeOne.rotation.z += Math.PI/4;
cubeOne.position.set(-60,60,0);
scene.add( cubeOne );

const geometryThree = new THREE.BoxGeometry( 1, 35, 1 );
const materialThree = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const cubeThree = new THREE.Mesh( geometryThree, materialThree );
cubeThree.rotation.z -= Math.PI/4;
cubeThree.position.set(60,60,2);
scene.add( cubeThree );

// 消すための棒
let geometryFour = new THREE.BoxGeometry( 2, 100, 1 );
let materialFour = new THREE.MeshBasicMaterial( {color: 0x000000} );
let cubeFour = new THREE.Mesh( geometryFour, materialFour );
cubeFour.rotation.z-=Math.PI/4
cubeFour.position.set(-100,-100,3);
scene.add(cubeFour);

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
  textMesh.position.set(-42, -75, 0);   // Meshの位置を設定
  textMesh.scale.set(0.01, 0.01, 0.01); // Meshの拡大縮小設定
  scene.add(textMesh);

const textMeshTwe = new THREE.Mesh(
  new TextGeometry("ORIENTAL SECURITY PROTECTION", {
    font: font, // フォントを指定 (FontLoaderで読み込んだjson形式のフォント)
    size: 350,   // 文字のサイズを指定
    height: 5,  // 文字の厚さを指定
  }),
  new THREE.MeshBasicMaterial({
    color: 0x000080, // 文字の色
  })
  );
  textMeshTwe.position.set(-42, -75, 0);   // Meshの位置を設定
  textMeshTwe.scale.set(0.01, 0.01, 0.01); // Meshの拡大縮小設定
  scene.add(textMeshTwe);
  
  // アニメーション制御
  let time = 1;
  
  function animationA() {
    time++;
    if (time<=80) {
      requestAnimationFrame(animationA);
      ring.position.z -= 0.5;
      ringTwe.position.z -= 0.5;
      renderer.render(scene,camera);
    };
    if (80<time && time<=160) {
      requestAnimationFrame(animationA);
      sText.position.z-=0.5;
      sTextTwe.position.z-=0.5;
      renderer.render(scene,camera);
    };
    if (160<time && time<=220) {
      requestAnimationFrame(animationA);
      cubeOne.position.x+=1;
      cubeOne.position.y-=1;
      renderer.render(scene,camera);
    };
    if (220<time && time<=280) {
      requestAnimationFrame(animationA);
      cubeThree.position.x-=1;
      cubeThree.position.y-=1;
      renderer.render(scene,camera);
    };
    if (280<time && time<=330) {
      requestAnimationFrame(animationA);
      textMesh.position.y+=1;
      textMeshTwe.position.y+=1;
      renderer.render(scene,camera);
    };
    if (330<time && time<=430) {
      requestAnimationFrame(animationA);
      cubeFour.position.x+=1;
      cubeFour.position.y+=1;
      renderer.render(scene,camera);
    };
    if (430<time && time<=440) {
      requestAnimationFrame(animationA);
      renderer.render(scene,camera);
    };
    if (440<time && time<=630) {
      requestAnimationFrame(animationA);
      for (let i = 440; i < time ; i++) {
        geometryFour = new THREE.BoxGeometry(i-439,150,1);
        cubeFour = new THREE.Mesh( geometryFour, materialFour );
        cubeFour.rotation.z-=Math.PI/4
        cubeFour.position.z +=3;
        scene.add(cubeFour);
      }
      ring.position.x-=0.75;
      ringTwe.position.x+=0.75;
      sText.position.x -=0.75;
      sTextTwe.position.x +=0.75;
      cubeOne.position.x-=0.75;
      textMesh.position.x-=0.75;
      textMeshTwe.position.x+=0.75;
      renderer.render(scene,camera);
    }
   
   
  };
  
  /* ウィンドウ変更時にサイズを維持する処理 */
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  
  onWindowResize();
  // renderer.render(scene,camera);
  animationA();
  
