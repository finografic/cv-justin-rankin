export const theme = {
  colors: {
    // accent-dependent — driven by panda.config.ts `primary` token
    accent: 'var(--colors-primary)',
    accentSoft: 'var(--colors-primary-lighter)',
    secondary: 'var(--colors-secondary)',
    secondarySoft: 'var(--colors-secondary-lighter)',
    border: 'var(--colors-primary-xxlight)',
    tagBackground: 'var(--colors-primary-xxxlight)',
    // fixed — independent of accent
    background: 'oklch(99.4% 0.007 75)',
    surface: 'oklch(100% 0 0)',
    text: 'oklch(17% 0.005 264)',
    muted: 'oklch(45% 0.008 55)',
  },
  fonts: {
    heading: '"Raleway", sans-serif',
    body: '"Roboto", "Geist", sans-serif',
    altHeading: '"Raleway", sans-serif',
    altBody: '"Roboto", "Geist", sans-serif',
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
