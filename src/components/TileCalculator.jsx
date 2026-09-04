import React, { useState } from 'react';
import { Calculator, Sparkles, DollarSign, Package, Layers, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { TILE_MATERIALS, BUSINESS_INFO } from '../data/tilesData';

export default function TileCalculator({ onOpenQuoteModal }) {
  const [sqFt, setSqFt] = useState(250);
  const [selectedTile, setSelectedTile] = useState(TILE_MATERIALS[0]);
  const [wasteFactor, setWasteFactor] = useState(15); // 15% waste factor
  const [installationType, setInstallationType] = useState('floor');
  const [copied, setCopied] = useState(false);

  // Calculations
  const extraWasteSqFt = Math.ceil(sqFt * (wasteFactor / 100));
  const totalSqFtNeeded = sqFt + extraWasteSqFt;
  const boxesNeeded = Math.ceil(totalSqFtNeeded / 15); // ~15 sq.ft per box
  const groutBagsNeeded = Math.ceil(totalSqFtNeeded / 100); // 1 bag per 100 sq.ft
  const thinsetBagsNeeded = Math.ceil(totalSqFtNeeded / 75); // 1 bag per 75 sq.ft
  
  const estimatedMaterialCost = totalSqFtNeeded * selectedTile.pricePerSqFt;
  const estimatedLaborCostLow = totalSqFtNeeded * 12;
  const estimatedLaborCostHigh = totalSqFtNeeded * 18;

  const copySummary = () => {
    const text = `Elite Tile & Stone Estimate Summary:
- Project Area: ${sqFt} sq.ft (${wasteFactor}% waste factor = ${totalSqFtNeeded} total sq.ft)
- Selected Tile: ${selectedTile.name} ($${selectedTile.pricePerSqFt}/sq.ft)
- Boxes Required: ${boxesNeeded} boxes
- Grout & Thinset: ${groutBagsNeeded} grout bags, ${thinsetBagsNeeded} mortar bags
- Estimated Material Cost: $${estimatedMaterialCost.toLocaleString()}
Call ${BUSINESS_INFO.phone} (NV Lic #${BUSINESS_INFO.license})`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="calculator" className="section-padding" style={{ position: 'relative', background: '#070A0F' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="license-badge" style={{ marginBottom: '0.8rem' }}>
            <Calculator size={13} style={{ color: '#D4AF37' }} /> Precision Material & Cost Calculator
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#F8FAFC', marginBottom: '1rem' }}>
            Interactive <span className="gold-gradient-text">Tile & Waste Estimator</span>
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '680px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
            Input your room dimensions and pattern layout factor to calculate exact box counts, grout requirements, and transparent material costs.
          </p>
        </div>

        {/* Calculator Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          
          {/* Left Inputs */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#F8FAFC', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }} className="font-serif">
              <Sliders size={20} style={{ color: '#D4AF37' }} /> Project Specifications
            </h3>

            {/* 1. Area Sq Ft Input */}
            <div style={{ marginBottom: '1.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#F8FAFC', fontWeight: '600' }}>
                  Coverage Area (Square Feet):
                </label>
                <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#D4AF37' }} className="font-serif">
                  {sqFt} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="2000"
                step="10"
                value={sqFt}
                onChange={(e) => setSqFt(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#D4AF37', cursor: 'pointer', marginBottom: '0.6rem' }}
              />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[100, 250, 500, 1000].map((quick) => (
                  <button
                    key={quick}
                    onClick={() => setSqFt(quick)}
                    style={{
                      background: sqFt === quick ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      border: sqFt === quick ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
                      color: sqFt === quick ? '#F4E3AA' : '#94A3B8',
                      padding: '0.3rem 0.7rem',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      cursor: 'pointer'
                    }}
                  >
                    {quick} sq.ft
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Select Tile Material */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{ fontSize: '0.9rem', color: '#F8FAFC', fontWeight: '600', display: 'block', marginBottom: '0.6rem' }}>
                Select Stone / Tile Material:
              </label>
              <select
                value={selectedTile.id}
                onChange={(e) => setSelectedTile(TILE_MATERIALS.find(t => t.id === e.target.value))}
                style={{
                  width: '100%',
                  background: '#0D121D',
                  color: '#F8FAFC',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {TILE_MATERIALS.map((tile) => (
                  <option key={tile.id} value={tile.id}>
                    {tile.name} (${tile.pricePerSqFt}/sq.ft • {tile.category})
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Waste Factor Factor */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{ fontSize: '0.9rem', color: '#F8FAFC', fontWeight: '600', display: 'block', marginBottom: '0.6rem' }}>
                Cut & Layout Waste Allowance Factor:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { label: '10% (Straight Grid)', val: 10 },
                  { label: '15% (Herringbone/Diagonal)', val: 15 },
                  { label: '20% (Intricate Slabs)', val: 20 }
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setWasteFactor(item.val)}
                    style={{
                      background: wasteFactor === item.val ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                      border: wasteFactor === item.val ? '1px solid #D4AF37' : '1px solid rgba(255,255,255,0.08)',
                      color: wasteFactor === item.val ? '#F4E3AA' : '#94A3B8',
                      padding: '0.75rem 0.5rem',
                      borderRadius: '10px',
                      fontSize: '0.78rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Results Sheet */}
          <div className="glass-panel-gold" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '0.78rem', color: '#D4AF37', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Estimated Order Breakdown
              </span>
              <h3 style={{ fontSize: '1.8rem', color: '#F8FAFC', marginTop: '0.3rem', marginBottom: '1.5rem' }} className="font-serif">
                Material & Cost Summary
              </h3>

              {/* Cost Highlight Box */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(7, 10, 15, 0.6) 100%)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1.8rem',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '0.85rem', color: '#94A3B8', textTransform: 'uppercase' }}>Estimated Tile Material Total</span>
                <div style={{ fontSize: '2.8rem', fontWeight: '800', color: '#D4AF37', margin: '0.3rem 0' }} className="font-serif">
                  ${estimatedMaterialCost.toLocaleString()}
                </div>
                <span style={{ fontSize: '0.78rem', color: '#CBD5E1' }}>
                  Covers {totalSqFtNeeded} sq.ft (${selectedTile.pricePerSqFt}/sq.ft base + {wasteFactor}% waste allowance)
                </span>
              </div>

              {/* Quantities Table */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#CBD5E1', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Package size={16} style={{ color: '#D4AF37' }} /> Tile Boxes Required:
                  </span>
                  <strong style={{ color: '#F8FAFC' }}>{boxesNeeded} Boxes (~15 sq.ft/box)</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#CBD5E1', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Layers size={16} style={{ color: '#D4AF37' }} /> Polymer Grout Bags:
                  </span>
                  <strong style={{ color: '#F8FAFC' }}>{groutBagsNeeded} Bags (25 lb)</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#CBD5E1', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={16} style={{ color: '#D4AF37' }} /> Laticrete Thinset Mortar:
                  </span>
                  <strong style={{ color: '#F8FAFC' }}>{thinsetBagsNeeded} Bags (50 lb)</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#CBD5E1', paddingBottom: '0.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <DollarSign size={16} style={{ color: '#D4AF37' }} /> Estimated Installation Range:
                  </span>
                  <strong style={{ color: '#F4E3AA' }}>${estimatedLaborCostLow.toLocaleString()} - ${estimatedLaborCostHigh.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <button
                onClick={copySummary}
                className="btn-outline-gold"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem' }}
              >
                {copied ? <Check size={16} /> : <Calculator size={16} />}
                <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-gold"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem' }}
              >
                <span>Call For Onsite Quote</span>
                <ArrowRight size={16} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
