import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  color: string;
  emoji: string;
  delay: number;
  size: number;
}

const emojis = ['🌟', '✨', '⭐', '🎉', '🎊', '💫', '🌈', '🏆'];
const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'];

export default function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    const items: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      delay: Math.random() * 0.5,
      size: 16 + Math.random() * 20,
    }));
    setParticles(items);

    const timer = setTimeout(() => setParticles([]), 4000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map(p => (
          <motion.div
            key={p.id}
            initial={{ y: -40, x: `${p.x}vw`, opacity: 1, rotate: 0 }}
            animate={{ y: '100vh', opacity: 0, rotate: 720 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 + p.delay, ease: 'easeIn' }}
            className="absolute top-0"
            style={{ fontSize: p.size, left: `${p.x}%` }}
          >
            {p.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
