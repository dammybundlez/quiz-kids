import { useState, useCallback } from 'react';
import type { Difficulty, Question, QuizResult } from './types';
import { generateQuizQuestions } from './data/questions';
import Landing from './pages/Landing';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

type Phase = 'landing' | 'quiz' | 'results';

export default function App() {
  const [phase, setPhase] = useState<Phase>('landing');
  const [playerName, setPlayerName] = useState('');
  const [playerAge, setPlayerAge] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);

  const handleStart = useCallback(
    (name: string, age: number, diff: Difficulty) => {
      setPlayerName(name);
      setPlayerAge(age);
      setDifficulty(diff);
      const qs = generateQuizQuestions(age, diff);
      setQuestions(qs);
      setPhase('quiz');
    },
    []
  );

  const handleFinish = useCallback((res: QuizResult[]) => {
    setResults(res);
    setPhase('results');
  }, []);

  const handleRestart = useCallback(() => {
    setPhase('landing');
    setQuestions([]);
    setResults([]);
  }, []);

  if (phase === 'quiz') {
    return <Quiz key={playerName + difficulty + playerAge + Date.now()} playerName={playerName} questions={questions} onFinish={handleFinish} />;
  }

  if (phase === 'results') {
    return <Results results={results} playerName={playerName} onRestart={handleRestart} />;
  }

  return <Landing onStart={handleStart} />;
}
