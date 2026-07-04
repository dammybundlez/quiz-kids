import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Calculator, BookOpen, Globe, FlaskConical, Award, RefreshCw, CheckCircle, XCircle, FileText, Lightbulb, Medal } from '../components/Icons';
import type { QuizResult, LeaderboardEntry } from '../types';
import Confetti from '../components/Confetti';

interface ResultsProps {
  results: QuizResult[];
  playerName: string;
  leaderboard: LeaderboardEntry[];
  onRestart: () => void;
}

export default function Results({ results, playerName, leaderboard, onRestart }: ResultsProps) {
  const stats = useMemo(() => {
    const total = results.length;
    const correct = results.filter(r => r.isCorrect).length;
    const pct = Math.round((correct / total) * 100);
    const byCategory: Record<string, { correct: number; total: number }> = {};
    results.forEach(r => {
      const cat = r.question.category;
      if (!byCategory[cat]) byCategory[cat] = { correct: 0, total: 0 };
      byCategory[cat].total++;
      if (r.isCorrect) byCategory[cat].correct++;
    });
    return { total, correct, pct, byCategory };
  }, [results]);

  const getMessage = () => {
    if (stats.pct >= 90) return { emoji: '🏆', msg: 'Amazing! You are a genius!', color: 'text-yellow-300' };
    if (stats.pct >= 70) return { emoji: '🌟', msg: 'Great job! Keep it up!', color: 'text-green-300' };
    if (stats.pct >= 50) return { emoji: '👍', msg: 'Good effort! Practice more!', color: 'text-blue-300' };
    return { emoji: '💪', msg: 'Keep trying! You will get better!', color: 'text-pink-300' };
  };

  const message = getMessage();

  const categoryIcons: Record<string, React.ReactNode> = {
    riddle: <Puzzle size={16} aria-hidden="true" />,
    math: <Calculator size={16} aria-hidden="true" />,
    english: <BookOpen size={16} aria-hidden="true" />,
    general: <Globe size={16} aria-hidden="true" />,
    science: <FlaskConical size={16} aria-hidden="true" />,
  };

  const categoryLabels: Record<string, string> = {
    riddle: 'Riddles',
    math: 'Math',
    english: 'English',
    general: 'General',
    science: 'Science',
  };

  return (
    <div className="min-h-screen bg-indigo-500 dark:bg-gray-900 flex items-center justify-center p-4">
      <Confetti active={stats.pct >= 70} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full max-w-lg"
      >
        <div className="bg-white/20 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 md:p-10 shadow-2xl border border-white/30 dark:border-gray-700/50 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            className="text-7xl mb-4"
          >
            {message.emoji}
          </motion.div>

          <h1 className="text-4xl font-black text-white mb-1 drop-shadow-lg">
            {message.msg}
          </h1>
          <p className="text-white/80 text-lg font-semibold mb-6">
            Great work, {playerName}!
          </p>

          <div className="bg-white/20 dark:bg-gray-800/40 rounded-xl p-4 mb-5">
            <div className="inline-flex items-center gap-3 text-6xl font-black text-white mb-1 drop-shadow">
              <Award size={48} className="text-yellow-300" aria-hidden="true" /> {stats.pct}%
            </div>
            <p className="text-white/80 font-semibold">
              {stats.correct} / {stats.total} correct
            </p>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {Object.entries(stats.byCategory).map(([cat, s]) => (
                    <div key={cat} className="bg-white/20 dark:bg-gray-800/40 rounded-lg p-2">
                    <div className="text-lg inline-flex items-center gap-1.5">{categoryIcons[cat]} {categoryLabels[cat] || cat}</div>
                    <div className="text-2xl font-black text-white">
                    {s.correct}/{s.total}
                  </div>
                  <div className="text-xs text-white/70">
                    {Math.round((s.correct / s.total) * 100)}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/20 dark:bg-gray-800/40 rounded-xl p-3 mb-5">
            <h3 className="font-bold text-white mb-2 inline-flex items-center gap-1.5">
              <FileText size={18} aria-hidden="true" /> Corrections & Review
            </h3>
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {results.map((r, i) => (
                <div
                  key={i}
                  className={`rounded-lg p-2 text-left text-sm border-l-4 ${r.isCorrect ? 'bg-green-500/20 border-green-400' : 'bg-red-500/20 border-red-400'}`}
                >
                  <p className="text-white font-bold flex items-center gap-1.5">
                    {r.isCorrect ? <CheckCircle size={14} className="text-green-300 shrink-0" aria-hidden="true" /> : <XCircle size={14} className="text-red-300 shrink-0" aria-hidden="true" />}
                    {r.question.question}
                  </p>
                  <div className="mt-1 space-y-0.5">
                    <p className={r.isCorrect ? 'text-green-200' : 'text-red-200'}>
                      Your answer: {r.question.options[r.selectedAnswer]}
                    </p>
                    {!r.isCorrect && (
                      <p className="text-green-200">
                        Correct answer: {r.question.options[r.question.correctAnswer]}
                      </p>
                    )}
                    {r.question.explanation && (
                      <p className="text-white/70 text-xs inline-flex items-center gap-1 mt-1">
                        <Lightbulb size={12} aria-hidden="true" /> {r.question.explanation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {leaderboard.length > 0 && (
            <div className="bg-white/20 dark:bg-gray-800/40 rounded-xl p-3 mb-5">
              <h3 className="font-bold text-white mb-2 inline-flex items-center gap-1.5">
                <Medal size={18} className="text-yellow-300" aria-hidden="true" /> Leaderboard
              </h3>
              <div className="space-y-1 max-h-48 overflow-y-auto">
                {leaderboard.map((entry, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between rounded-lg p-2 text-sm ${
                      entry.playerName === playerName && entry.pct === stats.pct
                        ? 'bg-amber-500/30 ring-1 ring-amber-300'
                        : 'bg-white/10 dark:bg-gray-800/40'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        i === 0 ? 'bg-yellow-400 text-yellow-900' :
                        i === 1 ? 'bg-gray-300 text-gray-700' :
                        i === 2 ? 'bg-amber-600 text-white' :
                        'bg-white/20 text-white'
                      }`}>
                        {i + 1}
                      </span>
                      <span className="text-white font-semibold">{entry.playerName}</span>
                    </span>
                    <span className="text-white font-bold">
                      {entry.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <motion.button
            onClick={onRestart}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-amber-500 text-white font-black text-lg rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer tracking-wide inline-flex items-center justify-center gap-2"
          >
            <RefreshCw size={24} aria-hidden="true" /> Play Again!
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
