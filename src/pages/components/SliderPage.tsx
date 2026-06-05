import { useState } from 'react'
import { Slider } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function SliderPage() {
  const [value, setValue] = useState(50)
  const [range, setRange] = useState([20, 80])

  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">Slider</h1>
        <p className="page-header__description">
          Range input supporting single value, range selection, and multiple thumbs.
          Available in horizontal and vertical orientations.
        </p>
      </div>

      <h2>Single Value</h2>
      <ComponentPreview title="Basic slider" align="left">
        <div style={{ width: 320 }}>
          <Slider value={value} onChange={setValue} min={0} max={100} />
        </div>
      </ComponentPreview>
      <CodeBlock code={`<Slider value={50} onChange={setValue} min={0} max={100} />`} />

      <h2>Range</h2>
      <ComponentPreview title="Range slider" align="left">
        <div style={{ width: 320 }}>
          <Slider value={range} onChange={setRange} min={0} max={100} />
        </div>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'value', type: 'number | number[]', description: 'Current value(s)', required: true },
        { name: 'onChange', type: '(value) => void', description: 'Value change handler', required: true },
        { name: 'min', type: 'number', default: '0', description: 'Minimum value' },
        { name: 'max', type: 'number', default: '100', description: 'Maximum value' },
        { name: 'step', type: 'number', default: '1', description: 'Step increment' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the slider' },
        { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Slider orientation' },
      ]} />
    </div>
  )
}
