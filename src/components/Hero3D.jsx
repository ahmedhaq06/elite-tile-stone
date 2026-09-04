import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshReflectorMaterial, OrbitControls, Environment, PerspectiveCamera, Sparkles as R3FSparkles } from '@react-three/drei';
import * as THREE from 'three';
import { Phone, ArrowRight, ShieldCheck, Sparkles, Eye, RotateCw } from 'lucide-react';
import { BUSINESS_INFO } from '../data/tilesData';

// 3D Tile Slab Component with procedural bump & realistic specular reflections
function KineticTileSlab({ position, rotation, color, roughness, metalness, scale = [1.8, 2.6, 0.12] }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.y = rotation[1] + Math.sin(t * 0.5 + position[0]) * 0.15;
      meshRef.current.rotation.x = rotation[0] + Math.cos(t * 0.4 + position[1]) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={color}
          roughness={roughness}
          metalness={metalness}
          envMapIntensity={1.8}
        />
        {/* Gold Trim Mitered Edge */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
          <lineBasicMaterial color="#D4AF37" linewidth={2} />
        </lineSegments>
      </mesh>
    </Float>
  );
}

// 3D Scene Controller
function KineticMatrixScene({ lightingMode }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 7.5]} fov={45} />
      
      {/* Lighting Modes */}
      {lightingMode === 'studio' && (
        <>
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.8} color="#FFF7D6" castShadow />
          <pointLight position={[-8, -5, -2]} intensity={1.2} color="#D4AF37" />
          <spotLight position={[0, 8, 4]} intensity={2} angle={0.6} penumbra={0.8} color="#FFFFFF" />
        </>
      )}
      {lightingMode === 'sunset' && (
        <>
          <ambientLight intensity={0.5} />
          <directionalLight position={[8, 4, 3]} intensity={2.2} color="#FF9E43" />
          <pointLight position={[-5, 5, 2]} intensity={1.5} color="#D4AF37" />
        </>
      )}
      {lightingMode === 'dramatic' && (
        <>
          <ambientLight intensity={0.2} />
          <spotLight position={[0, 10, 2]} intensity={3.5} angle={0.4} penumbra={1} color="#D4AF37" />
          <directionalLight position={[-10, -5, -5]} intensity={0.8} color="#38BDF8" />
        </>
      )}

      {/* R3F Gold Sparkles */}
      <R3FSparkles count={80} scale={10} size={3} speed={0.4} opacity={0.6} color="#D4AF37" />

      {/* Floating Kinetic Slabs */}
      {/* Center Calacatta Gold Slab */}
      <KineticTileSlab position={[0, 0.2, 0]} rotation={[0.2, 0.3, 0]} color="#F8FAFC" roughness={0.1} metalness={0.2} scale={[2.2, 3.2, 0.15]} />
      {/* Black Obsidian Slab */}
      <KineticTileSlab position={[-2.8, -0.6, -1]} rotation={[-0.2, 0.6, -0.1]} color="#0F172A" roughness={0.05} metalness={0.5} scale={[1.8, 2.5, 0.12]} />
      {/* Emerald Onyx Slab */}
      <KineticTileSlab position={[2.7, 0.8, -1.2]} rotation={[0.3, -0.5, 0.2]} color="#064E3B" roughness={0.15} metalness={0.3} scale={[1.9, 2.7, 0.12]} />
      {/* Terrazzo Gold Slab */}
      <KineticTileSlab position={[-1.5, 2.2, -2]} rotation={[-0.4, 0.2, 0.3]} color="#1E293B" roughness={0.3} metalness={0.6} scale={[1.5, 2.0, 0.1]} />
      {/* Slate Accent Slab */}
      <KineticTileSlab position={[1.8, -2.1, -1.8]} rotation={[0.4, 0.1, -0.2]} color="#334155" roughness={0.6} metalness={0.1} scale={[1.6, 2.2, 0.1]} />

      {/* Reflective Ground Floor */}
      <mesh position={[0, -3.8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mirror={0.6}
          mixBlur={0.8}
          mixStrength={1.5}
          roughness={0.3}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#070A0F"
          metalness={0.5}
        />
      </mesh>

      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.1} minPolarAngle={Math.PI / 3} rotateSpeed={0.5} />
    </>
  );
}

export default function Hero3D() {
  const [lightingMode, setLightingMode] = useState('studio');

  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 30%, #111827 0%, #070A0F 80%)',
      overflow: 'hidden'
    }}>
      {/* Background Ambient Glow */}
      <div className="ambient-glow-gold" style={{ width: '600px', height: '600px', top: '10%', left: '50%', transform: 'translateX(-50%)' }} />

      {/* Three.js 3D Canvas Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Canvas shadows>
          <KineticMatrixScene lightingMode={lightingMode} />
        </Canvas>
      </div>

      {/* Lighting Control Floating Widget */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        zIndex: 20,
        background: 'rgba(7, 10, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        borderRadius: '99px',
        padding: '0.3rem 0.6rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem'
      }}>
        <span style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: '600', paddingLeft: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <Eye size={12} /> 3D Light:
        </span>
        {['studio', 'sunset', 'dramatic'].map((mode) => (
          <button
            key={mode}
            onClick={() => setLightingMode(mode)}
            style={{
              background: lightingMode === mode ? '#D4AF37' : 'transparent',
              color: lightingMode === mode ? '#070A0F' : '#94A3B8',
              border: 'none',
              borderRadius: '99px',
              padding: '0.25rem 0.65rem',
              fontSize: '0.72rem',
              fontWeight: '700',
              cursor: 'pointer',
              textTransform: 'capitalize',
              transition: 'all 0.2s ease'
            }}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* 3D Interactivity Helper Badge */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        right: '2rem',
        zIndex: 20,
        color: '#94A3B8',
        fontSize: '0.78rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'rgba(18, 24, 38, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '0.4rem 0.9rem',
        borderRadius: '99px'
      }} className="desktop-only">
        <RotateCw size={13} style={{ color: '#D4AF37' }} />
        <span>Drag scene to orbit 3D tile slabs</span>
      </div>

      {/* Foreground Hero Content Overlay */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        pointerEvents: 'none'
      }}>
        {/* License & Quality Badge */}
        <div style={{ pointerEvents: 'auto', marginBottom: '1.5rem', display: 'inline-flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="license-badge" style={{ boxShadow: '0 0 20px rgba(212, 175, 55, 0.25)' }}>
            <ShieldCheck size={14} style={{ color: '#D4AF37' }} /> {BUSINESS_INFO.license} • {BUSINESS_INFO.licenseText}
          </span>
          <span className="license-badge" style={{ background: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255,255,255,0.15)' }}>
            <Sparkles size={13} style={{ color: '#F3E5AB' }} /> Las Vegas Master Stone Installers
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
          fontWeight: '700',
          lineHeight: '1.08',
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          color: '#F8FAFC'
        }}>
          Architectural Precision.<br />
          <span className="gold-gradient-text">Unrivaled Stone Craftsmanship.</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
          color: '#CBD5E1',
          maxWidth: '750px',
          margin: '0 auto 2.5rem auto',
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          Transforming Las Vegas luxury estates with bookmatched marble, continuous vein porcelain slabs, precision herringbone, and zero-threshold custom shower suites.
        </p>

        {/* CTA Buttons Container */}
        <div style={{
          pointerEvents: 'auto',
          display: 'flex',
          gap: '1.2rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="btn-gold"
            style={{ fontSize: '1.05rem', padding: '1rem 2.2rem' }}
          >
            <Phone size={18} />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>

          <a
            href="#3d-studio"
            className="btn-outline-gold"
            style={{ fontSize: '1.05rem', padding: '1rem 2.2rem', backdropFilter: 'blur(10px)' }}
          >
            <span>Launch 3D Studio</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Key Feature Stats Pills */}
        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.2rem',
          maxWidth: '900px',
          margin: '3.5rem auto 0 auto'
        }}>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#D4AF37' }} className="font-serif">100%</span>
            <span style={{ display: 'block', fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>Laser-Leveled & Waterproof</span>
          </div>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#F8FAFC' }} className="font-serif">NV #0095105</span>
            <span style={{ display: 'block', fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>Licensed, Insured & Bonded</span>
          </div>
          <div className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#D4AF37' }} className="font-serif">Bookmatched</span>
            <span style={{ display: 'block', fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>Large Format Porcelain Slabs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
