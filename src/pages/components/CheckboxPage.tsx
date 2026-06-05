import { useState } from 'react'
import { Checkbox } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function CheckboxPage() {
  const [checked, setChecked] = useState(false)

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
        <Checkbox label="Accept terms" checked={checked} onChange={setChecked} />
        <Checkbox label="Checked by default" checked={true} onChange={() => {}} />
        <Checkbox label="Disabled" disabled />
        <Checkbox label="Error state" status="error" />
      </ComponentPreview>
      <CodeBlock code={`<Checkbox
  label="Accept terms"
  checked={checked}
  onChange={setChecked}
/>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'label', type: 'string', description: 'Checkbox label text' },
        { name: 'checked', type: 'boolean', description: 'Controlled checked state' },
        { name: 'onChange', type: '(checked: boolean) => void', description: 'Change handler' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the checkbox' },
        { name: 'status', type: "'error'", description: 'Validation status' },
      ]} />
    </div>
  )
}
