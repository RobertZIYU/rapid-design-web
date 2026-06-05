import { CodeBlock } from '../../components/docs/CodeBlock'

const sizes = [
  { token: '--text-2xs', rem: '0.625rem', px: '10px', use: 'Tags, badges' },
  { token: '--text-xs', rem: '0.75rem', px: '12px', use: 'Captions, labels' },
  { token: '--text-sm', rem: '0.875rem', px: '14px', use: 'Body text (default)' },
  { token: '--text-base', rem: '1rem', px: '16px', use: 'H3, larger body' },
  { token: '--text-lg', rem: '1.125rem', px: '18px', use: 'Subheadings' },
  { token: '--text-xl', rem: '1.25rem', px: '20px', use: 'H2' },
  { token: '--text-2xl', rem: '1.5rem', px: '24px', use: 'Section headings' },
  { token: '--text-3xl', rem: '1.875rem', px: '30px', use: 'Large headings' },
  { token: '--text-4xl', rem: '2.25rem', px: '36px', use: 'H1, page titles' },
  { token: '--text-5xl', rem: '3rem', px: '48px', use: 'Display' },
  { token: '--text-6xl', rem: '3.75rem', px: '60px', use: 'Hero display' },
]

const weights = [
  { token: '--font-weight-light', value: '300', use: 'Display sizes, minimal use' },
  { token: '--font-weight-regular', value: '400', use: 'Body text (default)' },
  { token: '--font-weight-medium', value: '500', use: 'Button labels, mid-emphasis' },
  { token: '--font-weight-semibold', value: '600', use: 'Headings, emphasis' },
]

export function Typography() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Foundations</div>
        <h1 className="page-header__title">Typography</h1>
        <p className="page-header__description">
          Plus Jakarta Sans is the primary typeface, paired with a systematic size scale
          and four weight levels.
        </p>
      </div>

      <h2>Font Family</h2>
      <div style={{ padding: 32, background: 'var(--ds-bg-preview)', border: '1px solid var(--ds-border)', borderRadius: 12, marginBottom: 24 }}>
        <div style={{ fontSize: 32, fontWeight: 300, marginBottom: 8 }}>Plus Jakarta Sans</div>
        <div style={{ fontSize: 14, color: 'var(--ds-text-tertiary)' }}>
          Primary: "Plus Jakarta Sans", "Hiragino Sans", "YuGothic", Meiryo, "Noto Sans CJK JP", system-ui, sans-serif
        </div>
      </div>
      <CodeBlock language="css" code={`font-family: var(--font-primary);`} />

      <h2>Type Scale</h2>
      <div style={{ margin: '16px 0 32px' }}>
        {sizes.map(s => (
          <div className="type-sample" key={s.token}>
            <div className="type-sample__label">{s.token} &middot; {s.rem} ({s.px})</div>
            <div style={{ fontSize: s.rem, fontWeight: 400, color: 'var(--ds-text)' }}>
              The quick brown fox jumps over the lazy dog
            </div>
          </div>
        ))}
      </div>

      <h2>Font Weights</h2>
      <div style={{ margin: '16px 0 32px' }}>
        {weights.map(w => (
          <div className="type-sample" key={w.token}>
            <div className="type-sample__label">{w.token} &middot; {w.value}</div>
            <div style={{ fontSize: '1.25rem', fontWeight: Number(w.value), color: 'var(--ds-text)' }}>
              {w.use}
            </div>
          </div>
        ))}
      </div>

      <h2>Usage</h2>
      <CodeBlock code={`// In CSS
.heading {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--text-xl--line-height);
}

.body {
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--text-sm--line-height);
}`} language="css" />
    </div>
  )
}
