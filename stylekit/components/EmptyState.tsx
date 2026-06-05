import type { ReactNode, HTMLAttributes } from 'react';
import './EmptyState.css';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon or illustration */
  icon?: ReactNode;
  /** Heading text */
  title: string;
  /** Description text */
  description?: string;
  /** Primary action button */
  action?: ReactNode;
  /** Secondary action (typically a link) */
  secondaryAction?: ReactNode;
}

export const EmptyState = ({
  icon,
  title,
  description,
  action,
  secondaryAction,
  className = '',
  ...props
}: EmptyStateProps) => {
  const classes = ['empty-state', className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {/* Icon */}
      {icon && <div className="empty-state__icon">{icon}</div>}

      {/* Title */}
      <h2 className="empty-state__title">{title}</h2>

      {/* Description */}
      {description && <p className="empty-state__description">{description}</p>}

      {/* Primary action */}
      {action && <div className="empty-state__action">{action}</div>}

      {/* Secondary action */}
      {secondaryAction && (
        <div className="empty-state__secondary-action">{secondaryAction}</div>
      )}
    </div>
  );
};
