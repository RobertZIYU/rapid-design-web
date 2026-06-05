import { Checkbox } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function CheckboxPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">Checkbox</h1>
        <p className="page-header__description">
          Custom checkbox with error status and readonly support.
        </p>
      </div>

      <h2>Default</h2>
      <ComponentPreview title="Checkbox states" direction="column" align="left">
        <Checkbox label="Unchecked" />
        <Checkbox label="Checked by default" defaultChecked />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Error state" status="error" />
      </ComponentPreview>
      <CodeBlock code={`<Checkbox label="Accept terms" checked={checked} onChange={handleChange} />`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'label', type: 'string', description: 'Checkbox label text' },
        { name: 'checked', type: 'boolean', description: 'Controlled checked state' },
        { name: 'onChange', type: 'ChangeEventHandler', description: 'Native change handler' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the checkbox' },
        { name: 'status', type: "'default' | 'error'", default: "'default'", description: 'Validation status' },
        { name: 'readOnly', type: 'boolean', default: 'false', description: 'Read-only mode' },
      ]} />
    </div>
  )
}
