import { Message } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function MessagePage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Feedback</div>
        <h1 className="page-header__title">Message</h1>
        <p className="page-header__description">
          Inline notification banners with 4 variants. Icon is always inline-left of the text.
        </p>
      </div>

      <h2>Variants</h2>
      <ComponentPreview title="All variants" direction="column" align="left">
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Message variant="info">This is an informational message.</Message>
          <Message variant="success">Operation completed successfully.</Message>
          <Message variant="warning">Please review your settings.</Message>
          <Message variant="error">An error occurred. Please try again.</Message>
        </div>
      </ComponentPreview>
      <CodeBlock code={`<Message variant="info">This is an informational message.</Message>
<Message variant="success">Operation completed successfully.</Message>
<Message variant="warning">Please review your settings.</Message>
<Message variant="error">An error occurred. Please try again.</Message>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: 'Message type' },
        { name: 'children', type: 'ReactNode', description: 'Message content', required: true },
        { name: 'onDismiss', type: '() => void', description: 'Dismiss handler (shows close button)' },
      ]} />
    </div>
  )
}
