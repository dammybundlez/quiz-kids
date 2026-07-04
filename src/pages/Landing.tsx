import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Star, Target, Trophy, Rocket, Sparkles, Brain, Medal } from 'lucide-react';
import type { Difficulty, LeaderboardEntry } from '../types';

interface LandingProps {
  onStart: (name: string, age: number, difficulty: Difficulty) => void;
  leaderboard: LeaderboardEntry[];
  currentPlayerName: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const difficultyConfig = [
  { key: 'easy' as Difficulty, label: 'Easy', icon: <Star size={22} aria-hidden="true" />, color: 'bg-green-500', desc: 'Simple & fun' },
  { key: 'medium' as Difficulty, label: 'Medium', icon: <Target size={22} aria-hidden="true" />, color: 'bg-amber-500', desc: 'Getting tricky' },
  { key: 'hard' as Difficulty, label: 'Hard', icon: <Trophy size={22} aria-hidden="true" />, color: 'bg-red-500', desc: 'Super challenge' },
];

export default function Landing({ onStart, leaderboard, currentPlayerName }: LandingProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name!');
      return;
    }
    const ageNum = parseInt(age, 10);
    if (!ageNum || ageNum < 3 || ageNum > 16) {
      setError('Please enter a valid age (3-16)!');
      return;
    }
    setError('');
    onStart(name.trim(), ageNum, difficulty);
  };

  return (
    <div className="min-h-screen bg-indigo-500 dark:bg-gray-900 flex items-start justify-center p-4 pt-8 md:pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl"
      >
        <motion.div variants={childVariants} className="text-center mb-6">
          <motion.span
            className="inline-flex items-center justify-center mb-2"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <Brain size={48} className="text-yellow-300" aria-hidden="true" />
          </motion.span>
          <h1 className="text-4xl font-black text-white drop-shadow-lg tracking-tight">
            Quizzy<span className="text-yellow-300">Kids</span>
          </h1>
          <p className="text-white/80 text-base font-semibold mt-1 flex items-center justify-center gap-1.5">
            <Sparkles size={16} className="text-yellow-300" aria-hidden="true" /> Learn & Play!
          </p>
        </motion.div>

        <div className="md:grid md:grid-cols-2 md:gap-6 items-start">
          <motion.form
            variants={childVariants}
            onSubmit={handleSubmit}
            className="bg-white/20 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 md:p-8 shadow-2xl border border-white/30 dark:border-gray-700/50 space-y-5 mb-6 md:mb-0"
          >
            <div>
              <label className="block text-white font-bold text-base mb-1.5">
                What's your name?
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} aria-hidden="true" />
                <input
                  type="text"
                  value={name}
                  onChange={e => { setName(e.target.value); setError(''); }}
                  placeholder="Enter your name..."
                  className="w-full pl-11 pr-4 py-2.5 rounded-lg bg-white/90 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold text-base placeholder-gray-400 dark:placeholder-gray-500 border-2 border-transparent focus:border-yellow-300 focus:outline-none transition-all"
                  maxLength={20}
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-bold text-base mb-1.5">
                How old are you?
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} aria-hidden="true" />
                <input
                  type="number"
                  value={age}
                  onChange={e => { setAge(e.target.value); setError(''); }}
                  placeholder="Your age (3-16)"
                  min={3}
                  max={16}
                  className="w-full pl-11 pr-4 py-2.5 rounded-lg bg-white/90 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold text-base placeholder-gray-400 dark:placeholder-gray-500 border-2 border-transparent focus:border-yellow-300 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-bold text-base mb-2">
                Choose difficulty
              </label>
              <div className="grid grid-cols-3 gap-3">
                {difficultyConfig.map(d => (
                  <motion.button
                    key={d.key}
                    type="button"
                    onClick={() => setDifficulty(d.key)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-3 rounded-lg font-bold text-white text-center cursor-pointer transition-all border-2 ${
                      difficulty === d.key
                        ? `${d.color} border-white scale-105 shadow-lg`
                        : 'bg-white/20 dark:bg-gray-700/50 border-white/20 dark:border-gray-600 hover:bg-white/30 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="inline-flex items-center justify-center w-full mb-0.5">
                      {d.icon}
                    </span>
                    <span className="text-xs">{d.label}</span>
                    <span className="text-[10px] block opacity-80 mt-0.5">{d.desc}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-500/80 text-white px-3 py-1.5 rounded-lg text-center font-semibold text-sm"
                role="alert"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-amber-500 text-white font-black text-lg rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer tracking-wide inline-flex items-center justify-center gap-2"
            >
              <Rocket size={24} aria-hidden="true" />
              Start Quiz!
            </motion.button>
          </motion.form>

          {leaderboard.length > 0 && (
            <motion.div variants={childVariants} className="bg-white/20 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 md:p-8 shadow-2xl border border-white/30 dark:border-gray-700/50">
              <h3 className="font-bold text-white mb-3 inline-flex items-center gap-1.5 text-lg">
                <Medal size={20} className="text-yellow-300" aria-hidden="true" /> Leaderboard
              </h3>
              <div className="space-y-1.5 max-h-96 overflow-y-auto">
                {leaderboard.map((entry, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between rounded-lg p-2.5 text-sm ${
                      entry.playerName === currentPlayerName
                        ? 'bg-amber-500/30 ring-1 ring-amber-300'
                        : 'bg-white/10 dark:bg-gray-700/40'
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
                      <span className="text-white font-semibold truncate max-w-28">{entry.playerName}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-white/60 text-xs">
                        {entry.score}/{entry.total}
                      </span>
                      <span className="text-white font-bold text-sm">
                        {entry.pct}%
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
