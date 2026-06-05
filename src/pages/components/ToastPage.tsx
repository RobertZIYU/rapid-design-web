import { Toast } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function ToastPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Feedback</div>
        <h1 className="page-header__title">Toast</h1>
        <p className="page-header__description">
          Floating notifications with 5 variants. Auto-includes appropriate icons.
        </p>
      </div>

      <h2>Variants</h2>
      <ComponentPreview title="All variants" direction="column" align="left">
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Toast variant="default" title="Default" description="This is a default toast." />
          <Toast variant="info" title="Info" description="New updates are available." />
          <Toast variant="success" title="Success" description="Changes saved successfully." />
          <Toast variant="warning" title="Warning" description="Your session will expire soon." />
          <Toast variant="error" title="Error" description="Failed to save changes." />
        </div>
      </ComponentPreview>
      <CodeBlock code={`<Toast variant="success" title="Success" description="Changes saved." />
<Toast variant="error" title="Error" description="Failed to save." />`} />

      <h2>Without Title</h2>
      <ComponentPreview title="Description only">
        <Toast variant="info" description="Quick notification without a title." />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'variant', type: "'default' | 'info' | 'success' | 'warning' | 'error'", default: "'default'", description: 'Toast type' },
        { name: 'title', type: 'string', description: 'Toast title' },
        { name: 'description', type: 'string', description: 'Toast message', required: true },
        { name: 'onDismiss', type: '() => void', description: 'Dismiss handler' },
      ]} />
    </div>
  )
}
