import { motion } from 'framer-motion';
import { Brain, CheckCircle, XCircle, Flag, AlertCircle, ArrowLeft } from 'lucide-react';
import type { Question, QuizAnswer } from '../types';

interface ReviewSubmitProps {
  playerName: string;
  questions: Question[];
  answers: QuizAnswer[];
  onAnswersChange: (answers: QuizAnswer[]) => void;
  onSubmit: () => void;
  onBackToQuiz: () => void;
}

export default function ReviewSubmit({ playerName, questions, answers, onSubmit, onBackToQuiz }: ReviewSubmitProps) {
  const answeredCount = answers.filter(a => a.selectedAnswer !== null).length;
  const flaggedCount = answers.filter(a => a.flagged).length;
  const total = questions.length;
  const allAnswered = answeredCount === total;

  return (
    <div className="min-h-screen bg-indigo-500 dark:bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white/20 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 md:p-8 shadow-2xl border border-white/30 dark:border-gray-700/50">
          <div className="text-center mb-6">
            <Brain size={40} className="text-yellow-300 mx-auto mb-2" aria-hidden="true" />
            <h1 className="text-2xl font-black text-white">Review Your Answers</h1>
            <p className="text-white/70 text-sm mt-1">
              {playerName}, here's a summary of your answers. You can go back to change any answer.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-5 text-sm">
            <span className="text-white dark:text-gray-300 font-semibold inline-flex items-center gap-1">
              <CheckCircle size={16} className="text-green-300" aria-hidden="true" /> {answeredCount}/{total} answered
            </span>
            {flaggedCount > 0 && (
              <span className="text-white dark:text-gray-300 font-semibold inline-flex items-center gap-1">
                <Flag size={16} className="text-amber-300" aria-hidden="true" /> {flaggedCount} flagged
              </span>
            )}
            {!allAnswered && (
              <span className="text-red-200 font-semibold inline-flex items-center gap-1">
                <AlertCircle size={16} aria-hidden="true" /> {total - answeredCount} unanswered
              </span>
            )}
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto mb-5 pr-1">
            {questions.map((q, i) => {
              const ans = answers[i];
              const isAnswered = ans.selectedAnswer !== null;
              const isCorrect = ans.selectedAnswer === q.correctAnswer;

              return (
                <div
                  key={i}
                  className={`rounded-lg p-3 border-l-4 ${
                    !isAnswered
                      ? 'bg-white/10 border-gray-400'
                      : isCorrect
                        ? 'bg-green-500/20 border-green-400'
                        : 'bg-red-500/20 border-red-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-sm flex items-center gap-1.5">
                      <span className="bg-white/20 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="truncate">{q.question}</span>
                    </span>
                    <span className="flex items-center gap-1.5 shrink-0 ml-2">
                      {ans.flagged && <Flag size={14} className="text-amber-300" aria-hidden="true" />}
                      {isAnswered ? (
                        isCorrect
                          ? <CheckCircle size={16} className="text-green-300" aria-hidden="true" />
                          : <XCircle size={16} className="text-red-300" aria-hidden="true" />
                      ) : (
                        <AlertCircle size={16} className="text-gray-300" aria-hidden="true" />
                      )}
                    </span>
                  </div>
                  {isAnswered && (
                    <p className={`text-xs mt-1 ml-8 ${isCorrect ? 'text-green-200' : 'text-red-200'}`}>
                      Your answer: {q.options[ans.selectedAnswer!]}
                      {!isCorrect && (
                        <span className="text-green-200 ml-2">
                          (Correct: {q.options[q.correctAnswer]})
                        </span>
                      )}
                    </p>
                  )}
                  {!isAnswered && (
                    <p className="text-xs mt-1 ml-8 text-gray-300">Not answered yet</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex gap-3">
            <motion.button
              onClick={onBackToQuiz}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 py-3 bg-white/20 dark:bg-gray-700/50 text-white font-black text-lg rounded-lg shadow-lg hover:bg-white/30 dark:hover:bg-gray-700 transition-all cursor-pointer tracking-wide inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={24} aria-hidden="true" /> Back
            </motion.button>
            <motion.button
              onClick={onSubmit}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex-1 py-3 font-black text-lg rounded-lg shadow-lg transition-all cursor-pointer tracking-wide inline-flex items-center justify-center gap-2 ${
                allAnswered
                  ? 'bg-green-500 text-white hover:bg-green-400'
                  : 'bg-amber-500 text-white hover:bg-amber-400'
              }`}
            >
              <CheckCircle size={24} aria-hidden="true" />
              Submit Quiz
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
