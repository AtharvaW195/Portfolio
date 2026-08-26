export interface Project {
  name: string;
  category: string;
  description?: string;
  bullets: string[];
  techStack: string[];
  status: string;
  githubUrl: string;
  demoUrl: string;
  slug: string;
}

export const projects: Project[] = [
  {
    name: 'Kairos',
    category: 'Software Engineering / Backend / Systems',
    bullets: [
      'Architected an event-driven backend to simulate live financial markets and automated trade execution using producer-consumer workflows.',
      'Implemented WebSocket streaming to broadcast simulated market events in real time for concurrent client updates.',
      'Developed REST APIs for authentication, portfolio management, and market operations with JWT-based authentication.',
      'Built an anomaly detection pipeline to identify abnormal market behavior using statistical and machine learning techniques.',
      'Built unit and integration tests with GitHub Actions CI/CD to ensure reliability and maintainability.'
    ],
    techStack: ['Python', 'REST APIs', 'WebSockets', 'JWT', 'GitHub Actions CI/CD'],
    status: 'In Progress',
    githubUrl: '#',
    demoUrl: '#',
    slug: 'kairos',
  },
  {
    name: 'Solar Energy Generation Prediction using Deep Learning',
    category: 'AI/ML / Research',
    bullets: [
      'Developed and compared LSTM, GRU, and MLP models in TensorFlow to forecast photovoltaic energy generation using ~13,000 historical observations.',
      'Built an end-to-end preprocessing pipeline covering cleaning, normalization, feature selection, and hyperparameter optimization.',
      'Reduced feature space from 28 to 15 features using Sequential Forward Selection, maintaining predictive performance.',
      'Achieved best performance with an MLP model (MAE: 0.0244) and published findings at SETCOM 2025.'
    ],
    techStack: ['TensorFlow', 'LSTM', 'GRU', 'MLP', 'Python'],
    status: 'Completed — Published at SETCOM 2025',
    githubUrl: '#',
    demoUrl: '#',
    slug: 'solar-energy-generation-prediction',
  },
  {
    name: 'LeakLens — Real-Time Secret Leak Detection Tool',
    category: 'AI/ML / Security',
    bullets: [
      'Built a Go-based security platform to detect passwords, API keys, JWTs, and SSH keys across CLI, browser extension, and web dashboard interfaces.',
      'Engineered a modular detection engine combining pattern matching, confidence scoring, and automatic redaction.',
      'Integrated a BERT-based inference pipeline to identify sensitive information extracted from uploaded videos and images using OCR and transformer models.',
      'Authored 95+ automated unit tests and secure REST APIs to ensure reliability across application components.'
    ],
    techStack: ['Go', 'BERT', 'OCR', 'REST APIs'],
    status: 'In Progress',
    githubUrl: '#',
    demoUrl: '#',
    slug: 'leaklens',
  },
  {
    name: 'Networking Project',
    category: 'Systems / Networking',
    bullets: [
      'Networking-focused software project demonstrating systems and network programming concepts.'
    ],
    techStack: ['C/C++', 'Networking', 'Linux'],
    status: 'In Progress',
    githubUrl: '#',
    demoUrl: '#',
    slug: 'networking-project',
  },
  {
    name: 'Expertiza — Open Source Contribution',
    category: 'Software Engineering',
    bullets: [
      'Contributed production-quality Ruby on Rails code to the Expertiza open-source software engineering platform.',
      'Authored 200+ automated RSpec tests validating authentication, authorization, controller behavior, and role-based access.'
    ],
    techStack: ['Ruby on Rails', 'RSpec'],
    status: 'Completed',
    githubUrl: '#',
    demoUrl: '#',
    slug: 'expertiza-open-source-contribution',
  },
  {
    name: 'Multilingual Sentiment Analysis',
    category: 'AI/ML / NLP',
    bullets: [
      'Developed a Gujarati sentiment classification pipeline using TF-IDF vectorization and supervised machine learning.',
      'Applied SMOTE oversampling to address class imbalance and improve model robustness across minority classes.',
      'Evaluated multiple classifiers using precision, recall, F1-score, and confusion matrices.'
    ],
    techStack: ['Python', 'TF-IDF', 'Scikit-learn', 'SMOTE'],
    status: 'Completed',
    githubUrl: '#',
    demoUrl: '#',
    slug: 'multilingual-sentiment-analysis',
  },
  {
    name: 'EcoBites — Sustainable Food Delivery Platform',
    category: 'Software Engineering / Full-Stack',
    bullets: [
      'Developed REST APIs for restaurant management, ordering, authentication, and eco-reward redemption using Node.js and Express.js.',
      'Integrated MongoDB with a React frontend to support scalable user and order management.',
      'Achieved 76% code coverage through automated testing and GitHub Actions CI/CD pipelines.'
    ],
    techStack: ['Node.js', 'Express.js', 'React', 'MongoDB', 'GitHub Actions CI/CD'],
    status: 'Completed',
    githubUrl: '#',
    demoUrl: '#',
    slug: 'ecobites-sustainable-food-delivery-platform',
  }
];