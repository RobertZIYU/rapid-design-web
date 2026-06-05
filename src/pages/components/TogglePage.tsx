import { Toggle } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function TogglePage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">Toggle</h1>
        <p className="page-header__description">
          Binary on/off switch with a 32x16px track. Use for instant settings changes.
        </p>
      </div>

      <h2>Default</h2>
      <ComponentPreview title="Toggle states" direction="column" align="left">
        <Toggle label="Notifications" />
        <Toggle label="Always on" defaultChecked />
        <Toggle label="Disabled" disabled />
        <Toggle label="Disabled (on)" defaultChecked disabled />
      </ComponentPreview>
      <CodeBlock code={`<Toggle label="Notifications" checked={on} onChange={handleChange} />`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'label', type: 'string', description: 'Toggle label text' },
        { name: 'checked', type: 'boolean', description: 'Controlled on/off state' },
        { name: 'onChange', type: 'ChangeEventHandler', description: 'Native change handler' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the toggle' },
      ]} />
    </div>
  )
}
