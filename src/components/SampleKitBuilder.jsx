import React, { useState } from 'react';
import { Box, Plus, Trash2, CheckCircle2, Truck, Sparkles, Send, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TILE_MATERIALS, BUSINESS_INFO } from '../data/tilesData';

export default function SampleKitBuilder({ sampleList, onRemoveSample, onAddSample, isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', notes: '' });

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(7, 10, 15, 0.92)',
      backdropFilter: 'blur(16px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        background: '#0D121D',
        border: '1px solid #D4AF37',
        borderRadius: '24px',
        maxWidth: '850px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
        padding: '2.5rem'
      }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#F8FAFC',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10B981',
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '2rem', color: '#F8FAFC', marginBottom: '0.8rem' }} className="font-serif">
              Sample Box Request Received!
            </h3>
            <p style={{ color: '#94A3B8', maxWidth: '500px', margin: '0 auto 2rem auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Our team at Elite Tile & Stone will package your custom 4-tile swatch presentation box and contact you at <strong>{formData.phone}</strong> for local Las Vegas delivery.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-gold"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="license-badge" style={{ marginBottom: '0.6rem' }}>
                <Box size={13} style={{ color: '#D4AF37' }} /> Complimentary Sample Box Delivery
              </span>
              <h2 style={{ fontSize: '1.8rem', color: '#F8FAFC', marginTop: '0.2rem' }} className="font-serif">
                Build Your Custom <span className="gold-gradient-text">Physical Swatch Kit</span>
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginTop: '0.4rem' }}>
                Pick up to 4 tile materials to test in your home lighting. Free delivery across Las Vegas & Nevada region.
              </p>
            </div>

            {/* Selected Swatches Box Visualizer */}
            <div style={{
              background: 'linear-gradient(135deg, #121826 0%, #070A0F 100%)',
              border: '1px dashed #D4AF37',
              borderRadius: '16px',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.82rem', color: '#D4AF37', fontWeight: '700', textTransform: 'uppercase' }}>
                  Presentation Box Contents ({sampleList.length}/4 Swatches)
                </span>
                {sampleList.length < 4 && (
                  <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Select items below to fill box</span>
                )}
              </div>

              {/* Grid of Swatches in Box */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {[0, 1, 2, 3].map((idx) => {
                  const item = sampleList[idx];
                  return item ? (
                    <div key={item.id} style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(212, 175, 55, 0.4)',
                      borderRadius: '12px',
                      padding: '0.8rem',
                      textAlign: 'center',
                      position: 'relative'
                    }}>
                      <button
                        onClick={() => onRemoveSample(item.id)}
                        style={{
                          position: 'absolute',
                          top: '4px',
                          right: '4px',
                          background: 'rgba(239, 68, 68, 0.2)',
                          border: 'none',
                          color: '#FCA5A5',
                          borderRadius: '50%',
                          width: '22px',
                          height: '22px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Trash2 size={12} />
                      </button>

                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: item.colorHex,
                        border: '2px solid #D4AF37',
                        margin: '0 auto 0.5rem auto'
                      }} />
                      <div style={{ fontSize: '0.78rem', color: '#F8FAFC', fontWeight: '700', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {item.name.split(' ')[0]} {item.name.split(' ')[1]}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#D4AF37' }}>
                        ${item.pricePerSqFt}/sq.ft
                      </div>
                    </div>
                  ) : (
                    <div key={idx} style={{
                      border: '1px dashed rgba(255,255,255,0.15)',
                      borderRadius: '12px',
                      padding: '1.2rem 0.5rem',
                      textAlign: 'center',
                      color: '#64748B',
                      fontSize: '0.78rem'
                    }}>
                      <Plus size={20} style={{ opacity: 0.4, margin: '0 auto 0.3rem auto' }} />
                      Slot #{idx + 1} Empty
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Material Picker Swatches below */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '0.8rem' }}>Add Swatches To Box:</div>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {TILE_MATERIALS.map((tile) => {
                  const inBox = sampleList.some(s => s.id === tile.id);
                  return (
                    <button
                      key={tile.id}
                      disabled={inBox || sampleList.length >= 4}
                      onClick={() => onAddSample(tile)}
                      style={{
                        background: inBox ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.05)',
                        border: inBox ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.1)',
                        color: inBox ? '#6EE7B7' : '#F8FAFC',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '99px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        cursor: inBox || sampleList.length >= 4 ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: tile.colorHex, display: 'inline-block' }} />
                      <span>{tile.name.split(' ')[0]} {tile.name.split(' ')[1]}</span>
                      {inBox ? <CheckCircle2 size={13} /> : <Plus size={13} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Delivery Request Form */}
            <form onSubmit={handleOrderSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block', marginBottom: '0.3rem' }}>Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Michael Thorne"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#070A0F',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#F8FAFC',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block', marginBottom: '0.3rem' }}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="702-XXX-XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#070A0F',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#F8FAFC',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'block', marginBottom: '0.3rem' }}>Las Vegas Delivery Address *</label>
                <input
                  type="text"
                  required
                  placeholder="Street Address, City, Zip Code"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#070A0F',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#F8FAFC',
                    padding: '0.75rem',
                    borderRadius: '10px',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ gridColumn: 'span 2', marginTop: '0.8rem' }}>
                <button
                  type="submit"
                  disabled={sampleList.length === 0}
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '1rem' }}
                >
                  <Truck size={18} />
                  <span>Request Free Sample Box Delivery</span>
                </button>
              </div>
            </form>

          </div>
        )}

      </div>
    </div>
  );
}
