import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import '../../index.css'

const Computers = ({ onClick }) => {
  const computer = useGLTF("./future/scene.gltf");
  const meshRef = useRef();
  const [zoomedIn, setZoomedIn] = useState(false);
  const handleClick = () => {
    console.log("hello")
    setZoomedIn((prev) => !prev); // Toggle zoom on click
  };

  return (
    <mesh >
      {/* Lights */}
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, 5, 5]} intensity={1.2} />

      {/* 3D Model */}
      <primitive
        className={`model ${zoomedIn ? "model-zoomed" : "model-default"}`}
        object={computer.scene}
        scale={zoomedIn?2.5:4}
        // zoomedIn?[0, -0.9,0]:
        position={zoomedIn?[-3, -0.5,0]:[-3,-2.5,0]} // Initial position
        rotation={[-0.02, 0.7, 0]}
        onClick={handleClick}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const[ismobile,setIsMobile]=useState(false);
  
  useEffect(()=>{
    const mediaQuery=window.matchMedia(
      '(max-width:500px)');
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange=(event)=>{
        setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change',handleMediaQueryChange);
      return()=>{
        mediaQuery.removeEventListener('change',handleMediaQueryChange)
      }
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 2, 10], // Zoom in or out based on state
        fov: 35,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI/10 }
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
