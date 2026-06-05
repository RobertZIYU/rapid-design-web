import { TextArea } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function TextAreaPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">TextArea</h1>
        <p className="page-header__description">
          Multi-line text input with the same API as TextField. Supports label, help text,
          and error states.
        </p>
      </div>

      <h2>Default</h2>
      <ComponentPreview title="Basic textarea" direction="column" align="left">
        <div style={{ width: 400 }}>
          <TextArea label="Description" placeholder="Enter a description..." />
        </div>
      </ComponentPreview>
      <CodeBlock code={`<TextArea label="Description" placeholder="Enter a description..." />`} />

      <h2>States</h2>
      <ComponentPreview title="Textarea states" direction="column" align="left">
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ width: 280 }}>
            <TextArea label="Required" required placeholder="Required field" />
          </div>
          <div style={{ width: 280 }}>
            <TextArea label="Error" status="error" helpText="Please provide a description" />
          </div>
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'label', type: 'string', description: 'Field label text' },
        { name: 'placeholder', type: 'string', description: 'Placeholder text' },
        { name: 'value', type: 'string', description: 'Controlled value' },
        { name: 'onChange', type: '(e: ChangeEvent) => void', description: 'Change handler' },
        { name: 'helpText', type: 'string', description: 'Help text below' },
        { name: 'status', type: "'error' | 'warning' | 'success'", description: 'Validation status' },
        { name: 'required', type: 'boolean', default: 'false', description: 'Show required indicator' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the textarea' },
        { name: 'rows', type: 'number', default: '3', description: 'Number of visible rows' },
      ]} />
    </div>
  )
}
