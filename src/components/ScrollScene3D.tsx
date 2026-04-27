import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Hook: track normalized scroll progress (0 → 1) over a target ref
const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = window.innerHeight * 2; // active over first 2 viewports
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
};

const ScrollShape = ({ progress }: { progress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current || !innerRef.current) return;

    // Continuous gentle rotation
    groupRef.current.rotation.y += delta * 0.15;
    innerRef.current.rotation.x += delta * 0.25;
    innerRef.current.rotation.z -= delta * 0.1;

    // Scroll-driven transforms
    const scrollRot = progress * Math.PI * 2;
    groupRef.current.rotation.x = scrollRot * 0.5 + mouse.current.y * 0.3;
    groupRef.current.rotation.z = scrollRot * 0.3;

    // Scale & translate based on scroll
    const scale = 1 - progress * 0.4;
    groupRef.current.scale.setScalar(scale);
    groupRef.current.position.y = -progress * 3;
    groupRef.current.position.x = mouse.current.x * 0.5 + progress * 2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={groupRef}>
        {/* Outer wireframe icosahedron — primary teal */}
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshBasicMaterial
            color="#116466"
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Inner solid shape — warm beige with peach glow */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[1.0, 0]} />
          <meshStandardMaterial
            color="#D9B08C"
            roughness={0.35}
            metalness={0.3}
            emissive="#FFCB9A"
            emissiveIntensity={0.3}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Outer ring — primary teal */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.2, 0.015, 12, 80]} />
          <meshBasicMaterial color="#116466" transparent opacity={0.45} />
        </mesh>
      </group>
    </Float>
  );
};

const Scene = () => {
  const progress = useScrollProgress();

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 4]} intensity={1.1} color="#FFCB9A" />
      <pointLight position={[-3, -2, 2]} intensity={0.7} color="#116466" />
      <ScrollShape progress={progress} />
    </Canvas>
  );
};

const ScrollScene3D = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1]"
      aria-hidden="true"
    >
      <Scene />
    </div>
  );
};

export default ScrollScene3D;
