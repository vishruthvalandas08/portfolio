// import React, { Suspense, useRef, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import "../../index.css";
// import * as THREE from "three";
// const getSettings = (width, zoomedIn) => {
//   if (width <= 500) {
//     return { position: [-1, -2, -1.5], scale: 1.5 };
//   } else if (width <= 768) {
//     return { position: [0, -1.5, -1], scale: 2.2 };
//   } else if (width <= 1024) {
//     return { position: [-1.5, -1, 0], scale: 2 };
//   } else {
//     return {
//       position: zoomedIn ? [-3, -0.5, 1] : [-3, -2, 1],
//       scale: zoomedIn ? 2.0 : 3,
//     };
//   }
// };

// const Robot = ({ width }) => {
//   const computer = useGLTF("./future/scene.gltf");
//   const meshRef = useRef();
//   const [zoomedIn, setZoomedIn] = useState(false);
//   const { position, scale } = getSettings(width, zoomedIn);

//   // Gentle oscillation on Y-axis
//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     // amplitude = 0.3 rad ≈ ±17°
//     meshRef.current.rotation.y = Math.sin(t * 0.5) * 1.5;
//   });

//   return (
//     <mesh onClick={() => setZoomedIn((z) => !z)}>
//       {/* lights */}
//       <hemisphereLight intensity={0.5} groundColor="black" />
//       <spotLight
//         position={[10, 10, 10]}
//         angle={0.3}
//         penumbra={1}
//         intensity={1.5}
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//       />
//       <pointLight position={[0, 5, 5]} intensity={1.2} />

//       {/* model */}
//       <primitive
//         ref={meshRef}
//         object={computer.scene}
//         scale={scale}
//         position={position}
//         // base X/Z rotation left at zero; only Y oscillates
//         rotation={[0, 0, 0]}
//       />
//     </mesh>
//   );
// };

// const RobotCanvas = () => {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const onResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [0, 2, 10], fov: 35 }}
//       gl={{ preserveDrawingBuffer: true }}
//       className="canvas"
    
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           minPolarAngle={Math.PI / 10}    // vertical down limit
//           maxPolarAngle={Math.PI / 2.2}   // vertical up limit
//           minAzimuthAngle={-0.52}         // ~-30° horizontal
//           maxAzimuthAngle={0.52}          // ~+30° horizontal
//           autoRotate={false}            // disable auto-spin
          
//         />
//         <Robot width={width} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default RobotCanvas;

// components/RobotCanvas.jsx

// components/RobotCanvas.jsx

// components/RobotCanvas.jsx

// components/RobotCanvas.jsx

// components/RobotCanvas.jsx

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import "../../index.css";

const getSettings = (width, zoomedIn) => {
  if (width <= 500) {
    return { position: [-1, -2, -1.5], scale: 1.5 };
  } else if (width <= 768) {
    return { position: [0, -1.5, -1], scale: 2.2 };
  } else if (width <= 1024) {
    return { position: [-1.5, -1, 0], scale: 2 };
  } else {
    return {
      position: zoomedIn ? [-3, -0.5, 1] : [-3, -2, 1],
      scale: zoomedIn ? 2.0 : 3,
    };
  }
};

const Robot = ({ width, pointer }) => {
  const { scene } = useGLTF("./future/scene.gltf");
  const meshRef = useRef();
  const [zoomedIn, setZoomedIn] = useState(false);
  const { position: basePos, scale } = getSettings(width, zoomedIn);

  // max rotation (±22.5°)
  const maxRot = Math.PI / 8;

  useFrame(() => {
    // rotate based on pointer.x/y in [-1,1]
    meshRef.current.rotation.x = pointer.y * maxRot;
    meshRef.current.rotation.y = pointer.x * maxRot;
  });

  return (
    <mesh onClick={() => setZoomedIn((z) => !z)}>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[0, 5, 5]} intensity={1.2} />

      <primitive
        ref={meshRef}
        object={scene}
        scale={scale}
        position={basePos}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // keep track of window size
    const handleResize = () => setWidth(window.innerWidth);

    // normalize mouse position to [-1, 1] range
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      setPointer({ x, y });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2, 10], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      className="canvas"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Robot width={width} pointer={pointer} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;

