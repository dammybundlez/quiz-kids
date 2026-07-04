import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = ((current - 1) / total) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-4">
      <div className="relative h-3 bg-white/20 dark:bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          className="absolute inset-y-0 left-0 bg-amber-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-bold text-white drop-shadow">
            {Math.round(pct)}%
          </span>
        </div>
      </div>
    </div>
  );
}
