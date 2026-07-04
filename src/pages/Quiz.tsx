import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, User } from 'lucide-react';
import type { Question, QuizResult } from '../types';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';

interface QuizProps {
  playerName: string;
  questions: Question[];
  onFinish: (results: QuizResult[]) => void;
}

export default function Quiz({ playerName, questions, onFinish }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<QuizResult[]>([]);
  const current = questions[currentIndex];

  const handleAnswer = useCallback(
    (selectedIndex: number) => {
      const result: QuizResult = {
        question: current,
        selectedAnswer: selectedIndex,
        isCorrect: selectedIndex === current.correctAnswer,
      };
      const newResults = [...results, result];
      setResults(newResults);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setTimeout(() => onFinish(newResults), 500);
      }
    },
    [current, currentIndex, questions.length, results, onFinish]
  );

  return (
    <div className="min-h-screen bg-indigo-500 flex flex-col items-center justify-center p-4 relative">
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
        <User size={14} className="text-white" />
        <span className="text-white font-bold text-sm">{playerName}</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mb-6 text-center"
      >
        <h1 className="text-3xl font-black text-white drop-shadow-lg inline-flex items-center gap-2">
          <Brain size={28} className="text-yellow-300" /> QuizzyKids
        </h1>
      </motion.div>

      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <AnimatePresence mode="wait">
        <QuestionCard
          key={current.id}
          question={current}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      </AnimatePresence>
    </div>
  );
}
