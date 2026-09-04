import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Layers, Sliders, Check, Plus, Eye, Box, Info } from 'lucide-react';
import { TILE_MATERIALS, PATTERNS, GROUT_COLORS, ROOM_PRESETS } from '../data/tilesData';

export default function MaterialStudio({ onAddSample }) {
  const [selectedRoom, setSelectedRoom] = useState(ROOM_PRESETS[0]);
  const [selectedTile, setSelectedTile] = useState(TILE_MATERIALS[0]);
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS[0]);
  const [selectedGrout, setSelectedGrout] = useState(GROUT_COLORS[3]); // Gold default
  const [groutWidth, setGroutWidth] = useState(3); // 3px (~1/8 inch)
  const [addedSuccess, setAddedSuccess] = useState(false);

  const canvasRef = useRef(null);

  // Render pattern on canvas whenever selections change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear background
    ctx.fillStyle = selectedTile.colorHex || '#1E293B';
    ctx.fillRect(0, 0, width, height);

    // Draw procedural tile surface texture (veins / terrazzo specks / grain)
    ctx.save();
    if (selectedTile.id === 'calacatta-gold') {
      // Draw marble veins
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 4;
      ctx.globalAlpha = 0.35;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.2);
      ctx.bezierCurveTo(width * 0.3, height * 0.4, width * 0.6, height * 0.1, width, height * 0.5);
      ctx.stroke();

      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width * 0.2, 0);
      ctx.bezierCurveTo(width * 0.5, height * 0.6, width * 0.8, height * 0.3, width * 0.9, height);
      ctx.stroke();
    } else if (selectedTile.id === 'nero-marquina') {
      // Draw white obsidian veins
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.8);
      ctx.lineTo(width * 0.4, height * 0.2);
      ctx.lineTo(width, height * 0.6);
      ctx.stroke();
    } else if (selectedTile.id === 'terrazzo-gold') {
      // Draw terrazzo specks
      ctx.globalAlpha = 0.6;
      for (let i = 0; i < 80; i++) {
        const x = (i * 37) % width;
        const y = (i * 53) % height;
        ctx.fillStyle = i % 3 === 0 ? '#D4AF37' : i % 2 === 0 ? '#FFFFFF' : '#64748B';
        ctx.beginPath();
        ctx.arc(x, y, (i % 5) + 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();

    // Render Tile Pattern & Grout Lines
    ctx.strokeStyle = selectedGrout.hex;
    ctx.lineWidth = groutWidth;
    ctx.globalAlpha = selectedGrout.lineOpacity || 0.9;

    const tileW = 90;
    const tileH = 50;

    if (selectedPattern.id === 'grid') {
      for (let x = 0; x < width; x += tileW) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += tileH) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    } else if (selectedPattern.id === 'brick') {
      for (let y = 0, row = 0; y < height; y += tileH, row++) {
        const offsetX = (row % 2) * (tileW / 2);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        for (let x = offsetX; x < width; x += tileW) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + tileH);
          ctx.stroke();
        }
      }
    } else if (selectedPattern.id === 'herringbone') {
      const hW = 60;
      const hH = 25;
      for (let x = -width; x < width * 2; x += hW) {
        for (let y = -height; y < height * 2; y += hW) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + hW, y + hH);
          ctx.lineTo(x, y + hH * 2);
          ctx.stroke();
        }
      }
    } else if (selectedPattern.id === 'hexagon') {
      const radius = 32;
      const a = (2 * Math.PI) / 6;
      for (let y = 0; y < height + radius * 2; y += radius * 1.5) {
        for (let x = 0; x < width + radius * 2; x += radius * Math.sqrt(3)) {
          const xPos = x + ((Math.floor(y / (radius * 1.5)) % 2) * (radius * Math.sqrt(3)) / 2);
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            ctx.lineTo(xPos + radius * Math.cos(a * i), y + radius * Math.sin(a * i));
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    } else if (selectedPattern.id === 'chevron') {
      const cW = 80;
      const cH = 40;
      for (let x = -cW; x < width + cW; x += cW) {
        for (let y = 0; y < height + cH; y += cH) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + cW / 2, y - cH / 2);
          ctx.lineTo(x + cW, y);
          ctx.stroke();
        }
      }
    }
  }, [selectedTile, selectedPattern, selectedGrout, groutWidth]);

  const handleAddSampleClick = () => {
    onAddSample(selectedTile);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <section id="3d-studio" className="section-padding" style={{ position: 'relative', background: '#090D14' }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="license-badge" style={{ marginBottom: '0.8rem' }}>
            <Sliders size={13} style={{ color: '#D4AF37' }} /> Real-Time Tile & Grout Customizer
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#F8FAFC', marginBottom: '1rem' }}>
            Interactive <span className="gold-gradient-text">Material & Pattern Studio</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '680px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Customize tile materials, pattern layouts, and live grout line colors in real-time. Test how your chosen stone transforms luxury room environments.
          </p>
        </div>

        {/* Studio Workspace Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          
          {/* Left Side: Interactive Canvas & Room Preview Visualizer */}
          <div className="glass-panel-gold" style={{ padding: '1.5rem', overflow: 'hidden' }}>
            
            {/* Room Environment Tabs */}
            <div style={{
              display: 'flex',
              gap: '0.6rem',
              marginBottom: '1.2rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem'
            }}>
              {ROOM_PRESETS.map((room) => (
                <button
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  style={{
                    background: selectedRoom.id === room.id ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    border: selectedRoom.id === room.id ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
                    color: selectedRoom.id === room.id ? '#F4E3AA' : '#94A3B8',
                    padding: '0.5rem 1rem',
                    borderRadius: '99px',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {room.title}
                </button>
              ))}
            </div>

            {/* Main Interactive Canvas Display */}
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              height: '420px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
            }}>
              {/* Canvas Pattern Generator */}
              <canvas
                ref={canvasRef}
                width={700}
                height={420}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Room Vignette Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(7,10,15,0) 40%, rgba(7,10,15,0.7) 100%)',
                pointerEvents: 'none'
              }} />

              {/* Live Info HUD Badge */}
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                background: 'rgba(7, 10, 15, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '12px',
                padding: '0.75rem 1.1rem',
                color: '#F8FAFC',
                maxWidth: '360px'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#D4AF37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {selectedTile.category} • {selectedPattern.name}
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: '700', margin: '2px 0' }} className="font-serif">
                  {selectedTile.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'flex', gap: '0.8rem', marginTop: '4px' }}>
                  <span>Grout: <strong style={{ color: selectedGrout.hex }}>{selectedGrout.name}</strong></span>
                  <span>Joint: <strong>{groutWidth === 1.5 ? '1/16"' : groutWidth === 3 ? '1/8"' : '3/16"'}</strong></span>
                </div>
              </div>

              {/* Sample Box Quick Action Button */}
              <button
                onClick={handleAddSampleClick}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: addedSuccess ? '#10B981' : 'linear-gradient(135deg, #E5C158 0%, #D4AF37 100%)',
                  color: '#070A0F',
                  border: 'none',
                  borderRadius: '99px',
                  padding: '0.6rem 1.2rem',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                  transition: 'all 0.2s ease'
                }}
              >
                {addedSuccess ? <Check size={16} /> : <Plus size={16} />}
                <span>{addedSuccess ? 'Swatch Added!' : 'Add Swatch to Box'}</span>
              </button>
            </div>

            {/* Room Preset Description */}
            <div style={{
              marginTop: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#94A3B8',
              fontSize: '0.85rem',
              background: 'rgba(255,255,255,0.03)',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              <Info size={16} style={{ color: '#D4AF37', flexShrink: 0 }} />
              <span>{selectedRoom.subtitle} Tested with <strong>{selectedTile.dcofSlip}</strong> slip rating.</span>
            </div>
          </div>

          {/* Right Side: Customizer Controls Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            
            {/* 1. Select Material */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={18} style={{ color: '#D4AF37' }} />
                1. Select Stone & Tile Material
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {TILE_MATERIALS.map((tile) => {
                  const isSelected = selectedTile.id === tile.id;
                  return (
                    <button
                      key={tile.id}
                      onClick={() => setSelectedTile(tile)}
                      style={{
                        background: isSelected ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                        border: isSelected ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        padding: '0.75rem',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem'
                      }}
                    >
                      {/* Material Swatch Circle */}
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: tile.colorHex,
                        border: '2px solid #D4AF37',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
                      }} />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: '700', color: isSelected ? '#F4E3AA' : '#F8FAFC' }}>
                          {tile.name.split(' ')[0]} {tile.name.split(' ')[1]}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                          ${tile.pricePerSqFt}/sq.ft • {tile.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Select Pattern Layout */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sliders size={18} style={{ color: '#D4AF37' }} />
                2. Choose Installation Pattern Layout
              </h3>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {PATTERNS.map((pat) => {
                  const isSelected = selectedPattern.id === pat.id;
                  return (
                    <button
                      key={pat.id}
                      onClick={() => setSelectedPattern(pat)}
                      style={{
                        background: isSelected ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.03)',
                        border: isSelected ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
                        color: isSelected ? '#F4E3AA' : '#CBD5E1',
                        padding: '0.5rem 0.9rem',
                        borderRadius: '10px',
                        fontSize: '0.82rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {pat.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Select Live Grout Color & Joint Width */}
            <div className="glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} style={{ color: '#D4AF37' }} />
                3. Customize Grout Color & Joint Width
              </h3>

              {/* Color Swatches */}
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.5rem' }}>Grout Shade:</div>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  {GROUT_COLORS.map((grout) => {
                    const isSelected = selectedGrout.id === grout.id;
                    return (
                      <button
                        key={grout.id}
                        onClick={() => setSelectedGrout(grout)}
                        title={grout.name}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: grout.hex,
                          border: isSelected ? '3px solid #D4AF37' : '1px solid rgba(255,255,255,0.2)',
                          boxShadow: isSelected ? '0 0 12px rgba(212, 175, 55, 0.6)' : 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Joint Width Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94A3B8', marginBottom: '0.5rem' }}>
                  <span>Grout Line Width:</span>
                  <strong style={{ color: '#F4E3AA' }}>
                    {groutWidth === 1.5 ? '1/16" (Minimal Razor)' : groutWidth === 3 ? '1/8" (Standard Precision)' : '3/16" (Rustic Joint)'}
                  </strong>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="4.5"
                  step="1.5"
                  value={groutWidth}
                  onChange={(e) => setGroutWidth(parseFloat(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#D4AF37',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
