import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navigation, type NavSection } from '../data/navigation'

function SidebarSection({ section }: { section: NavSection }) {
  const location = useLocation()
  const isActive = section.items?.some(item => item.path === location.pathname)
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <div className="sidebar-section">
      <button
        className="sidebar-section__title"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{section.title}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 150ms ease',
          }}
        >
          <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && section.items && (
        <ul className="sidebar-section__items">
          {section.items.map(item => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? 'sidebar-item--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <NavLink to="/" className="sidebar__logo">
          <div className="sidebar__logo-mark">RS</div>
          <div className="sidebar__logo-text">
            <span className="sidebar__logo-title">Rapid StyleKit</span>
            <span className="sidebar__logo-subtitle">Design System</span>
          </div>
        </NavLink>
      </div>
      <nav className="sidebar__nav">
        {navigation.map(section => (
          <SidebarSection key={section.title} section={section} />
        ))}
      </nav>
    </aside>
  )
}
