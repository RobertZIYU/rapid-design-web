import { TextField } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function TextFieldPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">TextField</h1>
        <p className="page-header__description">
          Single-line text input with integrated label, help text, and error/warning states.
        </p>
      </div>

      <h2>Default</h2>
      <ComponentPreview title="Basic text field" direction="column" align="left">
        <div style={{ width: 320 }}>
          <TextField label="Email" placeholder="you@example.com" />
        </div>
      </ComponentPreview>
      <CodeBlock code={`<TextField label="Email" placeholder="you@example.com" />`} />

      <h2>States</h2>
      <ComponentPreview title="Field states" direction="column" align="left">
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ width: 280 }}>
            <TextField label="Required" required placeholder="Required field" />
          </div>
          <div style={{ width: 280 }}>
            <TextField label="With help" helpText="This is help text" placeholder="Enter value" />
          </div>
          <div style={{ width: 280 }}>
            <TextField label="Error" status="error" helpText="This field is required" value="" />
          </div>
          <div style={{ width: 280 }}>
            <TextField label="Warning" status="warning" helpText="Value may be too short" value="Hi" />
          </div>
          <div style={{ width: 280 }}>
            <TextField label="Disabled" disabled value="Cannot edit" />
          </div>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'label', type: 'string', description: 'Field label text' },
        { name: 'placeholder', type: 'string', description: 'Placeholder text' },
        { name: 'value', type: 'string', description: 'Controlled value' },
        { name: 'onChange', type: '(e: ChangeEvent) => void', description: 'Change handler' },
        { name: 'helpText', type: 'string', description: 'Help text below the input' },
        { name: 'status', type: "'error' | 'warning' | 'success'", description: 'Validation status' },
        { name: 'required', type: 'boolean', default: 'false', description: 'Show required indicator' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the input' },
        { name: 'type', type: 'string', default: "'text'", description: 'Input type (text, email, password, etc.)' },
      ]} />
    </div>
  )
}
