export type Category = 'riddle' | 'math' | 'english' | 'general' | 'science';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  minAge: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizSettings {
  playerName: string;
  playerAge: number;
  difficulty: Difficulty;
}

export interface QuizResult {
  question: Question;
  selectedAnswer: number;
  isCorrect: boolean;
}

export interface QuizAnswer {
  selectedAnswer: number | null;
  flagged: boolean;
}

export interface LeaderboardEntry {
  playerName: string;
  score: number;
  total: number;
  pct: number;
  difficulty: Difficulty;
  date: string;
}
