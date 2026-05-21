export const theme = {
  colors: {
    // #a8886a (v1 gold) ≈ oklch(62% 0.069 56) — shifted ~10% darker + richer chroma
    background: 'oklch(99.4% 0.007 75)',
    surface: 'oklch(100% 0 0)',
    text: 'oklch(17% 0.005 264)',
    muted: 'oklch(45% 0.008 55)',
    accent: 'oklch(53% 0.085 53)',
    accentSoft: 'oklch(74% 0.052 55)',
    border: 'oklch(90% 0.020 60)',
    tagBackground: 'oklch(97% 0.010 72)',
  },
  fonts: {
    heading: '"Raleway", sans-serif',
    body: '"Geist", sans-serif',
    altHeading: '"Raleway", sans-serif',
    altBody: '"Geist", sans-serif',
  },
  spacing: {
    'xs': '0.375rem',
    'sm': '0.75rem',
    'md': '1rem',
    'lg': '1.5rem',
    'xl': '2rem',
    '2xl': '3rem',
  },
  shadow: 'oklch(10% 0.006 50 / 0.08) 0 24px 64px',
  radius: {
    sm: '0.35rem',
    md: '0.75rem',
    lg: '1.25rem',
  },
  breakpoints: {
    mobile: '768px',
    printWidth: '210mm',
  },
} as const;
