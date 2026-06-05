import type { HTMLAttributes } from 'react';
import './Spinner.css';

export interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Size of the spinner */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label for screen readers */
  label?: string;
}

export const Spinner = ({
  size = 'md',
  label = 'Loading...',
  className = '',
  ...props
}: SpinnerProps) => {
  const spinnerClasses = [
    'spinner',
    `spinner--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={spinnerClasses} role="status" aria-label={label} {...props}>
      <svg className="spinner__svg" viewBox="0 0 24 24" fill="none">
        <circle
          className="spinner__circle"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <span className="spinner__label">{label}</span>
    </div>
  );
};
