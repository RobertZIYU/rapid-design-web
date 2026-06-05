import type { ReactNode, FormHTMLAttributes } from 'react';
import './FormLayout.css';

export interface FormLayoutProps extends FormHTMLAttributes<HTMLFormElement> {
  /** Form title */
  title?: string;
  /** Optional description below title */
  description?: string;
  /** Form fields and sections */
  children: ReactNode;
  /** Action buttons (Cancel, Submit) */
  actions?: ReactNode;
  /** Max width of form container */
  maxWidth?: 400 | 600 | 800;
}

export const FormLayout = ({
  title,
  description,
  children,
  actions,
  maxWidth = 600,
  className = '',
  ...props
}: FormLayoutProps) => {
  const classes = ['form-layout', className].filter(Boolean).join(' ');

  return (
    <form
      className={classes}
      style={{ maxWidth: `${maxWidth}px` }}
      {...props}
    >
      {/* Header */}
      {(title || description) && (
        <div className="form-layout__header">
          {title && <h2 className="form-layout__title">{title}</h2>}
          {description && (
            <p className="form-layout__description">{description}</p>
          )}
        </div>
      )}

      {/* Fields */}
      <div className="form-layout__fields">{children}</div>

      {/* Actions */}
      {actions && <div className="form-layout__actions">{actions}</div>}
    </form>
  );
};
