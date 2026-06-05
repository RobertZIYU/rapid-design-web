import { Tooltip, Button } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function TooltipPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Feedback</div>
        <h1 className="page-header__title">Tooltip</h1>
        <p className="page-header__description">
          Hover-triggered contextual help with 4 positions and rich content support
          (text, bullet lists, icon lists).
        </p>
      </div>

      <h2>Positions</h2>
      <ComponentPreview title="Four positions">
        <Tooltip content="Top tooltip" side="top">
          <Button variant="outline">Top</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" side="right">
          <Button variant="outline">Right</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" side="bottom">
          <Button variant="outline">Bottom</Button>
        </Tooltip>
        <Tooltip content="Left tooltip" side="left">
          <Button variant="outline">Left</Button>
        </Tooltip>
      </ComponentPreview>
      <CodeBlock code={`<Tooltip content="Helpful tip" side="top">
  <Button variant="outline">Hover me</Button>
</Tooltip>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'content', type: 'ReactNode', description: 'Tooltip content', required: true },
        { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'top'", description: 'Tooltip position' },
        { name: 'children', type: 'ReactElement', description: 'Trigger element', required: true },
        { name: 'delayMs', type: 'number', default: '200', description: 'Delay before showing' },
      ]} />
    </div>
  )
}
