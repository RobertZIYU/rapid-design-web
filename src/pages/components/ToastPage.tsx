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
          <Toast variant="default" title="Default">This is a default toast.</Toast>
          <Toast variant="info" title="Info">New updates are available.</Toast>
          <Toast variant="success" title="Success">Changes saved successfully.</Toast>
          <Toast variant="warning" title="Warning">Your session will expire soon.</Toast>
          <Toast variant="error" title="Error">Failed to save changes.</Toast>
        </div>
      </ComponentPreview>
      <CodeBlock code={`<Toast variant="success" title="Success">Changes saved.</Toast>
<Toast variant="error" title="Error">Failed to save.</Toast>`} />

      <h2>Without Title</h2>
      <ComponentPreview title="Content only">
        <Toast variant="info">Quick notification without a title.</Toast>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'variant', type: "'default' | 'info' | 'success' | 'warning' | 'error'", default: "'default'", description: 'Toast type' },
        { name: 'title', type: 'string', description: 'Toast title' },
        { name: 'children', type: 'ReactNode', description: 'Toast message content', required: true },
        { name: 'onClose', type: '() => void', description: 'Close handler' },
      ]} />
    </div>
  )
}
