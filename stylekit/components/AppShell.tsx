import { useState } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import { CollapseIcon, ExpandIcon } from '../icons';
import './AppShell.css';

export interface AppShellTopNavItem {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
  /** Sidebar shell node (typically the Sidebar component, 56px collapsed) */
  sidebar: ReactNode;
  /** Top horizontal navigation items */
  topNavItems: AppShellTopNavItem[];
  /** Optional chat panel content (left side, collapsible) */
  chatPanel?: ReactNode;
  /** Main canvas content */
  children: ReactNode;
  /** Chat panel width in pixels */
  chatPanelWidth?: number;
  /** Whether chat panel starts open */
  chatPanelDefaultOpen?: boolean;
  /** Controlled chat panel state */
  chatPanelOpen?: boolean;
  /** Callback when chat panel is toggled */
  onChatPanelToggle?: (open: boolean) => void;
  /** Background image URL for gradient */
  backgroundImage?: string;
}

export const AppShell = ({
  sidebar,
  topNavItems,
  chatPanel,
  children,
  chatPanelWidth = 360,
  chatPanelDefaultOpen = true,
  chatPanelOpen: controlledOpen,
  onChatPanelToggle,
  backgroundImage,
  className = '',
  ...props
}: AppShellProps) => {
  const [internalOpen, setInternalOpen] = useState(chatPanelDefaultOpen);

  // Use controlled state if provided, otherwise use internal state
  const isPanelOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleToggle = () => {
    const newOpen = !isPanelOpen;
    if (controlledOpen === undefined) {
      setInternalOpen(newOpen);
    }
    onChatPanelToggle?.(newOpen);
  };

  const classes = ['app-shell', className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {/* Icon Sidebar */}
      {sidebar}

      {/* Main Wrapper with Background */}
      <div
        className="app-shell__main-wrapper"
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      >
        {/* Top Navigation */}
        {topNavItems.length > 0 && (
          <nav className="app-shell__top-nav">
            {topNavItems.map((item, index) => (
              <button
                key={index}
                className={`app-shell__top-nav-item ${
                  item.active ? 'app-shell__top-nav-item--active' : ''
                }`}
                onClick={item.onClick}
                aria-current={item.active ? 'page' : undefined}
              >
                <span className="app-shell__top-nav-icon">{item.icon}</span>
                <span className="app-shell__top-nav-label">{item.label}</span>
              </button>
            ))}
          </nav>
        )}

        {/* Content Card Wrapper */}
        <div className="app-shell__content-card">
          {/* Chat Panel */}
          {chatPanel && (
            <aside
              className={`app-shell__chat-panel ${
                isPanelOpen ? 'app-shell__chat-panel--open' : 'app-shell__chat-panel--closed'
              }`}
              style={isPanelOpen ? { width: `${chatPanelWidth}px` } : undefined}
            >
              <button
                className="app-shell__chat-panel-toggle"
                onClick={handleToggle}
                aria-label={isPanelOpen ? 'Collapse chat panel' : 'Expand chat panel'}
              >
                {isPanelOpen ? <CollapseIcon /> : <ExpandIcon />}
              </button>
              {isPanelOpen && chatPanel}
            </aside>
          )}

          {/* Canvas Area */}
          <main className="app-shell__canvas">{children}</main>
        </div>
      </div>
    </div>
  );
};
