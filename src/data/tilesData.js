export const BUSINESS_INFO = {
  name: "Elite Tile & Stone",
  phone: "702-334-1707",
  phoneRaw: "7023341707",
  license: "NV Lic #0095105",
  licenseText: "Licensed, Insured & Bonded",
  instagram: "https://www.instagram.com/elite_tileandstone",
  instagramHandle: "@elite_tileandstone",
  location: "Las Vegas, Henderson, Summerlin & Nevada Region",
  yearsExperience: "15+",
  tagline: "Las Vegas' Premier Custom Tile & Natural Stone Master Craftsmen"
};

export const TILE_MATERIALS = [
  {
    id: "calacatta-gold",
    name: "Calacatta Gold Italian Marble",
    category: "Luxury Marble",
    finish: "Polished Bookmatched",
    colorHex: "#F2EFEB",
    veinColor: "#D4AF37",
    pricePerSqFt: 38,
    peiRating: 4,
    dcofSlip: "0.52 (Indoor/Wall/Floor)",
    mohsHardness: 4.5,
    waterAbsorption: "0.3%",
    description: "Authentic Italian marble with dramatic gold and gray veining. Highly prized for master bathrooms and grand entry foyers.",
    recommendedUse: ["Master Bathroom", "Kitchen Slabs", "Foyer Floors", "Accent Walls"],
    textureUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nero-marquina",
    name: "Nero Marquina Black Obsidian",
    category: "Natural Stone",
    finish: "High-Gloss Mirror",
    colorHex: "#121316",
    veinColor: "#E2E8F0",
    pricePerSqFt: 42,
    peiRating: 4,
    dcofSlip: "0.48 (Indoor Accent)",
    mohsHardness: 4.0,
    waterAbsorption: "0.2%",
    description: "Deep obsidian black marble featuring stark, sharp white calcite veins. Unrivaled contrast and modern elegance.",
    recommendedUse: ["Fireplace Surrounds", "Shower Enclosures", "Bar Tops", "Powder Rooms"],
    textureUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "emerald-onyx",
    name: "Emerald Translucent Onyx",
    category: "Exotic Stone",
    finish: "Backlit Polish",
    colorHex: "#1B4D3E",
    veinColor: "#A7F3D0",
    pricePerSqFt: 75,
    peiRating: 3,
    dcofSlip: "0.42 (Feature Walls)",
    mohsHardness: 3.5,
    waterAbsorption: "0.1%",
    description: "Ultra-rare translucent onyx with crystalline emerald bands. Designed for backlit feature walls and luxury powder suites.",
    recommendedUse: ["Backlit Walls", "Custom Vanities", "Wine Cellar Accents"],
    textureUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "terrazzo-gold",
    name: "Venetian Terrazzo & Gold Flake",
    category: "Composite Quartz",
    finish: "Honed Matte",
    colorHex: "#2A2D34",
    veinColor: "#D4AF37",
    pricePerSqFt: 29,
    peiRating: 5,
    dcofSlip: "0.65 (High-Traffic / Wet)",
    mohsHardness: 7.0,
    waterAbsorption: "0.05%",
    description: "Extreme durability composite tile with embedded crushed marble, basalt, and brass flakes. Ideal for high-traffic luxury floors.",
    recommendedUse: ["Commercial", "Kitchen Floors", "Patio & Poolside", "Living Areas"],
    textureUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rustic-slate",
    name: "Midnight Rift Slate",
    category: "Natural Slate",
    finish: "Natural Cleft Texture",
    colorHex: "#1E293B",
    veinColor: "#475569",
    pricePerSqFt: 22,
    peiRating: 5,
    dcofSlip: "0.72 (Outdoor Slip Resistant)",
    mohsHardness: 6.0,
    waterAbsorption: "0.4%",
    description: "Raw-split natural slate with dramatic tactile depth. Naturally slip-resistant, weather-proof, and timeless.",
    recommendedUse: ["Outdoor Patios", "Pool Decks", "Rustic Fireplaces", "Mudrooms"],
    textureUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "carrara-hex",
    name: "Bianco Carrara Mosaic Hex",
    category: "Porcelain & Marble",
    finish: "Satin Smooth",
    colorHex: "#E2E8F0",
    veinColor: "#64748B",
    pricePerSqFt: 26,
    peiRating: 4,
    dcofSlip: "0.58 (Shower Floor Approved)",
    mohsHardness: 5.5,
    waterAbsorption: "0.15%",
    description: "Precision-cut 2-inch hexagonal mosaic sheets. Perfect grip and vintage-modern geometry for curbless shower floors.",
    recommendedUse: ["Shower Floors", "Niche Insets", "Kitchen Backsplash"],
    textureUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
  }
];

export const PATTERNS = [
  { id: "grid", name: "Straight Stacked Grid", icon: "Grid", description: "Minimalist modern grid with aligned continuous grout lines." },
  { id: "brick", name: "Running Bond (50% Offset)", icon: "LayoutGrid", description: "Classic subway brick offset layout offering timeless rhythm." },
  { id: "herringbone", name: "90° Angled Herringbone", icon: "Split", description: "Interlocking 90-degree zig-zag layout for dramatic visual length." },
  { id: "hexagon", name: "Honeycomb Hexagon Matrix", icon: "Hexagon", description: "Six-sided geometric harmony creating organic texture." },
  { id: "chevron", name: "V-Angle French Chevron", icon: "ChevronRight", description: "Precision mitered chevron points directing eye movement gracefully." }
];

export const GROUT_COLORS = [
  { id: "white", name: "Pure White", hex: "#FFFFFF", lineOpacity: 0.9 },
  { id: "gray", name: "Platinum Gray", hex: "#94A3B8", lineOpacity: 0.8 },
  { id: "charcoal", name: "Charcoal Slate", hex: "#334155", lineOpacity: 0.85 },
  { id: "gold", name: "Warm Brass Gold", hex: "#D4AF37", lineOpacity: 0.95 },
  { id: "black", name: "Midnight Black", hex: "#0F172A", lineOpacity: 0.9 }
];

export const ROOM_PRESETS = [
  {
    id: "bathroom",
    title: "Master Suite Bathroom",
    subtitle: "Floor-to-ceiling marble wall slabs with heated tile floors.",
    bgUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    defaultTile: "calacatta-gold",
    defaultPattern: "grid"
  },
  {
    id: "kitchen",
    title: "Chef's Kitchen Backsplash",
    subtitle: "Precision mitered backsplash tile & matching island waterfall edge.",
    bgUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    defaultTile: "carrara-hex",
    defaultPattern: "herringbone"
  },
  {
    id: "fireplace",
    title: "Great Room Fireplace Wall",
    subtitle: "Bookmatched large-format obsidian porcelain slabs up to 10 feet.",
    bgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    defaultTile: "nero-marquina",
    defaultPattern: "grid"
  },
  {
    id: "patio",
    title: "Luxury Pool Deck & Patio",
    subtitle: "Non-slip weather-proof rifted slate with zero water absorption.",
    bgUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    defaultTile: "rustic-slate",
    defaultPattern: "brick"
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "proj-1",
    title: "Modern Architectural Kitchen Backsplash",
    category: "Kitchens",
    location: "Summerlin, NV",
    image: "/assets/08f40bc1-a67f-4f82-8283-fd52b849de06.jpeg",
    material: "Calacatta Quartzite & Mitered Edges",
    details: "Precision razor-edge mitering around window jambs and seamless outlet box cutouts."
  },
  {
    id: "proj-2",
    title: "Custom Spa Suite Bathroom & Accent Wall",
    category: "Bathrooms",
    location: "The Ridges, Henderson",
    image: "/assets/60c064df-5f37-4fde-a6b6-a516542d3c12.jpeg",
    material: "Large Format Venetian Marble Slabs",
    details: "Full floor-to-ceiling continuous vein matching with Schluter waterproof membranes."
  },
  {
    id: "proj-3",
    title: "Precision Shower Niche & Custom Bench",
    category: "Bathrooms",
    location: "Green Valley Ranch, NV",
    image: "/assets/9f4bba36-57cb-4094-b3dd-c23a8dd66207.jpeg",
    material: "Hexagonal Mosaic Inset & Bullnose Trim",
    details: "Floating quartz shower bench, built-in LED illuminated tile niche, zero-threshold slope."
  },
  {
    id: "proj-4",
    title: "Master Suite Complete Transformation (After)",
    category: "Full Renovations",
    location: "MacDonald Highlands, NV",
    image: "/assets/after.jpeg",
    material: "Bookmatched Calacatta Gold Porcelain Slabs",
    details: "Demolished dated ceramic to install 48x96-inch porcelain slabs with underfloor thermal heating."
  },
  {
    id: "proj-5",
    title: "Sub-Structure Demolition & Prep (Before)",
    category: "Sub-Structure Prep",
    location: "MacDonald Highlands, NV",
    image: "/assets/before.jpeg",
    material: "Leveling Mortar & Waterproofing",
    details: "Laser-leveled subfloor, heavy-duty anti-fracture membrane installation to ensure zero tile cracking."
  }
];
