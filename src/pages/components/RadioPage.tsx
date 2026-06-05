import { useState } from 'react'
import { Radio } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function RadioPage() {
  const [value, setValue] = useState('option1')

  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">Radio</h1>
        <p className="page-header__description">
          Custom radio button for single-select choices within a group.
        </p>
      </div>

      <h2>Default</h2>
      <ComponentPreview title="Radio group" direction="column" align="left">
        <Radio name="demo" label="Option 1" value="option1" checked={value === 'option1'} onChange={() => setValue('option1')} />
        <Radio name="demo" label="Option 2" value="option2" checked={value === 'option2'} onChange={() => setValue('option2')} />
        <Radio name="demo" label="Option 3" value="option3" checked={value === 'option3'} onChange={() => setValue('option3')} />
        <Radio name="demo" label="Disabled" value="disabled" disabled />
      </ComponentPreview>
      <CodeBlock code={`<Radio name="group" label="Option 1" value="opt1"
  checked={value === 'opt1'} onChange={() => setValue('opt1')} />
<Radio name="group" label="Option 2" value="opt2"
  checked={value === 'opt2'} onChange={() => setValue('opt2')} />`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'label', type: 'string', description: 'Radio label text', required: true },
        { name: 'name', type: 'string', description: 'Radio group name', required: true },
        { name: 'value', type: 'string', description: 'Radio value', required: true },
        { name: 'checked', type: 'boolean', description: 'Checked state' },
        { name: 'onChange', type: '() => void', description: 'Change handler' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the radio' },
      ]} />
    </div>
  )
}
