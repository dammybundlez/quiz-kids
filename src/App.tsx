import { useState, useCallback, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import type { Difficulty, Question, QuizResult, QuizAnswer, LeaderboardEntry } from './types';
import { generateQuizQuestions } from './data/questions';
import Landing from './pages/Landing';
import Quiz from './pages/Quiz';
import ReviewSubmit from './pages/ReviewSubmit';
import Results from './pages/Results';

type Phase = 'landing' | 'quiz' | 'review' | 'results';

function loadLeaderboard(): LeaderboardEntry[] {
  try {
    const data = localStorage.getItem('quizzy-leaderboard');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveLeaderboard(entries: LeaderboardEntry[]) {
  try {
    localStorage.setItem('quizzy-leaderboard', JSON.stringify(entries.slice(0, 20)));
  } catch {}
}

export default function App() {
  const [phase, setPhase] = useState<Phase>('landing');
  const [playerName, setPlayerName] = useState('');
  const [playerAge, setPlayerAge] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(loadLeaderboard);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('quizzy-dark-mode');
      if (saved !== null) return saved === 'true';
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try {
      localStorage.setItem('quizzy-dark-mode', String(darkMode));
    } catch {}
  }, [darkMode]);

  const toggleTheme = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  const handleStart = useCallback(
    (name: string, age: number, diff: Difficulty) => {
      setPlayerName(name);
      setPlayerAge(age);
      setDifficulty(diff);
      const qs = generateQuizQuestions(age, diff);
      setQuestions(qs);
      setAnswers(qs.map(() => ({ selectedAnswer: null, flagged: false })));
      setResults([]);
      setPhase('quiz');
    },
    []
  );

  const handleAnswersChange = useCallback((ans: QuizAnswer[]) => {
    setAnswers(ans);
  }, []);

  const handleReview = useCallback(() => {
    setPhase('review');
  }, []);

  const handleBackToQuiz = useCallback(() => {
    setPhase('quiz');
  }, []);

  const handleFinish = useCallback((res: QuizResult[]) => {
    setResults(res);
    const pct = Math.round((res.filter(r => r.isCorrect).length / res.length) * 100);
    const entry: LeaderboardEntry = {
      playerName,
      score: res.filter(r => r.isCorrect).length,
      total: res.length,
      pct,
      difficulty,
      date: new Date().toLocaleDateString(),
    };
    const updated = [...leaderboard, entry].sort((a, b) => b.pct - a.pct).slice(0, 20);
    setLeaderboard(updated);
    saveLeaderboard(updated);
    setPhase('results');
  }, [playerName, difficulty, leaderboard]);

  const handleSubmitReview = useCallback(() => {
    const res: QuizResult[] = questions.map((q, i) => ({
      question: q,
      selectedAnswer: answers[i].selectedAnswer ?? 0,
      isCorrect: answers[i].selectedAnswer === q.correctAnswer,
    }));
    handleFinish(res);
  }, [questions, answers, handleFinish]);

  const handleRestart = useCallback(() => {
    setPhase('landing');
    setQuestions([]);
    setAnswers([]);
    setResults([]);
  }, []);

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 hover:bg-white/30 transition-all cursor-pointer"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? <Sun size={18} className="text-white" aria-hidden="true" /> : <Moon size={18} className="text-white" aria-hidden="true" />}
      </button>

      {phase === 'quiz' && (
        <Quiz
          key={playerName + difficulty + playerAge}
          playerName={playerName}
          questions={questions}
          answers={answers}
          onAnswersChange={handleAnswersChange}
          onReview={handleReview}
        />
      )}

      {phase === 'review' && (
        <ReviewSubmit
          playerName={playerName}
          questions={questions}
          answers={answers}
          onAnswersChange={handleAnswersChange}
          onSubmit={handleSubmitReview}
          onBackToQuiz={handleBackToQuiz}
        />
      )}

      {phase === 'results' && (
        <Results
          results={results}
          playerName={playerName}
          leaderboard={leaderboard}
          onRestart={handleRestart}
        />
      )}

      {phase === 'landing' && <Landing onStart={handleStart} />}
    </>
  );
}
