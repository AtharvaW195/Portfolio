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
    category: 'Software Engineering / Backend / Full-Stack',
    bullets: [
      'Built a full-stack trading platform simulator with a Python backend and modern web frontend for simulating financial-market workflows.',
      'Implemented a modular backend with database migrations, API endpoints, automated tests, and containerized local deployment using Docker Compose.',
      'Developed frontend and backend components to support market simulation and portfolio-oriented workflows through a REST API.',
      'Structured the application into separate backend, frontend, database-migration, and testing layers to support maintainability and iterative development.'
    ],
    techStack: [
      'Python',
      'FastAPI',
      'REST APIs',
      'SQL',
      'Alembic',
      'Docker',
      'React',
      'TypeScript'
    ],
    status: 'In Progress',
    githubUrl: 'https://github.com/AtharvaW195/Kairos',
    demoUrl: 'https://kairos-nu-plum.vercel.app',
    slug: 'kairos',
  },

  {
    name: 'Solar Energy Generation Prediction using Deep Learning',
    category: 'AI/ML / Research',
    bullets: [
      'Developed and compared LSTM, GRU, and MLP models to forecast photovoltaic energy generation using approximately 13,000 historical observations.',
      'Built an end-to-end preprocessing pipeline covering data cleaning, normalization, feature selection, and hyperparameter optimization.',
      'Reduced the feature space from 28 to 15 features using Sequential Forward Selection while maintaining predictive performance.',
      'Achieved the best performance with an MLP model, obtaining an MAE of 0.0244.',
      'Published the research at SETCOM 2025.'
    ],
    techStack: [
      'Python',
      'TensorFlow',
      'LSTM',
      'GRU',
      'MLP',
      'Machine Learning'
    ],
    status: 'Completed — Published at SETCOM 2025',
    githubUrl: '#',
    demoUrl: '#',
    slug: 'solar-energy-generation-prediction',
  },

  {
    name: 'LeakLens — Real-Time Secret Leak Detection Tool',
    category: 'Security / Systems / Software Engineering',
    bullets: [
      'Built a lightweight Go-based secret detection system for identifying passwords, API keys, JWTs, private keys, and high-entropy tokens in user-provided text.',
      'Implemented deterministic detection and risk scoring with support for PEM private keys, JWTs, password assignments, and conservative high-entropy token heuristics.',
      'Developed both CLI and HTTP server interfaces with health-check and analysis endpoints for integration into development workflows.',
      'Implemented automatic secret redaction, request-size limits, rate limiting, deterministic output, and position tracking to support security-focused processing.',
      'Authored 95+ unit tests and achieved 95%+ code coverage across the detection system.'
    ],
    techStack: [
      'Go',
      'REST APIs',
      'Security',
      'Pattern Matching',
      'Unit Testing'
    ],
    status: 'In Progress',
    githubUrl: 'https://github.com/AtharvaW195/hacknc_Leaklens',
    demoUrl: '#',
    slug: 'leaklens',
  },

  {
    name: 'Expertiza — Open Source Contribution',
    category: 'Software Engineering / Open Source',
    bullets: [
      'Contributed to the Ruby on Rails backend of Expertiza, an open-source software engineering platform.',
      'Worked within an established Rails codebase containing application, database, API documentation, testing, and CI infrastructure.',
      'Authored 200+ automated RSpec tests covering authentication, authorization, controller behavior, and role-based access.',
      'Used automated testing to validate existing application behavior and improve confidence in backend functionality.'
    ],
    techStack: [
      'Ruby',
      'Ruby on Rails',
      'RSpec',
      'Git',
      'Docker'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/AtharvaW195/reimplementation-back-end',
    demoUrl: '#',
    slug: 'expertiza-open-source-contribution',
  },

  {
    name: 'EcoBites — Sustainable Food Delivery Platform',
    category: 'Software Engineering / Full-Stack',
    bullets: [
      'Developed a sustainable food-delivery platform supporting customers, restaurants, and delivery workflows with sustainability-focused features.',
      'Implemented backend APIs for authentication, restaurant and menu management, ordering, and eco-reward workflows.',
      'Built a web interface for browsing restaurants, placing orders, tracking deliveries, and selecting environmentally friendly options.',
      'Implemented automated testing and achieved 76% code coverage across the application.',
      'Configured GitHub Actions CI/CD workflows to automate testing and support reliable development.'
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'React',
      'MongoDB',
      'GitHub Actions',
      'CI/CD'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/AtharvaW195/Software_Engineering/tree/main/proj2',
    demoUrl: '#',
    slug: 'ecobites-sustainable-food-delivery-platform',
  },

  {
    name: 'Boreas — North Carolina Air Quality Dashboard',
    category: 'Software Engineering / Full-Stack / Data Visualization',
    bullets: [
      'Built a full-stack air-quality dashboard that retrieves North Carolina monitoring data and presents current and historical AQI information.',
      'Developed a FastAPI backend with SQLite storage and REST endpoints for retrieving station information and recent air-quality readings.',
      'Built an interactive React interface using Leaflet to visualize monitoring stations on a map and Recharts to display AQI history.',
      'Implemented a data-polling workflow using the EPA AirNow API to collect and locally store air-quality readings.',
      'Added backend tests using pytest to validate application functionality.'
    ],
    techStack: [
      'Python',
      'FastAPI',
      'SQLite',
      'React',
      'Leaflet',
      'Recharts',
      'AirNow API'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/AtharvaW195/Boreas',
    demoUrl: '#',
    slug: 'boreas-air-quality-dashboard',
  },

  {
    name: 'RideSense — Ride Analytics & Insights Dashboard',
    category: 'Software Engineering / Full-Stack / Data Analytics',
    bullets: [
      'Built a full-stack TypeScript system that captures ride-search and booking events and transforms them into an interactive analytics dashboard.',
      'Implemented an event-driven backend that validates and stores search, view, booking, and cancellation events in an in-memory event store.',
      'Developed analytics APIs for conversion funnels, route-level behavior, top routes, time-series trends, and system-wide summaries.',
      'Built a React dashboard with live metrics, route analytics, trend visualizations, and heuristic insights for interpreting ride-demand behavior.',
      'Designed seeded mock data spanning days, weeks, months, and years to support meaningful analytics and demonstrations.'
    ],
    techStack: [
      'TypeScript',
      'Node.js',
      'Express',
      'React',
      'Vite',
      'REST APIs'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/AtharvaW195/RideSense',
    demoUrl: 'https://youtu.be/ZllMcgAiS34',
    slug: 'ridesense',
  },

  {
    name: 'UDP Reliable File Transfer',
    category: 'Systems / Networking',
    bullets: [
      'Implemented reliable file transfer over UDP using a Go-Back-N ARQ protocol with configurable window size, maximum segment size, timeout, and packet-loss probability.',
      'Designed custom data and acknowledgment packet formats with sequence numbers, checksums, packet types, and explicit end-of-file signaling.',
      'Implemented client-server file transfer with retransmission and timeout handling to provide reliable delivery over an unreliable transport protocol.',
      'Built automated experiment runners to evaluate protocol behavior across window sizes, segment sizes, and packet-loss probabilities and generate CSV results and plots.',
      'Implemented a separate Selective Repeat ARQ version as an extension and compared its behavior using the same experimental framework.'
    ],
    techStack: [
      'Python',
      'UDP',
      'Go-Back-N ARQ',
      'Selective Repeat',
      'Computer Networks',
      'Socket Programming'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/AtharvaW195/udp-reliable-file-transfer',
    demoUrl: '#',
    slug: 'udp-reliable-file-transfer',
  },

  {
    name: 'P2P RFC Sharing System',
    category: 'Systems / Networking',
    bullets: [
      'Implemented a peer-to-peer RFC sharing system using a centralized index server to coordinate RFC discovery across multiple peers.',
      'Developed peer processes with local RFC storage, upload servers, interactive CLI commands, and support for RFC lookup and retrieval.',
      'Implemented a shared P2P-CI protocol layer for formatting and parsing requests and responses between peers and the index server.',
      'Supported multi-peer RFC discovery and direct file retrieval between peers using socket-based communication.',
      'Implemented protocol error handling for malformed requests, missing RFCs, and unsupported protocol versions.'
    ],
    techStack: [
      'Python',
      'Socket Programming',
      'TCP/IP',
      'P2P Networking',
      'Protocol Design'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/AtharvaW195/p2p-rfc-sharing-system',
    demoUrl: '#',
    slug: 'p2p-rfc-sharing-system',
  },

  {
    name: 'Image Colorization using Pix2Pix',
    category: 'AI/ML / Computer Vision',
    bullets: [
      'Implemented an image colorization workflow using a Pix2Pix conditional GAN to translate grayscale images into color images.',
      'Used a generator-discriminator architecture based on conditional adversarial image-to-image translation.',
      'Experimented with image preprocessing and model training workflows for learning grayscale-to-color mappings.',
      'Generated colorized outputs from grayscale inputs using a deep learning image-translation pipeline.'
    ],
    techStack: [
      'Python',
      'TensorFlow',
      'Pix2Pix',
      'GANs',
      'Computer Vision',
      'Deep Learning'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/AtharvaW195/Image_Colorazation',
    demoUrl: '#',
    slug: 'image-colorization',
  },

  {
    name: 'Acoustic Classification',
    category: 'AI/ML / Audio Classification',
    bullets: [
      'Developed a deep learning pipeline for acoustic classification using cough and respiratory audio data.',
      'Implemented a CRNN-based classification workflow and experimented with hyperparameter optimization to improve model performance.',
      'Built preprocessing and prediction pipelines for generating model outputs in the required competition format.',
      'Tracked multiple experimental configurations and model results across successive optimization rounds.'
    ],
    techStack: [
      'Python',
      'PyTorch',
      'CRNN',
      'Deep Learning',
      'Audio Classification',
      'Hyperparameter Optimization'
    ],
    status: 'Completed',
    githubUrl: 'https://github.com/AtharvaW195/Acoustic_Classfication',
    demoUrl: '#',
    slug: 'acoustic-classification',
  },

  {
    name: 'Multilingual Sentiment Analysis',
    category: 'AI/ML / NLP',
    bullets: [
      'Developed a Gujarati sentiment classification pipeline using TF-IDF feature extraction and supervised machine learning.',
      'Applied SMOTE oversampling to address class imbalance and improve classification performance across minority classes.',
      'Compared multiple classifiers using precision, recall, F1-score, and confusion matrices.',
      'Evaluated model behavior across sentiment classes to identify strengths and weaknesses in classification performance.'
    ],
    techStack: [
      'Python',
      'Scikit-learn',
      'TF-IDF',
      'SMOTE',
      'NLP',
      'Machine Learning'
    ],
    status: 'Completed',
    githubUrl: '#',
    demoUrl: '#',
    slug: 'multilingual-sentiment-analysis',
  },
];