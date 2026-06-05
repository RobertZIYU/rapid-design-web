import type { HTMLAttributes } from 'react';
import './Progress.css';

export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Progress value (0-100) */
  value: number;
  /** Maximum value (default 100) */
  max?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  variant?: 'default' | 'success' | 'warning' | 'error';
  /** Show percentage label */
  showLabel?: boolean;
}

export const Progress = ({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showLabel = false,
  className = '',
  ...props
}: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const progressClasses = [
    'progress',
    `progress--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const barClasses = [
    'progress__bar',
    `progress__bar--${variant}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={progressClasses}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...props}
    >
      <div className="progress__track">
        <div
          className={barClasses}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="progress__label">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};
