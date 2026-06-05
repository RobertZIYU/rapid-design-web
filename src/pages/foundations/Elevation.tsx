import { CodeBlock } from '../../components/docs/CodeBlock'

const elevations = [
  { level: 1, shadow: '0px 2px 4px 0px rgba(135, 143, 158, 0.25)', use: 'Cards at rest' },
  { level: 2, shadow: '0px 4px 8px 0px rgba(135, 143, 158, 0.25)', use: 'Default cards' },
  { level: 3, shadow: '0px 8px 12px 0px rgba(135, 143, 158, 0.25)', use: 'Raised cards' },
  { level: 4, shadow: '0px 12px 16px 0px rgba(135, 143, 158, 0.25)', use: 'Important components' },
  { level: 5, shadow: '0px 16px 20px 0px rgba(135, 143, 158, 0.25)', use: 'High-priority overlays' },
  { level: 6, shadow: '0px 16px 24px 0px rgba(135, 143, 158, 0.25)', use: 'Prominent elevations' },
  { level: 7, shadow: '0px 20px 32px 0px rgba(135, 143, 158, 0.25)', use: 'Maximum elevation' },
]

const specialized = [
  { name: 'Toast', token: '--elevation-toast', shadow: '0px 2px 12px rgba(135,143,158,0.15), 0px 4px 16px rgba(135,143,158,0.12), 0px 8px 24px rgba(135,143,158,0.10), 0px 24px 64px rgba(135,143,158,0.08)', use: 'Floating notifications' },
  { name: 'Tooltip', token: '--elevation-tooltip', shadow: '0px 4px 8px rgba(135,143,158,0.25), 0px 8px 12px rgba(135,143,158,0.15)', use: 'Tooltip shadows' },
  { name: 'Dropdown', token: '--elevation-dropdown', shadow: '0px 4px 8px 0px rgba(135, 143, 158, 0.25)', use: 'Dropdowns and popovers' },
  { name: 'Menu', token: '--elevation-menu', shadow: '0px 4px 8px 0px rgba(135, 143, 158, 0.3)', use: 'Menu shadows' },
]

export function Elevation() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Foundations</div>
        <h1 className="page-header__title">Elevation</h1>
        <p className="page-header__description">
          Seven levels of box shadow for layering content. Higher numbers create more prominent depth.
        </p>
      </div>

      <h2>Shadow Scale</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 24, margin: '24px 0 40px', padding: 32, background: '#f5f5f5', borderRadius: 12 }}>
        {elevations.map(e => (
          <div key={e.level} className="elevation-card" style={{ boxShadow: e.shadow }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>Level {e.level}</div>
              <div style={{ fontSize: 11, color: 'var(--ds-text-tertiary)', marginTop: 2 }}>{e.use}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>Token Reference</h2>
      <table className="props-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
            <th colSpan={2}>Use Case</th>
          </tr>
        </thead>
        <tbody>
          {elevations.map(e => (
            <tr key={e.level}>
              <td>--elevation-{e.level}</td>
              <td style={{ fontSize: 11 }}>{e.shadow}</td>
              <td colSpan={2} style={{ color: 'var(--ds-text-secondary)' }}>{e.use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Specialized Shadows</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 24, margin: '24px 0 40px', padding: 32, background: '#f5f5f5', borderRadius: 12 }}>
        {specialized.map(s => (
          <div key={s.name} className="elevation-card" style={{ boxShadow: s.shadow, width: 200 }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{s.name}</div>
              <div style={{ fontSize: 11, color: 'var(--ds-text-tertiary)', marginTop: 2 }}>{s.use}</div>
            </div>
          </div>
        ))}
      </div>

      <h2>Usage</h2>
      <CodeBlock language="css" code={`.card {
  box-shadow: var(--elevation-2);
}

.card:hover {
  box-shadow: var(--elevation-4);
}

.floating-toast {
  box-shadow: var(--elevation-toast);
}`} />
    </div>
  )
}
