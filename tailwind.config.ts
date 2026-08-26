import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#EEF1F5',
        surface: '#F7F9FB',
        primary: '#14161C',
        muted: '#5B616E',
        border: '#E4E6EB',
        accent: '#0D7C82',
        'accent-violet': '#6D5BD0',
        'accent-rust': '#B5541C',
        'status-progress': '#B45309'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'ui-mono': ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;