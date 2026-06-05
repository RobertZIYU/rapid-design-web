import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function SidebarPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Layout</div>
        <h1 className="page-header__title">Sidebar</h1>
        <p className="page-header__description">
          Collapsible sidebar shell that toggles between 56px (icon-only) and 320px (expanded).
          Header, free-form body, and optional footer with smooth transitions.
        </p>
      </div>

      <h2>States</h2>
      <div className="component-preview">
        <div className="component-preview__header">
          <span className="component-preview__title">Collapsed vs Expanded</span>
        </div>
        <div className="component-preview__stage" style={{ gap: 32, padding: 24 }}>
          <div style={{ width: 56, height: 180, background: '#f5f5f5', border: '1px solid #e8e8e8', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0', gap: 8 }}>
            {[1,2,3,4].map(i => <div key={i} style={{ width: 32, height: 32, background: '#e8e8e8', borderRadius: 6 }} />)}
          </div>
          <div style={{ width: 240, height: 180, background: '#f5f5f5', border: '1px solid #e8e8e8', borderRadius: 8, padding: 12, fontSize: 12, color: '#8a8a8a' }}>
            <div style={{ fontWeight: 600, marginBottom: 12 }}>Expanded (320px)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['Dashboard', 'Analytics', 'Settings', 'Help'].map(item => (
                <div key={item} style={{ padding: '6px 8px', background: '#e8e8e8', borderRadius: 4 }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CodeBlock code={`import { Sidebar } from 'treasure-rapid-stylekit'

<Sidebar logo={<Logo />}>
  {(isExpanded) => isExpanded ? (
    <nav>Full navigation items</nav>
  ) : (
    <nav>Icon-only items</nav>
  )}
</Sidebar>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'logo', type: 'ReactNode', description: 'Logo element in the header' },
        { name: 'children', type: '(isExpanded: boolean) => ReactNode', description: 'Render function receiving expansion state', required: true },
        { name: 'footer', type: 'ReactNode', description: 'Optional footer content' },
        { name: 'defaultExpanded', type: 'boolean', default: 'false', description: 'Initial expansion state' },
      ]} />
    </div>
  )
}
