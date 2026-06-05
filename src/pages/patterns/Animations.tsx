import { CodeBlock } from '../../components/docs/CodeBlock'

export function Animations() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Patterns</div>
        <h1 className="page-header__title">Animations</h1>
        <p className="page-header__description">
          CSS animation utilities with duration, easing, and delay tokens. Built for performance
          with GPU-accelerated transforms.
        </p>
      </div>

      <h2>Duration Tokens</h2>
      <table className="props-table">
        <thead><tr><th>Token</th><th>Value</th><th colSpan={2}>Use Case</th></tr></thead>
        <tbody>
          <tr><td>--duration-fast</td><td>150ms</td><td colSpan={2}>Hover states, micro-interactions</td></tr>
          <tr><td>--duration-normal</td><td>250ms</td><td colSpan={2}>Default transitions</td></tr>
          <tr><td>--duration-slow</td><td>400ms</td><td colSpan={2}>Complex animations</td></tr>
          <tr><td>--duration-slower</td><td>600ms</td><td colSpan={2}>Page transitions</td></tr>
        </tbody>
      </table>

      <h2>Easing Functions</h2>
      <table className="props-table">
        <thead><tr><th>Token</th><th>Value</th><th colSpan={2}>Use Case</th></tr></thead>
        <tbody>
          <tr><td>--ease-in</td><td>cubic-bezier(0.4, 0, 1, 1)</td><td colSpan={2}>Elements leaving</td></tr>
          <tr><td>--ease-out</td><td>cubic-bezier(0, 0, 0.2, 1)</td><td colSpan={2}>Elements entering</td></tr>
          <tr><td>--ease-in-out</td><td>cubic-bezier(0.4, 0, 0.2, 1)</td><td colSpan={2}>General purpose</td></tr>
          <tr><td>--ease-spring</td><td>cubic-bezier(0.34, 1.56, 0.64, 1)</td><td colSpan={2}>Bouncy/playful</td></tr>
        </tbody>
      </table>

      <h2>Animation Classes</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, margin: '16px 0 32px' }}>
        {['fade-in', 'fade-out', 'slide-in-top', 'slide-in-right', 'slide-in-bottom', 'slide-in-left', 'scale-in', 'scale-out', 'zoom-in', 'bounce', 'pulse', 'spin'].map(cls => (
          <div key={cls} style={{ padding: '10px 14px', border: '1px solid var(--ds-border-light)', borderRadius: 6, fontSize: 13, fontFamily: 'var(--ds-mono)' }}>
            .animate-{cls}
          </div>
        ))}
      </div>

      <h2>Modifiers</h2>
      <CodeBlock language="css" code={`/* Duration modifiers */
.animate-fast    /* 150ms */
.animate-normal  /* 250ms */
.animate-slow    /* 400ms */
.animate-slower  /* 600ms */

/* Delay modifiers */
.animate-delay-none    /* 0ms */
.animate-delay-short   /* 100ms */
.animate-delay-medium  /* 200ms */
.animate-delay-long    /* 300ms */

/* Iteration */
.animate-once
.animate-infinite`} />

      <h2>Usage in React</h2>
      <CodeBlock code={`// Apply animation class on mount
<div className="animate-fade-in animate-normal">
  Content fades in
</div>

// Conditional animation
<div className={isVisible ? 'animate-slide-in-bottom' : 'animate-fade-out'}>
  Animated content
</div>`} />

      <h2>Performance Guidelines</h2>
      <div className="dos-donts">
        <div className="dos-donts__col dos-donts__col--do">
          <h4>Do</h4>
          <ul>
            <li>Animate <code>transform</code> and <code>opacity</code> (GPU-accelerated)</li>
            <li>Use <code>will-change</code> for known upcoming animations</li>
            <li>Respect <code>prefers-reduced-motion</code></li>
          </ul>
        </div>
        <div className="dos-donts__col dos-donts__col--dont">
          <h4>Don't</h4>
          <ul>
            <li>Don't animate <code>width</code>, <code>height</code>, <code>top</code>, <code>left</code></li>
            <li>Don't use <code>will-change</code> on everything</li>
            <li>Don't create jittery 60fps-breaking animations</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
