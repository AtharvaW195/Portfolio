export interface ResearchItem {
  title: string;
  meta: string;
  description?: string;
  bullets?: string[];
  status: string;
  tags: string[];
  slug: string;
}

export const research: ResearchItem[] = [
{
    title: 'Solar Energy Generation Prediction using Deep Learning',
    meta: 'Published Research | Status: Completed — Published at SETCOM 2025',
    bullets: [
      'Developed and compared LSTM, GRU, and MLP models in TensorFlow to forecast photovoltaic energy generation using ~13,000 historical observations.',
      'Reduced feature space from 28 to 15 features using Sequential Forward Selection while maintaining predictive performance.',
      'Achieved best performance with an MLP model (MAE: 0.0244) and published findings at SETCOM 2025.'
    ],
    status: 'Completed — Published at SETCOM 2025',
    tags: ['Deep Learning', 'Time-Series Forecasting', 'TensorFlow', 'Applied ML'],
    slug: 'solar-energy-generation-prediction-deep-learning'
   },
    
  {
    title: 'LLM-Generated Software Tests',
    meta: 'Independent Study | Supervisor: Ed Gehringer | Status: Ongoing',
    description:
      'Research investigating the quality and limitations of LLM-generated software tests, including whether prompting and iterative feedback can improve test quality.',
    status: 'Ongoing',
    tags: ['LLMs', 'Generative AI', 'Software Engineering', 'Software Testing'],
    slug: 'llm-generated-software-tests'
  },
  {
    title: 'Software Evolution + Generative AI',
    meta: 'Graduate Research Project | Status: Ongoing',
    description:
      'Research at the intersection of software evolution, software maintenance, and Generative AI/LLMs/Agents.',
    status: 'Ongoing',
    tags: ['GenAI', 'LLMs', 'Agents', 'Software Evolution'],
    slug: 'software-evolution-generative-ai'
  },
  
];