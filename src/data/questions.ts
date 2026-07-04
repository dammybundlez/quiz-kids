import type { Question, Difficulty } from '../types';
import riddles from './riddles';
import { generateMathQuestions } from './mathQuestions';
import { generateEnglishQuestions } from './englishQuestions';
import { generateGeneralQuestions } from './generalQuestions';
import { generateScienceQuestions } from './scienceQuestions';

const QUESTIONS_PER_ROUND = 20;

export function generateQuizQuestions(
  age: number,
  difficulty: Difficulty
): Question[] {
  const isYoung = age <= 7;
  const isOld = age >= 11;

  let riddleDifficulty: Difficulty;
  let mathDifficulty: Difficulty;
  let englishDifficulty: Difficulty;
  let generalDifficulty: Difficulty;
  let scienceDifficulty: Difficulty;

  if (isYoung) {
    riddleDifficulty = 'easy';
    mathDifficulty = 'easy';
    englishDifficulty = 'easy';
    generalDifficulty = 'easy';
    scienceDifficulty = 'easy';
  } else if (isOld) {
    riddleDifficulty = difficulty === 'easy' ? 'medium' : difficulty;
    mathDifficulty = difficulty;
    englishDifficulty = difficulty;
    generalDifficulty = difficulty;
    scienceDifficulty = difficulty;
  } else {
    riddleDifficulty = difficulty === 'hard' ? 'hard' : 'medium';
    mathDifficulty = difficulty;
    englishDifficulty = difficulty;
    generalDifficulty = difficulty;
    scienceDifficulty = difficulty;
  }

  const availableRiddles = riddles.filter(
    r => r.difficulty === riddleDifficulty && r.minAge <= age
  );

  const riddleCount = Math.min(4, availableRiddles.length);
  const mathCount = 4;
  const englishCount = 4;
  const generalCount = 4;
  const scienceCount = 4;

  const shuffledRiddles = [...availableRiddles].sort(() => Math.random() - 0.5);
  const selectedRiddles = shuffledRiddles.slice(0, riddleCount);

  const mathQuestions = generateMathQuestions(mathDifficulty, mathCount);
  const englishQuestions = generateEnglishQuestions(englishDifficulty, englishCount, age);
  const generalQuestions = generateGeneralQuestions(generalDifficulty, generalCount);
  const scienceQuestions = generateScienceQuestions(scienceDifficulty, scienceCount);

  const all = [
    ...selectedRiddles,
    ...mathQuestions,
    ...englishQuestions,
    ...generalQuestions,
    ...scienceQuestions,
  ].sort(() => Math.random() - 0.5);

  return all.slice(0, QUESTIONS_PER_ROUND);
}

export function getDifficultyForAge(age: number): Difficulty {
  if (age <= 7) return 'easy';
  if (age <= 10) return 'medium';
  return 'hard';
}
