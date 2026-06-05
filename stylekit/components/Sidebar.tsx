import { useState } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { ExpandIcon, CollapseIcon } from '../icons';
import './Sidebar.css';

const COLLAPSED_WIDTH = 56;
const DEFAULT_EXPANDED_WIDTH = 320;

export interface SidebarProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** Logo content rendered in the header (image, SVG, or any node). */
  logo?: ReactNode;
  /** Brand text shown next to the logo when expanded. */
  brandLabel?: string;
  /**
   * Body content rendered below the header. The same content renders in both
   * collapsed and expanded states. Pass a render function `(expanded) => ...`
   * to vary content based on state.
   */
  children: ReactNode | ((isExpanded: boolean) => ReactNode);
  /**
   * Optional footer content (avatar, settings button, etc.).
   * Pass a render function `(expanded) => ...` to vary footer layout based on state.
   */
  footer?: ReactNode | ((isExpanded: boolean) => ReactNode);
  /** Width in pixels when expanded (default 320). */
  expandedWidth?: number;
  /** Initial expanded state for uncontrolled usage. */
  defaultExpanded?: boolean;
  /** Controlled expanded state. */
  expanded?: boolean;
  /** Called when expand/collapse state changes. */
  onExpandChange?: (expanded: boolean) => void;
}

export const Sidebar = ({
  logo,
  brandLabel,
  children,
  footer,
  expandedWidth = DEFAULT_EXPANDED_WIDTH,
  defaultExpanded = false,
  expanded: controlledExpanded,
  onExpandChange,
  className = '',
  style,
  ...props
}: SidebarProps) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isExpanded = controlledExpanded ?? internalExpanded;

  const handleToggle = () => {
    const next = !isExpanded;
    if (controlledExpanded === undefined) {
      setInternalExpanded(next);
    }
    onExpandChange?.(next);
  };

  const classes = [
    'sidebar',
    isExpanded ? 'sidebar--expanded' : 'sidebar--collapsed',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const width = isExpanded ? expandedWidth : COLLAPSED_WIDTH;

  return (
    <aside className={classes} style={{ width, ...style }} {...props}>
      <div className="sidebar__header">
        {logo !== undefined && (
          <button
            type="button"
            className="sidebar__logo-button"
            onClick={!isExpanded ? handleToggle : undefined}
            aria-label={!isExpanded ? 'Expand sidebar' : undefined}
            tabIndex={isExpanded ? -1 : 0}
          >
            <span className="sidebar__logo">{logo}</span>
            <span className="sidebar__logo-hover-icon" aria-hidden="true">
              <ExpandIcon />
            </span>
            {brandLabel && (
              <span className="sidebar__brand-label">{brandLabel}</span>
            )}
          </button>
        )}
        <button
          type="button"
          className="sidebar__toggle-button"
          onClick={handleToggle}
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          title={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
        </button>
      </div>

      <div className="sidebar__body">
        {typeof children === 'function' ? children(isExpanded) : children}
      </div>

      {footer !== undefined && (
        <div className="sidebar__footer">
          {typeof footer === 'function' ? footer(isExpanded) : footer}
        </div>
      )}
    </aside>
  );
};
