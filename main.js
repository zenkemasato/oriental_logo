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
// camera.position.z =35;
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

// class CustomSinCurve extends THREE.Curve {

// 	constructor( scale = 1 ) {

// 		super();

// 		this.scale = scale;
// 	}

// 	getPoint( t, optionalTarget = new THREE.Vector3() ) {

// 		const tx = Math.sin( 2 * Math.PI * t );
// 		const ty = t * 3 - 1.5;
// 		const tz = 3.3;

// 		return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

// 	}

// }

// const path = new CustomSinCurve( 5 );
// const sGeometry = new THREE.TubeGeometry( path, 100, 1, 3, false );
// const sMaterial = new THREE.MeshBasicMaterial( { color: 0x000080 } );
// const tube = new THREE.Mesh( sGeometry, sMaterial );
// tube.rotation.z -= Math.PI/6;
// scene.add( tube );

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
textS.position.set(-7, -7.9, 14);   // Meshの位置を設定
textS.scale.set(0.01, 0.01, 0.01); // Meshの拡大縮小設定
scene.add(textS);


// クロスのモデリング
const geometryOne = new THREE.CapsuleGeometry( 1, 35, 1, 3 );
const materialOne = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const capsuleOne = new THREE.Mesh( geometryOne, materialOne );
capsuleOne.rotation.z += Math.PI/4;
capsuleOne.position.z+=10;
scene.add( capsuleOne );

const geometryTwe = new THREE.CapsuleGeometry( 1, 24, 1, 3 );
const materialTwe = new THREE.MeshBasicMaterial( {color: 0xffffff} );
const capsuleTwe = new THREE.Mesh( geometryTwe, materialTwe );
capsuleTwe.rotation.z -= Math.PI/4;
capsuleTwe.position.z+=18;

scene.add( capsuleTwe );

// オリエンタル警備の挿入

// テキストメッシュ
const textMesh = new THREE.Mesh(
  new TextGeometry("ORIENTAL SECURITY PROTECTION", {
    font: font, // フォントを指定 (FontLoaderで読み込んだjson形式のフォント)
    size: 350,   // 文字のサイズを指定
    height: 1,  // 文字の厚さを指定
  }),
  new THREE.MeshBasicMaterial({
    color: 0x000080, // 文字の色
  })
);
textMesh.position.set(-42, -24, 0);   // Meshの位置を設定
textMesh.scale.set(0.01, 0.01, 0.01); // Meshの拡大縮小設定
scene.add(textMesh);

// アニメーション制御
let time = 1;
function animate() {
  if (time < 360) {
    time++;
    requestAnimationFrame(animate);
    camera.position.z += 0.1,
    renderer.render(scene,camera);
  };
};

animate();


