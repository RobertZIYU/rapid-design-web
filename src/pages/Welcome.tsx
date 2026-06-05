import { Link } from 'react-router-dom'

export function Welcome() {
  return (
    <div>
      <div className="welcome-hero">
        <div className="welcome-hero__eyebrow">Design System</div>
        <h1 className="welcome-hero__title">Rapid StyleKit</h1>
        <p className="welcome-hero__desc">
          A comprehensive design system with 25 React components, design tokens, and patterns.
          Build consistent, accessible interfaces faster.
        </p>
      </div>

      <div className="welcome-cards">
        <Link to="/foundations/colors" className="welcome-card">
          <div className="welcome-card__title">Foundations</div>
          <p className="welcome-card__desc">
            Explore the building blocks: colors, typography, elevation, and icons that form the visual language.
          </p>
        </Link>
        <Link to="/components/button" className="welcome-card">
          <div className="welcome-card__title">Components</div>
          <p className="welcome-card__desc">
            Browse 25 React components with live previews, props documentation, and usage guidelines.
          </p>
        </Link>
        <Link to="/patterns/animations" className="welcome-card">
          <div className="welcome-card__title">Patterns</div>
          <p className="welcome-card__desc">
            Learn about animation utilities, data visualization color systems, and layout patterns.
          </p>
        </Link>
        <Link to="/installation" className="welcome-card">
          <div className="welcome-card__title">Getting Started</div>
          <p className="welcome-card__desc">
            Install the package, import components, and start building with the design system.
          </p>
        </Link>
      </div>

      <div className="section" style={{ marginTop: 64 }}>
        <h2>Principles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {[
            { title: 'Consistency', desc: 'Every component instance looks and behaves the same across all surfaces.' },
            { title: 'Accessibility', desc: 'WCAG 2.1 AA compliant with proper ARIA attributes and keyboard navigation.' },
            { title: 'Simplicity', desc: 'Use the simplest component that solves the problem. No over-engineering.' },
            { title: 'Predictability', desc: 'Components behave exactly as users expect, following established patterns.' },
          ].map(p => (
            <div key={p.title}>
              <h3 style={{ marginTop: 0, fontSize: 15 }}>{p.title}</h3>
              <p style={{ fontSize: 13.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Component Overview</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {[
            { cat: 'Form Controls', count: 10, items: 'Button, Checkbox, Combobox, Label, Helptext, Radio, Slider, TextArea, TextField, Toggle' },
            { cat: 'Data Display', count: 5, items: 'Avatar, Progress, Spinner, Tabs, Tag' },
            { cat: 'Navigation', count: 2, items: 'Link, Menu' },
            { cat: 'Feedback', count: 4, items: 'Message, Popover, Toast, Tooltip' },
            { cat: 'Layout', count: 4, items: 'App Shell, Sidebar, Form Layout, Empty State' },
          ].map(c => (
            <div key={c.cat} style={{ padding: '16px 20px', border: '1px solid var(--ds-border-light)', borderRadius: 8 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>
                {c.cat} <span style={{ color: 'var(--ds-text-tertiary)', fontWeight: 400 }}>({c.count})</span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ds-text-tertiary)', lineHeight: 1.5 }}>{c.items}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
