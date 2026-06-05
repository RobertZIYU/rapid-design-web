import { Helptext } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function HelptextPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">Helptext</h1>
        <p className="page-header__description">
          Standalone help text component with success and error types for form fields.
        </p>
      </div>

      <h2>Types</h2>
      <ComponentPreview title="All types" direction="column" align="left">
        <Helptext>Default help text</Helptext>
        <Helptext type="success">Success message</Helptext>
        <Helptext type="error">Error message</Helptext>
      </ComponentPreview>
      <CodeBlock code={`<Helptext>Default help text</Helptext>
<Helptext type="success">Success message</Helptext>
<Helptext type="error">Error message</Helptext>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'children', type: 'string', description: 'Help text content', required: true },
        { name: 'type', type: "'default' | 'success' | 'error'", default: "'default'", description: 'Visual type' },
      ]} />
    </div>
  )
}
