import { cn } from '@/lib/utils';

type SkillBadgeProps = {
  name: string;
  color: string;
};

const colorVariants = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  red: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
  slate: 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300',
};

const SkillBadge = ({ name, color }: SkillBadgeProps) => {
  return (
    <div
      className={cn(
        'px-3 py-1 rounded-full text-sm font-medium inline-flex items-center',
        colorVariants[color as keyof typeof colorVariants] || colorVariants.slate
      )}
    >
      {name}
    </div>
  );
};

export default SkillBadge;