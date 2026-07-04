import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, User, Flag, Clock, SkipForward, List, CheckCircle, XCircle } from 'lucide-react';
import type { Question, QuizAnswer } from '../types';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import { playFinish } from '../lib/sound';


interface QuizProps {
  playerName: string;
  questions: Question[];
  answers: QuizAnswer[];
  onAnswersChange: (answers: QuizAnswer[]) => void;
  onReview: () => void;
}

const TIME_PER_QUESTION = 30;

export default function Quiz({ playerName, questions, answers, onAnswersChange, onReview }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const firstUnanswered = answers.findIndex(a => a.selectedAnswer === null);
    return firstUnanswered >= 0 ? firstUnanswered : 0;
  });
  const [timeLeft, setTimeLeft] = useState(questions.length * TIME_PER_QUESTION);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const answeredCount = answers.filter(a => a.selectedAnswer !== null).length;
  const flaggedCount = answers.filter(a => a.flagged).length;
  const unanswered = questions.length - answeredCount;
  const allAnswered = unanswered === 0;
  const current = questions[currentIndex];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) { playFinish(); onReview(); }
  }, [timeLeft, onReview]);

  const updateAnswer = useCallback((index: number, upd: Partial<QuizAnswer>) => {
    onAnswersChange(answers.map((a, i) => i === index ? { ...a, ...upd } : a));
  }, [answers, onAnswersChange]);

  const handleSelect = useCallback((idx: number) => {
    updateAnswer(currentIndex, { selectedAnswer: idx });
  }, [currentIndex, updateAnswer]);

  const handleFlag = useCallback(() => {
    updateAnswer(currentIndex, { flagged: !answers[currentIndex].flagged });
  }, [currentIndex, answers, updateAnswer]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex + 1 < questions.length) setCurrentIndex(prev => prev + 1);
  }, [currentIndex, questions.length]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  }, [currentIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '4') {
        const idx = parseInt(e.key) - 1;
        if (idx < current.options.length) handleSelect(idx);
      } else if (e.key === 'f' || e.key === 'F') {
        handleFlag();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        goPrev();
      } else if (e.key === 'Enter') {
        if (allAnswered) { playFinish(); onReview(); }
        else goNext();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current, handleSelect, handleFlag, goNext, goPrev, onReview, allAnswered]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const timerWarning = timeLeft <= 30;

  return (
    <div className="min-h-screen bg-indigo-500 flex flex-col items-center justify-center p-4 relative transition-colors duration-300">
      <div className="absolute top-4 right-16 flex items-center gap-2 z-10">
        <div className={`flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 ${timerWarning ? 'bg-red-500/40 border-red-400' : ''}`}>
          <Clock size={14} className="text-white" />
          <span className="text-white font-bold text-sm tabular-nums">{formatTime(timeLeft)}</span>
        </div>
      </div>

      <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 z-10">
        <User size={14} className="text-white" />
        <span className="text-white font-bold text-sm">{playerName}</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl text-center mb-3"
      >
        <h1 className="text-2xl font-black text-white drop-shadow-lg inline-flex items-center gap-2">
          <Brain size={24} className="text-yellow-300" /> QuizzyKids
        </h1>
      </motion.div>

      <ProgressBar current={answeredCount} total={questions.length} />

      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="text-white/80 text-sm font-semibold inline-flex items-center gap-1">
          <CheckCircle size={14} className="text-green-300" /> {answeredCount} answered
        </span>
        {flaggedCount > 0 && (
          <span className="text-white/80 text-sm font-semibold inline-flex items-center gap-1">
            <Flag size={14} className="text-amber-300" /> {flaggedCount} flagged
          </span>
        )}
        {unanswered > 0 && (
          <span className="text-white/80 text-sm font-semibold inline-flex items-center gap-1">
            <XCircle size={14} className="text-red-300" /> {unanswered} left
          </span>
        )}
      </div>

      <div className="flex w-full max-w-3xl gap-4">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <QuestionCard
              key={current.id}
              question={current}
              questionNumber={currentIndex + 1}
              totalQuestions={questions.length}
              selectedAnswer={answers[currentIndex].selectedAnswer}
              flagged={answers[currentIndex].flagged}
              onSelect={handleSelect}
            />
          </AnimatePresence>

          <div className="flex items-center justify-between mt-4 max-w-3xl mx-auto px-4 gap-2">
            <div className="flex gap-2">
              <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer text-sm"
              >
                ← Prev
              </button>
              <button
                onClick={handleFlag}
                className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer text-sm inline-flex items-center gap-1.5 ${
                  answers[currentIndex].flagged
                    ? 'bg-amber-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Flag size={14} /> {answers[currentIndex].flagged ? 'Flagged' : 'Flag'}
              </button>
            </div>
            <div className="flex gap-2">
              {currentIndex + 1 < questions.length ? (
                <button
                  onClick={goNext}
                  className="px-4 py-2 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-400 transition-all cursor-pointer text-sm inline-flex items-center gap-1.5"
                >
                  Next <SkipForward size={14} />
                </button>
              ) : (
                <button
                  onClick={() => { playFinish(); onReview(); }}
                  className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer text-sm inline-flex items-center gap-1.5 ${
                    allAnswered
                      ? 'bg-green-500 text-white hover:bg-green-400'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <List size={14} /> Review & Submit
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center gap-2">
          <span className="text-white/70 text-xs font-semibold">Questions</span>
          <div className="grid grid-cols-4 gap-1.5">
            {questions.map((_, i) => {
              const isCurrent = i === currentIndex;
              const ans = answers[i];
              const isAnswered = ans.selectedAnswer !== null;
              const isFlagged = ans.flagged;
              let dotClass = 'w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-all cursor-pointer border';
              if (isCurrent) dotClass += ' ring-2 ring-white scale-110';
              if (isAnswered && isFlagged) dotClass += ' bg-green-500/70 border-green-300 text-white';
              else if (isAnswered) dotClass += ' bg-green-500/50 border-green-300/50 text-white';
              else if (isFlagged) dotClass += ' bg-amber-500/70 border-amber-300 text-white';
              else dotClass += ' bg-white/20 border-white/30 text-white/70 hover:bg-white/30';

              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={dotClass}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <span className="text-white/50 text-[10px] mt-1">
            {unanswered > 0 ? `${unanswered} unanswered` : 'All done!'}
          </span>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-indigo-600/90 backdrop-blur-md border-t border-white/20 p-2">
        <div className="flex items-center justify-center gap-1 max-w-md mx-auto">
          {questions.map((_, i) => {
            const isCurrent = i === currentIndex;
            const ans = answers[i];
            const isAnswered = ans.selectedAnswer !== null;
            const isFlagged = ans.flagged;
            let dotClass = 'w-7 h-7 rounded text-xs font-bold flex items-center justify-center transition-all border';
            if (isCurrent) dotClass += ' ring-2 ring-white scale-110';
            if (isAnswered && isFlagged) dotClass += ' bg-green-500/70 border-green-300 text-white';
            else if (isAnswered) dotClass += ' bg-green-500/50 border-green-300/50 text-white';
            else if (isFlagged) dotClass += ' bg-amber-500/70 border-amber-300 text-white';
            else dotClass += ' bg-white/20 border-white/30 text-white/70';

            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={dotClass}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
