export const CAMPAIGN_ANGLES = {
  'failed-shower': {
    id: 'failed-shower',
    param: 'failed-shower',
    headline: 'Think your shower was done wrong?',
    subheadline: "Water damage doesn't stop on its own. We rebuild rotted subfloors with 100% Schluter waterproofing and precision master tile setting.",
    heroImage: '/assets/before.jpeg',
    beforeAfterImage: '/assets/after.jpeg',
    badge: 'Shower Repair & Rebuild Specialist',
    preselectedService: 'Custom showers (master / walk-in)',
    painPoints: [
      'Water leaking into lower ceilings or surrounding drywall',
      'Cracked grout, spongy shower pan, or foul mold smell',
      'Improper slope causing standing water pooling',
      'Unlicensed contractor shortcut waterproofing'
    ],
    solutions: [
      'Complete subfloor tear-out down to bare framing',
      'Schluter-Kerdi dual-layer membrane 100% waterproof guarantee',
      'Laser-leveled mortar beds with true 1/4" per foot slope to drain',
      'Licensed NV contractor #0095105 with 15+ years experience'
    ],
    offerTitle: 'Get Your Free On-Site Shower Inspection & Estimate',
    offerDesc: 'Complimentary moisture check and itemized rebuild quote in Las Vegas, Henderson & Summerlin.',
    formQuestions: [
      {
        id: 'showerIssue',
        label: "What's happening with your shower?",
        type: 'select',
        required: true,
        options: [
          'Water leaking / flooding into walls or ceiling',
          'Tiles cracking, popping, or falling off',
          'Mold, mildew, or foul smell from grout',
          'Spongy shower pan or soft floor',
          'Full gut & rebuild — prior contractor failure',
          'Not sure — needs inspection',
        ],
      },
    ],
  },

  'tub-conversion': {
    id: 'tub-conversion',
    param: 'tub-conversion',
    headline: 'Turn that unused tub into a walk-in shower',
    subheadline: 'Same space. Same plumbing. Convert your outdated fiberglass bath into a zero-threshold curbless luxury shower.',
    heroImage: '/assets/60c064df-5f37-4fde-a6b6-a516542d3c12.jpeg',
    beforeAfterImage: '/assets/after.jpeg',
    badge: 'Tub-to-Shower Conversion Specialist',
    preselectedService: 'Custom showers (master / walk-in)',
    painPoints: [
      'High 16-inch tub ledge that is dangerous to step over',
      'Yellowed, hard-to-clean acrylic or fiberglass tub surround',
      'Wasted bathroom space that nobody in your house uses',
      'Outdated 90s builder-grade bathroom layout'
    ],
    solutions: [
      'Direct conversion using existing plumbing drain lines',
      'Zero-threshold curbless entry for seamless walk-in access',
      'Custom floating quartz benches & built-in LED shower niches',
      'Floor-to-ceiling porcelain or natural marble wall slabs'
    ],
    offerTitle: 'Get Your Free Walk-In Conversion Estimate',
    offerDesc: 'On-site measurement and exact cost breakdown for your tub-to-shower conversion.',
    formQuestions: [
      {
        id: 'conversionStyle',
        label: 'What style of walk-in shower are you envisioning?',
        type: 'buttons',
        required: false,
        options: [
          'Walk-in with frameless glass door',
          'Open walk-in (no glass)',
          'Walk-in with bench + LED niche',
        ],
      },
    ],
  },

  'luxury': {
    id: 'luxury',
    param: 'luxury',
    headline: 'Luxury showers, built in Las Vegas',
    subheadline: 'Real stone. Real craftsmanship. Turn your daily routine into a resort spa experience with custom porcelain & marble slabs.',
    heroImage: '/assets/hero_dark_bathroom.jpg',
    beforeAfterImage: '/assets/60c064df-5f37-4fde-a6b6-a516542d3c12.jpeg',
    badge: 'Resort-Grade Spa Suite Builders',
    preselectedService: 'Custom showers (master / walk-in)',
    painPoints: [
      'Standard 4x4 builder tiles that feel dated and generic',
      'Grout lines every 12 inches that gather soap scum and mildew',
      'Lack of luxury features like heated floors or rainfall steam',
      'Boring track home bathroom aesthetics'
    ],
    solutions: [
      'Large-format 48x96-inch porcelain & bookmatched marble slabs',
      'Thermal heated tile floors with smart digital thermostats',
      'Zero-curb curbless wet rooms with frameless glass enclosures',
      'Custom linear slot drains and illuminated floating niches'
    ],
    offerTitle: 'Get Your Free Luxury Suite Estimate',
    offerDesc: 'Complimentary on-site measurement & 3D slab visualization consultation.',
    formQuestions: [
      {
        id: 'projectArea',
        label: 'Which area are you looking to remodel?',
        type: 'buttons',
        required: false,
        options: ['Master shower only', 'Guest bathroom', 'Multiple rooms'],
      },
      {
        id: 'tileInspiration',
        label: 'Do you have a tile style or inspiration in mind?',
        type: 'buttons',
        required: false,
        options: ['Yes — I have photos / ideas', 'No — help me choose'],
      },
    ],
  },

  'floors': {
    id: 'floors',
    param: 'floors',
    headline: "Cracked concrete? You don't have to tear it out.",
    subheadline: 'We go straight over the top. Anti-fracture membranes and self-leveling mortar beds allow seamless large-format tile over existing slabs.',
    heroImage: '/assets/living_room_floor.jpg',
    beforeAfterImage: '/assets/before.jpeg',
    badge: 'Subfloor Prep & Tile Flooring Specialist',
    preselectedService: 'Flooring',
    painPoints: [
      'Post-tension slab cracks telegraphing into tile floors',
      'Uneven concrete subfloors that make large tiles wobble',
      'Fear of expensive concrete Jackhammer demolition costs',
      'Hollow sounding tiles installed without full mortar coverage'
    ],
    solutions: [
      'Heavy-duty uncoupling anti-fracture membrane installation',
      'Laser-guided self-leveling mortar beds for true flat subfloors',
      '95%+ back-butter mortar coverage guaranteeing zero tile cracks',
      'Seamless installation over post-tension Las Vegas concrete slabs'
    ],
    offerTitle: 'Get Your Free Tile Flooring Estimate',
    offerDesc: 'On-site floor inspection and square footage cost estimate in Southern Nevada.',
    formQuestions: [
      {
        id: 'sqFootage',
        label: 'Approximate square footage to tile?',
        type: 'text',
        placeholder: 'e.g. 800 sq ft, or 2,000 sq ft for the full estate',
        required: false,
      },
      {
        id: 'floorLocation',
        label: 'Is the area indoor, outdoor, or both?',
        type: 'buttons',
        required: false,
        options: ['Indoor living area', 'Outdoor patio / pool deck', 'Both'],
      },
    ],
  },

  'new-home': {
    id: 'new-home',
    param: 'new-home',
    headline: 'New house. Old bathroom.',
    subheadline: "Let's fix it before you unpack. Upgrade builder-grade developer finishes into your dream master suite before move-in day.",
    heroImage: '/assets/after.jpeg',
    beforeAfterImage: '/assets/60c064df-5f37-4fde-a6b6-a516542d3c12.jpeg',
    badge: 'Move-In Ready Bathroom Renovations',
    preselectedService: 'Both',
    painPoints: [
      'Tract home builder charged exorbitant upgrade fees for basic tile',
      'Cheap plastic tub inserts in a brand new $700k+ home',
      'Wanting custom tile work completed BEFORE moving furniture in',
      'Living through dust and construction after unpacking boxes'
    ],
    solutions: [
      'Pre-move-in scheduled demolition and fast-track installation',
      'Full custom master bathroom & flooring upgrades before move-in',
      'Turnkey management—we handle ordering, delivery, & cleanup',
      'Protected job site containment keeping dust out of rest of house'
    ],
    offerTitle: 'Get Your Pre-Move-In Estimate Today',
    offerDesc: 'Fast response and priority scheduling for new Nevada homeowners.',
    formQuestions: [
      {
        id: 'moveInTimeline',
        label: 'How soon are you moving in?',
        type: 'buttons',
        required: false,
        options: ['Already moved in', 'Within 30 days', '1–3 months out'],
      },
      {
        id: 'areasToTile',
        label: 'Which areas are you looking to tile?',
        type: 'buttons',
        required: false,
        options: ['Shower only', 'Floors only', 'Both shower & floors'],
      },
    ],
  },

  'default': {
    id: 'default',
    param: 'default',
    headline: 'Custom Tile Showers & Flooring, Built to Last',
    subheadline: 'Las Vegas premier master tile setters. Zero-threshold walk-ins, full-height stone slabs, and precision porcelain floors.',
    heroImage: '/assets/hero_dark_bathroom.jpg',
    beforeAfterImage: '/assets/after.jpeg',
    badge: 'Premier Las Vegas Tile & Stone Contractor',
    preselectedService: 'Custom showers (master / walk-in)',
    painPoints: [
      'Disappointing builder-grade tile finishes',
      'Fears of hidden water leaks and poor subfloor prep',
      'Contractors who do not show up on time',
      'Lack of clear written itemized pricing'
    ],
    solutions: [
      'Master tile setting with 15+ years experience',
      '100% Schluter-certified waterproofing system',
      'On-time completion & clean jobsite protection',
      'Nevada licensed, bonded & insured #0095105'
    ],
    offerTitle: 'Get Your Free In-Home Estimate',
    offerDesc: 'On-site laser measurement and itemized project quote in Southern Nevada.',
    formQuestions: [],
  }
};

// Aliases for path or alternate param names
CAMPAIGN_ANGLES['tub-to-walk-in'] = CAMPAIGN_ANGLES['tub-conversion'];
CAMPAIGN_ANGLES['craftsmanship'] = CAMPAIGN_ANGLES['luxury'];
CAMPAIGN_ANGLES['luxury-showers'] = CAMPAIGN_ANGLES['luxury'];
CAMPAIGN_ANGLES['new-house'] = CAMPAIGN_ANGLES['new-home'];

export function getCampaignAngle(adParamOrPath) {
  if (!adParamOrPath) return CAMPAIGN_ANGLES['default'];
  
  const key = String(adParamOrPath)
    .toLowerCase()
    .replace(/^\//, '')
    .replace(/^#\/?/, '')
    .trim();

  return CAMPAIGN_ANGLES[key] || CAMPAIGN_ANGLES['default'];
}
