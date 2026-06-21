import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import NeuralNodes from "./NeuralNodes";
import ParticleField from "./ParticleField";

/**
 * Hero background scene. Mouse position (normalized -1..1) is passed
 * down from the Hero section so the graph responds to pointer movement
 * without each child needing its own listener.
 */
export default function NeuralNetworkScene({ mouse }) {
  const frameloop = useRef("always");

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.2], fov: 50 }}
      frameloop={frameloop.current}
      gl={{ antialias: true, alpha: true }}
      events={() => ({ enabled: false, priority: 0 })}
      className="!absolute !inset-0 !pointer-events-none"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#00d9ff" />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#3b82f6" />
      <fog attach="fog" args={["#05080f", 6, 13]} />
      <ParticleField />
      <NeuralNodes mouse={mouse} />
    </Canvas>
  );
}
