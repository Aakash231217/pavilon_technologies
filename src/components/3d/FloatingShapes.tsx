import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, GradientTexture, Sphere, Torus, Icosahedron, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  secondaryColor?: string;
  scale?: number;
  speed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  distort?: number;
  shape?: 'sphere' | 'torus' | 'icosahedron' | 'octahedron';
}

const FloatingShape = ({
  position,
  color,
  secondaryColor = '#ffffff',
  scale = 1,
  speed = 2,
  rotationIntensity = 1,
  floatIntensity = 1,
  distort = 0.3,
  shape = 'sphere'
}: FloatingShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.005;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case 'torus':
        return <Torus args={[1, 0.4, 16, 32]} />;
      case 'icosahedron':
        return <Icosahedron args={[1, 0]} />;
      case 'octahedron':
        return <Octahedron args={[1, 0]} />;
      default:
        return <Sphere args={[1, 64, 64]} />;
    }
  };

  return (
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {renderShape()}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        >
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={[color, secondaryColor, color]}
          />
        </MeshDistortMaterial>
      </mesh>
    </Float>
  );
};

interface GlowingSphereProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

const GlowingSphere = ({ position, color, scale = 0.5 }: GlowingSphereProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

interface FloatingRingProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

const FloatingRing = ({ position, color, scale = 1 }: FloatingRingProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color={color}
          metalness={1}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
};

interface Scene3DProps {
  variant?: 'hero' | 'about' | 'services' | 'minimal';
}

const Scene3D = ({ variant = 'hero' }: Scene3DProps) => {
  const heroShapes = (
    <>
      <FloatingShape
        position={[3, 0, -2]}
        color="#6366f1"
        secondaryColor="#ec4899"
        scale={1.2}
        distort={0.4}
        shape="sphere"
      />
      <FloatingShape
        position={[-3.5, 1.5, -3]}
        color="#ec4899"
        secondaryColor="#f59e0b"
        scale={0.8}
        distort={0.3}
        shape="icosahedron"
      />
      <FloatingShape
        position={[2.5, -2, -4]}
        color="#f59e0b"
        secondaryColor="#6366f1"
        scale={0.6}
        distort={0.5}
        shape="octahedron"
      />
      <FloatingRing position={[-2, -1, -2]} color="#6366f1" scale={0.7} />
      <FloatingRing position={[4, 2, -5]} color="#ec4899" scale={0.5} />
      <GlowingSphere position={[-4, 2, -3]} color="#6366f1" scale={0.3} />
      <GlowingSphere position={[1, 3, -4]} color="#f59e0b" scale={0.2} />
      <GlowingSphere position={[5, -1, -3]} color="#ec4899" scale={0.25} />
    </>
  );

  const aboutShapes = (
    <>
      <FloatingShape
        position={[4, 0, -3]}
        color="#6366f1"
        secondaryColor="#3b82f6"
        scale={1}
        distort={0.3}
        shape="torus"
      />
      <GlowingSphere position={[-3, 1, -2]} color="#ec4899" scale={0.4} />
      <FloatingRing position={[2, -2, -4]} color="#f59e0b" scale={0.6} />
    </>
  );

  const servicesShapes = (
    <>
      <FloatingShape
        position={[-4, 1, -3]}
        color="#ec4899"
        secondaryColor="#f59e0b"
        scale={0.9}
        distort={0.4}
        shape="icosahedron"
      />
      <FloatingShape
        position={[4, -1, -4]}
        color="#6366f1"
        secondaryColor="#ec4899"
        scale={0.7}
        distort={0.3}
        shape="octahedron"
      />
    </>
  );

  const minimalShapes = (
    <>
      <GlowingSphere position={[3, 1, -2]} color="#6366f1" scale={0.4} />
      <GlowingSphere position={[-3, -1, -3]} color="#ec4899" scale={0.3} />
    </>
  );

  const getShapes = () => {
    switch (variant) {
      case 'about':
        return aboutShapes;
      case 'services':
        return servicesShapes;
      case 'minimal':
        return minimalShapes;
      default:
        return heroShapes;
    }
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#ec4899" intensity={0.5} />
      <pointLight position={[10, -10, 5]} color="#6366f1" intensity={0.5} />
      {getShapes()}
    </Canvas>
  );
};

export default Scene3D;
export { FloatingShape, GlowingSphere, FloatingRing };
