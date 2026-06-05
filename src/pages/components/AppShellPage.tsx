import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function AppShellPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Layout</div>
        <h1 className="page-header__title">App Shell</h1>
        <p className="page-header__description">
          Full-page application layout with sidebar (240-320px) and main content area.
        </p>
      </div>

      <h2>Basic Usage</h2>
      <div className="component-preview">
        <div className="component-preview__header">
          <span className="component-preview__title">App Shell Layout</span>
        </div>
        <div className="component-preview__stage" style={{ padding: 0, minHeight: 200 }}>
          <div style={{ display: 'flex', width: '100%', height: 200 }}>
            <div style={{ width: 200, background: '#f5f5f5', borderRight: '1px solid #e8e8e8', padding: 16, fontSize: 12, color: '#8a8a8a' }}>
              Sidebar (240px)
            </div>
            <div style={{ flex: 1, padding: 16, fontSize: 12, color: '#8a8a8a' }}>
              Main Content Area
            </div>
          </div>
        </div>
      </div>
      <CodeBlock code={`import { AppShell } from 'treasure-rapid-stylekit'

<AppShell
  sidebar={<MySidebar />}
  header={<MyHeader />}
>
  <main>Your content here</main>
</AppShell>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'sidebar', type: 'ReactNode', description: 'Sidebar content', required: true },
        { name: 'header', type: 'ReactNode', description: 'Optional header above content' },
        { name: 'children', type: 'ReactNode', description: 'Main content area', required: true },
      ]} />
    </div>
  )
}
