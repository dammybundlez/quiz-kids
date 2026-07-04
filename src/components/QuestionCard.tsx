import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Puzzle, Calculator, BookOpen, Globe, FlaskConical, CheckCircle, XCircle, Lightbulb, Flag } from './Icons';
import type { Question } from '../types';
import { playCorrect, playWrong } from '../lib/sound';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  flagged: boolean;
  onSelect: (index: number) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  riddle: <Puzzle size={18} aria-hidden="true" />,
  math: <Calculator size={18} aria-hidden="true" />,
  english: <BookOpen size={18} aria-hidden="true" />,
  general: <Globe size={18} aria-hidden="true" />,
  science: <FlaskConical size={18} aria-hidden="true" />,
};

const categoryLabel: Record<string, string> = {
  riddle: 'Riddle',
  math: 'Math',
  english: 'English',
  general: 'General',
  science: 'Science',
};

const optionColors = [
  'bg-sky-500 hover:shadow-sky-400/40',
  'bg-pink-500 hover:shadow-pink-400/40',
  'bg-emerald-500 hover:shadow-emerald-400/40',
  'bg-purple-500 hover:shadow-purple-400/40',
];

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  flagged,
  onSelect,
}: QuestionCardProps) {
  const showResult = selectedAnswer !== null;
  const isCorrect = selectedAnswer === question.correctAnswer;
  const prevSelected = useRef(selectedAnswer);

  useEffect(() => {
    if (selectedAnswer !== null && selectedAnswer !== prevSelected.current) {
      if (isCorrect) playCorrect();
      else playWrong();
    }
    prevSelected.current = selectedAnswer;
  }, [selectedAnswer, isCorrect]);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="w-full max-w-3xl mx-auto px-4"
    >
      <div className="bg-white/20 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 md:p-10 shadow-2xl border border-white/30 dark:border-gray-700/50">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-2">
            <span className="bg-white/30 text-white px-3 py-1 rounded-full text-sm font-bold inline-flex items-center gap-1.5">
              {categoryIcons[question.category]} {categoryLabel[question.category]}
            </span>
            {flagged && (
              <span className="bg-amber-500/80 text-white px-2 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1">
                <Flag size={12} aria-hidden="true" /> Flagged
              </span>
            )}
          </span>
          <span className="text-white/80 font-bold text-sm">
            {questionNumber} / {totalQuestions}
          </span>
        </div>

        <h2 className="text-xl font-extrabold text-white mb-4 leading-tight">
          {question.question}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {question.options.map((opt, i) => {
            let state = '';
            if (showResult) {
              if (i === question.correctAnswer) state = 'ring-4 ring-green-400 bg-green-500/40 scale-105';
              else if (i === selectedAnswer && !isCorrect) state = 'ring-4 ring-red-400 bg-red-500/40';
              else state = 'opacity-50';
            } else {
              if (i === selectedAnswer) state = 'ring-4 ring-white/60 scale-105';
              state += ' hover:scale-102 hover:shadow-lg';
            }

            return (
              <motion.button
                key={i}
                onClick={() => onSelect(i)}
                whileTap={{ scale: 0.97 }}
                className={`p-3 rounded-lg ${optionColors[i]} text-white font-bold text-base transition-all duration-300 cursor-pointer border border-white/20 ${state}`}
              >
                <span className="block text-xs opacity-70 mb-1">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </motion.button>
            );
          })}
        </div>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 text-center"
          >
            {isCorrect ? (
                <span className="inline-flex items-center gap-2 text-2xl font-bold text-green-200">
                  <CheckCircle size={28} className="text-green-300" aria-hidden="true" /> Correct!
              </span>
            ) : (
              <>
                <span className="inline-flex items-center gap-2 text-2xl font-bold text-red-200">
                  <XCircle size={28} className="text-red-300" aria-hidden="true" /> Oops!
                </span>
                {question.explanation && (
                  <p className="text-white/80 text-sm mt-2 font-semibold inline-flex items-center gap-1.5">
                    <Lightbulb size={16} aria-hidden="true" /> {question.explanation}
                  </p>
                )}
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
