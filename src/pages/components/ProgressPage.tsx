import { Progress } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function ProgressPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Data Display</div>
        <h1 className="page-header__title">Progress</h1>
        <p className="page-header__description">
          Progress bar with 3 sizes and 4 color variants.
        </p>
      </div>

      <h2>Variants</h2>
      <ComponentPreview title="Color variants" direction="column" align="left">
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Progress value={60} variant="default" />
          <Progress value={60} variant="success" />
          <Progress value={60} variant="warning" />
          <Progress value={60} variant="error" />
        </div>
      </ComponentPreview>
      <CodeBlock code={`<Progress value={60} variant="default" />
<Progress value={60} variant="success" />
<Progress value={60} variant="warning" />
<Progress value={60} variant="error" />`} />

      <h2>Sizes</h2>
      <ComponentPreview title="Size variants" direction="column" align="left">
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Progress value={45} size="sm" />
          <Progress value={65} size="md" />
          <Progress value={85} size="lg" />
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'value', type: 'number', description: 'Progress value (0-100)', required: true },
        { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
        { name: 'variant', type: "'default' | 'success' | 'warning' | 'error'", default: "'default'", description: 'Color variant' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Bar height' },
      ]} />
    </div>
  )
}
