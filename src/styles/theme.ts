export const theme = {
  colors: {
    background: '#fffdf9',
    surface: '#ffffff',
    text: '#1f2023',
    muted: '#64615e',
    accent: '#9c6e47',
    accentSoft: '#c9ab92',
    border: '#e9ded4',
    tagBackground: '#fbf6f1',
  },
  fonts: {
    heading: '"Manrope Variable", "DM Sans", sans-serif',
    body: '"Source Serif 4 Variable", "Source Serif 4", serif',
    altHeading: '"Outfit Variable", "Outfit", sans-serif',
    altBody: '"Instrument Serif", "Source Serif 4 Variable", serif',
  },
  spacing: {
    'xs': '0.375rem',
    'sm': '0.75rem',
    'md': '1rem',
    'lg': '1.5rem',
    'xl': '2rem',
    '2xl': '3rem',
  },
  shadow: '0 24px 64px rgba(30, 22, 16, 0.08)',
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
