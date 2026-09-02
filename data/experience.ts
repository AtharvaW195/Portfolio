export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

export const experience: ExperienceItem[] = [
  {
    company: 'Ultimate Scaler Pvt. Ltd.',
    role: 'Product Development Intern',
    duration: 'Dec 2024 - May 2025',
    highlights: [
      'Built backend components for an automated trading platform using Python and KiteConnect APIs to support real-time market data ingestion.',
      'Architected and implemented a Data Logger Unit (DLU) to capture, store, and organize tick-level market data for historical analysis and backtesting.',
      'Evaluated automated trading strategies using EMA, RSI, ATR, Bollinger Bands, and Supertrend indicators to validate rule-based execution logic.'
    ]
  }
];

export const education: EducationItem[] = [
  {
    institution: 'NC State University',
    degree: 'Master of Computer Science',
    duration: '2025–Present'
  },
  {
    institution: 'NMIMS MPSTME',
    degree: 'B.Tech in Information Technology',
    duration: '2021-2025'
  }
];