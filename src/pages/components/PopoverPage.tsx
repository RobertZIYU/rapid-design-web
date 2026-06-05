import { Popover, Button } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function PopoverPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Feedback</div>
        <h1 className="page-header__title">Popover</h1>
        <p className="page-header__description">
          Click-triggered floating panels with 4 positions and 3 alignment options.
        </p>
      </div>

      <h2>Basic</h2>
      <ComponentPreview title="Click to open">
        <Popover
          content={
            <div style={{ padding: 16, fontSize: 14 }}>
              <p style={{ marginBottom: 8, color: 'var(--ds-text)' }}>Popover content</p>
              <p style={{ fontSize: 13, color: 'var(--ds-text-secondary)' }}>Any content can go here.</p>
            </div>
          }
          side="bottom"
        >
          <Button variant="outline">Open Popover</Button>
        </Popover>
      </ComponentPreview>
      <CodeBlock code={`<Popover
  content={<div style={{ padding: 16 }}>Popover content</div>}
  side="bottom"
>
  <Button variant="outline">Open</Button>
</Popover>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'children', type: 'ReactElement', description: 'Trigger element', required: true },
        { name: 'content', type: 'ReactNode', description: 'Popover content', required: true },
        { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'bottom'", description: 'Preferred position' },
        { name: 'align', type: "'start' | 'center' | 'end'", default: "'center'", description: 'Alignment relative to trigger' },
      ]} />
    </div>
  )
}
