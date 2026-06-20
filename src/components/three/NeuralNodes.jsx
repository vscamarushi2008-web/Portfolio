import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Generates a node layout that reads as a loose hand/pose "keypoint" rig —
 * a wrist root with five finger chains — then lets a handful of extra
 * "drift" nodes float free, so the shape resolves from "hand skeleton"
 * (her actual ISL pose-estimation work) into "neural graph" at a glance.
 * This is the one deliberate signature visual for the whole site.
 */
function buildHandGraph() {
  const points = [];
  const edges = [];

  const wrist = new THREE.Vector3(0, -1.3, 0);
  points.push(wrist);
  const wristIdx = 0;

  // Five finger chains radiating from the wrist, palm-like fan
  const fingerCount = 5;
  const jointsPerFinger = 3;
  for (let f = 0; f < fingerCount; f++) {
    const spread = (f / (fingerCount - 1) - 0.5) * 1.9; // -0.95 .. 0.95
    const fingerLength = 1.5 + Math.abs(spread) * -0.25 + 0.6;
    let prevIdx = wristIdx;
    let base = new THREE.Vector3(spread * 1.1, -0.2, spread * 0.4);

    for (let j = 0; j < jointsPerFinger; j++) {
      const t = (j + 1) / jointsPerFinger;
      const pos = new THREE.Vector3(
        spread * (1.1 + t * 0.5),
        -0.2 + t * fingerLength,
        spread * 0.4 + Math.sin(t * Math.PI * 0.5) * 0.15
      );
      points.push(pos);
      const idx = points.length - 1;
      edges.push([prevIdx, idx]);
      prevIdx = idx;
    }
  }

  // Free-floating "drift" nodes — these are the ones that animate outward
  // into a generic network cloud, and are connected sparsely to simulate
  // a graph rather than a rigid skeleton.
  const driftCount = 28;
  const driftStartIdx = points.length;
  for (let i = 0; i < driftCount; i++) {
    const radius = 2.6 + Math.random() * 2.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const pos = new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta) * 0.9,
      radius * Math.cos(phi) * 0.7,
      radius * Math.sin(phi) * Math.sin(theta) * 0.6
    );
    points.push(pos);
  }

  // Connect drift nodes to nearby skeleton joints + each other sparsely
  for (let i = 0; i < driftCount; i++) {
    const idx = driftStartIdx + i;
    const targetSkeleton = Math.floor(Math.random() * driftStartIdx);
    edges.push([idx, targetSkeleton]);
    if (Math.random() > 0.6) {
      const otherDrift = driftStartIdx + Math.floor(Math.random() * driftCount);
      if (otherDrift !== idx) edges.push([idx, otherDrift]);
    }
  }

  return { points, edges, driftStartIdx };
}

export default function NeuralNodes({ mouse }) {
  const { points, edges, driftStartIdx } = useMemo(() => buildHandGraph(), []);
  const groupRef = useRef();
  const nodesRef = useRef();
  const linesRef = useRef();

  // Precompute per-node animation phase so drift feels organic, not synced
  const phases = useMemo(
    () => points.map(() => Math.random() * Math.PI * 2),
    [points]
  );

  const basePositions = useMemo(
    () => points.map((p) => p.clone()),
    [points]
  );

  const nodePositionsArray = useMemo(() => {
    const arr = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [points]);

  const linePositionsArray = useMemo(() => {
    const arr = new Float32Array(edges.length * 2 * 3);
    return arr;
  }, [edges]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const posAttr = nodesRef.current?.geometry?.attributes?.position;
    const linePosAttr = linesRef.current?.geometry?.attributes?.position;
    if (!posAttr) return;

    // Animate each node with gentle drift; skeleton joints drift less,
    // free nodes drift more — reinforcing the "resolving" feel.
    for (let i = 0; i < points.length; i++) {
      const base = basePositions[i];
      const isDrift = i >= driftStartIdx;
      const amp = isDrift ? 0.18 : 0.05;
      const speed = isDrift ? 0.35 : 0.5;
      const phase = phases[i];

      const x = base.x + Math.sin(t * speed + phase) * amp;
      const y = base.y + Math.cos(t * speed * 0.8 + phase) * amp;
      const z = base.z + Math.sin(t * speed * 0.6 + phase) * amp;

      posAttr.array[i * 3] = x;
      posAttr.array[i * 3 + 1] = y;
      posAttr.array[i * 3 + 2] = z;
    }
    posAttr.needsUpdate = true;

    if (linePosAttr) {
      edges.forEach(([a, b], i) => {
        linePosAttr.array[i * 6] = posAttr.array[a * 3];
        linePosAttr.array[i * 6 + 1] = posAttr.array[a * 3 + 1];
        linePosAttr.array[i * 6 + 2] = posAttr.array[a * 3 + 2];
        linePosAttr.array[i * 6 + 3] = posAttr.array[b * 3];
        linePosAttr.array[i * 6 + 4] = posAttr.array[b * 3 + 1];
        linePosAttr.array[i * 6 + 5] = posAttr.array[b * 3 + 2];
      });
      linePosAttr.needsUpdate = true;
    }

    // Whole-graph slow rotation + mouse-responsive parallax tilt
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.06;
      const targetX = (mouse?.y ?? 0) * 0.15;
      const targetZ = (mouse?.x ?? 0) * 0.15;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
      groupRef.current.rotation.z += (targetZ - groupRef.current.rotation.z) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.2, 0]} scale={1.15}>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={edges.length * 2}
            array={linePositionsArray}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00d9ff"
          transparent
          opacity={0.18}
          linewidth={1}
        />
      </lineSegments>

      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={nodePositionsArray}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#7df9ff"
          size={0.065}
          sizeAttenuation
          transparent
          opacity={0.95}
        />
      </points>
    </group>
  );
}
