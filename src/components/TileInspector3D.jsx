import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';
import { ShieldCheck, Info, Sparkles, Sliders, FileText, ExternalLink } from 'lucide-react';
import { TILE_MATERIALS } from '../data/tilesData';

function InspectorSlab3D({ tile, finish }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const roughness = finish === 'polished' ? 0.05 : finish === 'honed' ? 0.4 : 0.75;
  const metalness = finish === 'polished' ? 0.4 : 0.1;

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={[2.6, 3.6, 0.25]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={tile.colorHex}
          roughness={roughness}
          metalness={metalness}
          envMapIntensity={2.0}
        />
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
          <lineBasicMaterial color="#D4AF37" linewidth={2} />
        </lineSegments>
      </mesh>
    </Float>
  );
}

export default function TileInspector3D() {
  const [selectedTile, setSelectedTile] = useState(TILE_MATERIALS[0]);
  const [surfaceFinish, setSurfaceFinish] = useState('polished');

  return (
    <section id="inspector" className="section-padding" style={{ position: 'relative', background: '#090D14' }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="license-badge" style={{ marginBottom: '0.8rem' }}>
            <FileText size={13} style={{ color: '#D4AF37' }} /> Technical Durability & Specification Inspector
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#F8FAFC', marginBottom: '1rem' }}>
            3D Material Inspector & <span className="gold-gradient-text">Architectural Specs</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '680px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Inspect stone surface textures in 3D and review certified PEI wear ratings, DCOF slip safety standards, and Mohs hardness scales.
          </p>
        </div>

        {/* Inspector Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          
          {/* Left: 3D Canvas Slab Viewer */}
          <div className="glass-panel-gold" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#D4AF37', fontWeight: '700', textTransform: 'uppercase' }}>
                360° Interactive 3D Stone Slab
              </span>

              {/* Surface Finish Toggles */}
              <div style={{ display: 'flex', gap: '0.4rem', background: 'rgba(255,255,255,0.05)', padding: '3px', borderRadius: '99px' }}>
                {['polished', 'honed', 'textured'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setSurfaceFinish(f)}
                    style={{
                      background: surfaceFinish === f ? '#D4AF37' : 'transparent',
                      color: surfaceFinish === f ? '#070A0F' : '#94A3B8',
                      border: 'none',
                      borderRadius: '99px',
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* 3D Canvas viewport */}
            <div style={{
              flex: 1,
              minHeight: '380px',
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'radial-gradient(circle at 50% 50%, #171E2E 0%, #070A0F 100%)',
              position: 'relative'
            }}>
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 8, 5]} intensity={2} color="#FFF7D6" />
                <pointLight position={[-5, -5, -2]} intensity={1} color="#D4AF37" />
                
                {/* 3D Slab */}
                <mesh position={[0, 0, 0]} scale={[2.2, 3.2, 0.2]}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial
                    color={selectedTile.colorHex}
                    roughness={surfaceFinish === 'polished' ? 0.08 : surfaceFinish === 'honed' ? 0.45 : 0.8}
                    metalness={surfaceFinish === 'polished' ? 0.35 : 0.1}
                  />
                </mesh>

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
              </Canvas>

              {/* Material Badge Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                background: 'rgba(7, 10, 15, 0.85)',
                backdropFilter: 'blur(10px)',
                padding: '0.6rem 1rem',
                borderRadius: '10px',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                <div style={{ fontSize: '1rem', fontWeight: '700', color: '#F8FAFC' }} className="font-serif">
                  {selectedTile.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#D4AF37' }}>
                  {surfaceFinish.toUpperCase()} FINISH • ${selectedTile.pricePerSqFt} / SQ.FT
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Spec Breakdown Sheet */}
          <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Tile Selector Pills */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.6rem' }}>Select Material Specification:</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {TILE_MATERIALS.map((tile) => (
                    <button
                      key={tile.id}
                      onClick={() => setSelectedTile(tile)}
                      style={{
                        background: selectedTile.id === tile.id ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        border: selectedTile.id === tile.id ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
                        color: selectedTile.id === tile.id ? '#F4E3AA' : '#94A3B8',
                        padding: '0.45rem 0.85rem',
                        borderRadius: '99px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {tile.name.split(' ')[0]} {tile.name.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.8rem', color: '#F8FAFC', marginBottom: '0.5rem' }} className="font-serif">
                {selectedTile.name}
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.8rem' }}>
                {selectedTile.description}
              </p>

              {/* Specs Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '1.8rem'
              }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>PEI Abrasion Rating</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#D4AF37' }} className="font-serif">
                    Class {selectedTile.peiRating} / 5
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Heavy Commercial & Luxury Residential</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>DCOF Slip Safety</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#F8FAFC' }} className="font-serif">
                    {selectedTile.dcofSlip}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>ANSI A137.1 Standard Compliant</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Mohs Scratch Hardness</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#D4AF37' }} className="font-serif">
                    {selectedTile.mohsHardness} / 10
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Scratch & High Impact Resistant</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.9rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Water Absorption</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#F8FAFC' }} className="font-serif">
                    {selectedTile.waterAbsorption}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Impervious to Moisture & Stains</div>
                </div>
              </div>

              {/* Recommended Uses Tags */}
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.5rem' }}>Approved Installation Applications:</div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {selectedTile.recommendedUse.map((use, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        color: '#F4E3AA',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        padding: '0.25rem 0.7rem',
                        borderRadius: '99px'
                      }}
                    >
                      ✓ {use}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Guarantee Banner */}
            <div style={{
              marginTop: '2rem',
              padding: '0.85rem 1.2rem',
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '0.82rem', color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={16} style={{ color: '#D4AF37' }} /> Installed to TCNA & NV Contractor Standards
              </span>
              <a href="#calculator" style={{ color: '#D4AF37', fontSize: '0.82rem', fontWeight: '700', textDecoration: 'none' }}>
                Estimate Cost →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
