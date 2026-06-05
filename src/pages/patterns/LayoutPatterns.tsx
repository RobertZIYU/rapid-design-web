import { CodeBlock } from '../../components/docs/CodeBlock'

const patterns = [
  {
    name: 'Full-Page App Shell',
    desc: 'Sidebar navigation (240px) + main content. The most common app layout.',
    code: `<div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
  <aside>Sidebar</aside>
  <main>Content</main>
</div>`,
  },
  {
    name: 'Icon-Only Sidebar',
    desc: '56px sidebar with icon buttons, great for data-heavy apps.',
    code: `<div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', minHeight: '100vh' }}>
  <aside>Icon nav</aside>
  <main>Content</main>
</div>`,
  },
  {
    name: 'Three-Column Layout',
    desc: 'Icon sidebar (64px) + panel (320-480px) + main content. For chat, email, or list-detail views.',
    code: `<div style={{ display: 'grid', gridTemplateColumns: '64px 400px 1fr', minHeight: '100vh' }}>
  <aside>Icons</aside>
  <div>Panel</div>
  <main>Detail</main>
</div>`,
  },
  {
    name: 'Centered Form',
    desc: 'Max-width container centered vertically. For login, signup, and single-purpose forms.',
    code: `<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
  <div style={{ maxWidth: 400, width: '100%', padding: 32 }}>
    Form content
  </div>
</div>`,
  },
]

export function LayoutPatterns() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Patterns</div>
        <h1 className="page-header__title">Layout Patterns</h1>
        <p className="page-header__description">
          Common layout compositions for different application types.
          Use these as starting points and adapt to your needs.
        </p>
      </div>

      <h2>Decision Tree</h2>
      <div style={{ padding: '20px 24px', background: 'var(--ds-bg-preview)', border: '1px solid var(--ds-border)', borderRadius: 12, margin: '16px 0 32px', fontSize: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div><strong>Building a dashboard?</strong> → App Shell with sidebar (240px) or Icon sidebar (56px)</div>
          <div><strong>Building a chat app?</strong> → Three-column: icon sidebar + chat list + conversation</div>
          <div><strong>Building a form/settings?</strong> → FormLayout component or centered container</div>
          <div><strong>Building auth/onboarding?</strong> → Centered container with card</div>
          <div><strong>No content to show?</strong> → EmptyState component</div>
        </div>
      </div>

      {patterns.map(p => (
        <div key={p.name} className="section">
          <h2>{p.name}</h2>
          <p>{p.desc}</p>
          <CodeBlock code={p.code} />
        </div>
      ))}

      <h2>Spacing Scale</h2>
      <table className="props-table">
        <thead><tr><th>Value</th><th>Use Case</th><th colSpan={2}>Example</th></tr></thead>
        <tbody>
          <tr><td>4px</td><td>Tight</td><td colSpan={2}>Between icon and text</td></tr>
          <tr><td>8px</td><td>Small</td><td colSpan={2}>Between related items</td></tr>
          <tr><td>12px</td><td>Default</td><td colSpan={2}>Button groups, form internals</td></tr>
          <tr><td>16px</td><td>Comfortable</td><td colSpan={2}>Section padding, card content</td></tr>
          <tr><td>24px</td><td>Medium</td><td colSpan={2}>Between sections</td></tr>
          <tr><td>32px</td><td>Large</td><td colSpan={2}>Page padding, major sections</td></tr>
          <tr><td>48px</td><td>Extra large</td><td colSpan={2}>Hero sections</td></tr>
        </tbody>
      </table>
    </div>
  )
}
