import type { HTMLAttributes, ReactNode } from 'react';
import './Message.css';

export type MessageVariant = 'info' | 'success' | 'warning' | 'error';

export interface MessageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: MessageVariant;
  title?: string;
  icon?: ReactNode;
  onClose?: () => void;
  children: ReactNode;
}

const defaultIcons: Record<MessageVariant, ReactNode> = {
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
      <circle cx="8" cy="8" r="7" strokeWidth="1.5" />
      <path d="M8 7v4" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  ),
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
      <circle cx="8" cy="8" r="7" strokeWidth="1.5" />
      <path d="M5 8l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
      <path d="M8 1.5L14.5 13.5H1.5L8 1.5z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 6.5v3" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="11.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  ),
  error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
      <circle cx="8" cy="8" r="7" strokeWidth="1.5" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export const Message = ({
  variant = 'info',
  title,
  icon,
  onClose,
  className = '',
  children,
  ...props
}: MessageProps) => {
  const classes = ['message', `message--${variant}`, className].filter(Boolean).join(' ');
  const displayIcon = icon ?? defaultIcons[variant];

  return (
    <div className={classes} role="status" {...props}>
      <div className="message__body">
        <span className="message__icon">{displayIcon}</span>
        <div className="message__content">
          {title && <span className="message__title">{title}</span>}
          <div className="message__text">{children}</div>
        </div>
      </div>
      {onClose && (
        <button
          type="button"
          className="message__close"
          onClick={onClose}
          aria-label="Dismiss message"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};
