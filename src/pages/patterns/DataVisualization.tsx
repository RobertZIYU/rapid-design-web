import { TokenSwatch } from '../../components/docs/TokenSwatch'
import { CodeBlock } from '../../components/docs/CodeBlock'

const datavizColors = [
  { name: 'Sapphire', token: '--dataviz-1', value: '#5b8def' },
  { name: 'Aquamarine', token: '--dataviz-2', value: '#7dd3fc' },
  { name: 'Emerald', token: '--dataviz-3', value: '#8dd3c7' },
  { name: 'Amethyst', token: '--dataviz-4', value: '#a78bfa' },
  { name: 'Morganite', token: '--dataviz-5', value: '#eb7f9b' },
  { name: 'Sunstone', token: '--dataviz-6', value: '#f59e8b' },
  { name: 'Amber', token: '--dataviz-7', value: '#f4a96c' },
]

export function DataVisualization() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Patterns</div>
        <h1 className="page-header__title">Data Visualization</h1>
        <p className="page-header__description">
          Color palette and guidelines for charts, graphs, and data displays.
          Colors are assigned sequentially using <code>--dataviz-1</code> through <code>--dataviz-7</code>.
        </p>
      </div>

      <h2>Color Palette</h2>
      <div className="token-grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {datavizColors.map(c => (
          <TokenSwatch key={c.name} name={c.name} value={c.value} cssVar={c.token} />
        ))}
      </div>

      <h2>Assignment Rules</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '16px 0 32px' }}>
        {[
          { rule: 'Sequential assignment', desc: 'Assign colors in order: dataviz-1 first, then dataviz-2, etc.' },
          { rule: 'Maximum 7 series', desc: 'If more than 7 data series, group smaller ones into "Other"' },
          { rule: 'Consistent mapping', desc: 'Same data category should always get the same color across views' },
          { rule: 'Tinted backgrounds', desc: 'Use step 1 of each scale for background tints, step 8 for text on those backgrounds' },
        ].map(r => (
          <div key={r.rule} style={{ padding: '12px 16px', border: '1px solid var(--ds-border-light)', borderRadius: 8 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{r.rule}</div>
            <div style={{ fontSize: 13, color: 'var(--ds-text-secondary)' }}>{r.desc}</div>
          </div>
        ))}
      </div>

      <h2>Usage</h2>
      <CodeBlock language="css" code={`.bar-1 { fill: var(--dataviz-1); }
.bar-2 { fill: var(--dataviz-2); }
.bar-3 { fill: var(--dataviz-3); }

/* Tinted background with readable text */
.legend-item {
  background: var(--sapphire-1);
  color: var(--sapphire-8);
}`} />

      <h2>Accessibility</h2>
      <div className="dos-donts">
        <div className="dos-donts__col dos-donts__col--do">
          <h4>Do</h4>
          <ul>
            <li>Use patterns or labels in addition to color</li>
            <li>Ensure 3:1 contrast between adjacent data series</li>
            <li>Provide text alternatives for chart data</li>
          </ul>
        </div>
        <div className="dos-donts__col dos-donts__col--dont">
          <h4>Don't</h4>
          <ul>
            <li>Don't rely on color alone to convey meaning</li>
            <li>Don't use red/green as the only differentiator</li>
            <li>Don't exceed 7 color-coded series</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
