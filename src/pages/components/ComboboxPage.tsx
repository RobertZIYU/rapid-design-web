import { useState } from 'react'
import { Combobox } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
]

export function ComboboxPage() {
  const [value, setValue] = useState('')

  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">Combobox</h1>
        <p className="page-header__description">
          Searchable dropdown with keyboard navigation and filtering.
        </p>
      </div>

      <h2>Default</h2>
      <ComponentPreview title="Basic combobox" direction="column" align="left">
        <div style={{ width: 320 }}>
          <Combobox
            label="Framework"
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select a framework"
          />
        </div>
      </ComponentPreview>
      <CodeBlock code={`<Combobox
  label="Framework"
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
  value={value}
  onChange={setValue}
  placeholder="Select a framework"
/>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'label', type: 'string', description: 'Field label' },
        { name: 'options', type: '{ value: string, label: string }[]', description: 'Dropdown options', required: true },
        { name: 'value', type: 'string', description: 'Selected value' },
        { name: 'onChange', type: '(value: string) => void', description: 'Selection handler' },
        { name: 'placeholder', type: 'string', description: 'Placeholder text' },
        { name: 'status', type: "'error' | 'warning'", description: 'Validation status' },
        { name: 'helpText', type: 'string', description: 'Help text below' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the combobox' },
      ]} />
    </div>
  )
}
