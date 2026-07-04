import type { Question, Difficulty } from '../types';

let idCounter = 1000;

function getId(): string {
  return `m${idCounter++}`;
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestion(
  question: string,
  correctValue: number,
  wrongOptions: number[],
  difficulty: Difficulty,
  minAge: number,
  explanation?: string
): Question {
  const allOptions = shuffleArray([correctValue.toString(), ...wrongOptions.map(String)]);
  const correctIndex = allOptions.indexOf(correctValue.toString());
  return {
    id: getId(),
    category: 'math',
    difficulty,
    minAge,
    question,
    options: allOptions,
    correctAnswer: correctIndex,
    explanation,
  };
}

function generateEasyAddition(): Question {
  const a = randInt(1, 10);
  const b = randInt(1, 10);
  const correct = a + b;
  const wrongs = [
    correct + randInt(-2, 2),
    correct + randInt(-3, 3),
    randInt(1, 20),
  ].filter(v => v !== correct && v >= 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(correct + wrongs.length + 1);
  return buildQuestion(`What is ${a} + ${b}?`, correct, wrongs.slice(0, 3), 'easy', 5);
}

function generateEasySubtraction(): Question {
  const a = randInt(2, 10);
  const b = randInt(1, a);
  const correct = a - b;
  const wrongs = [
    correct + randInt(-2, 2),
    correct + randInt(1, 4),
    randInt(0, 10),
  ].filter(v => v !== correct && v >= 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(correct + wrongs.length + 1);
  return buildQuestion(`What is ${a} - ${b}?`, correct, wrongs.slice(0, 3), 'easy', 5);
}

function generateMediumAddition(): Question {
  const a = randInt(10, 100);
  const b = randInt(10, 100);
  const correct = a + b;
  const wrongs = [
    correct + randInt(-5, 5),
    correct + randInt(-10, 10),
    correct + randInt(-20, 20),
  ].filter(v => v !== correct && v > 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(correct + wrongs.length * 10);
  return buildQuestion(`What is ${a} + ${b}?`, correct, wrongs.slice(0, 3), 'medium', 8);
}

function generateMediumSubtraction(): Question {
  const a = randInt(50, 200);
  const b = randInt(10, a);
  const correct = a - b;
  const wrongs = [
    correct + randInt(-5, 5),
    correct + randInt(-10, 10),
    correct + randInt(-20, 20),
  ].filter(v => v !== correct && v > 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(correct + wrongs.length * 5);
  return buildQuestion(`What is ${a} - ${b}?`, correct, wrongs.slice(0, 3), 'medium', 8);
}

function generateMediumMultiplication(): Question {
  const a = randInt(2, 12);
  const b = randInt(2, 12);
  const correct = a * b;
  const wrongs = [
    a * (b + 1),
    (a + 1) * b,
    correct + a,
  ].filter(v => v !== correct && v > 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(correct + randInt(1, 10) * a);
  return buildQuestion(`What is ${a} × ${b}?`, correct, wrongs.slice(0, 3), 'medium', 8);
}

function generateHardAddition(): Question {
  const a = randInt(100, 999);
  const b = randInt(100, 999);
  const correct = a + b;
  const wrongs = [
    correct + randInt(-10, 10),
    correct + randInt(-50, 50),
    correct + randInt(-100, 100),
  ].filter(v => v !== correct && v > 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(correct + wrongs.length * 100);
  return buildQuestion(`What is ${a} + ${b}?`, correct, wrongs.slice(0, 3), 'hard', 10);
}

function generateHardSubtraction(): Question {
  const a = randInt(200, 999);
  const b = randInt(100, a);
  const correct = a - b;
  const wrongs = [
    correct + randInt(-10, 10),
    correct + randInt(-50, 50),
    correct + randInt(-100, 100),
  ].filter(v => v !== correct && v > 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(Math.abs(correct - wrongs.length * 50));
  return buildQuestion(`What is ${a} - ${b}?`, correct, wrongs.slice(0, 3), 'hard', 10);
}

function generateHardMultiplication(): Question {
  const a = randInt(5, 25);
  const b = randInt(5, 25);
  const correct = a * b;
  const wrongs = [
    a * (b + 1),
    (a + 1) * b,
    correct + a + b,
  ].filter(v => v !== correct && v > 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(correct + randInt(1, 20) * 5);
  return buildQuestion(`What is ${a} × ${b}?`, correct, wrongs.slice(0, 3), 'hard', 10);
}

function generateHardDivision(): Question {
  const b = randInt(2, 15);
  const result = randInt(2, 20);
  const a = b * result;
  const correct = result;
  const wrongs = [
    result + randInt(-2, 2),
    result + randInt(-5, 5),
    result + randInt(1, 10),
  ].filter(v => v !== correct && v > 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(result + wrongs.length + 1);
  return buildQuestion(`What is ${a} ÷ ${b}?`, correct, wrongs.slice(0, 3), 'hard', 10);
}

function generateMediumDivision(): Question {
  const b = randInt(2, 10);
  const result = randInt(2, 10);
  const a = b * result;
  const correct = result;
  const wrongs = [
    result + randInt(-2, 2),
    result + randInt(1, 3),
    randInt(1, 15),
  ].filter(v => v !== correct && v > 0).slice(0, 3);
  while (wrongs.length < 3) wrongs.push(result + wrongs.length + 1);
  return buildQuestion(`What is ${a} ÷ ${b}?`, correct, wrongs.slice(0, 3), 'medium', 9);
}

const generators: Record<Difficulty, (() => Question)[]> = {
  easy: [generateEasyAddition, generateEasySubtraction, generateEasyAddition, generateEasySubtraction],
  medium: [generateMediumAddition, generateMediumSubtraction, generateMediumMultiplication, generateMediumDivision],
  hard: [generateHardAddition, generateHardSubtraction, generateHardMultiplication, generateHardDivision],
};

export function generateMathQuestions(difficulty: Difficulty, count: number): Question[] {
  const genList = generators[difficulty];
  const questions: Question[] = [];
  for (let i = 0; i < count; i++) {
    const gen = genList[i % genList.length];
    questions.push(gen());
  }
  return questions;
}
