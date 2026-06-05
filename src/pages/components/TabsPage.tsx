import { useState } from 'react'
import { Tabs } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

const tabItems = [
  { key: 'overview', label: 'Overview' },
  { key: 'usage', label: 'Usage' },
  { key: 'api', label: 'API' },
]

export function TabsPage() {
  const [tab1, setTab1] = useState('overview')
  const [tab2, setTab2] = useState('overview')

  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Data Display</div>
        <h1 className="page-header__title">Tabs</h1>
        <p className="page-header__description">
          Navigation tabs in two variants: primary (underline) and secondary (pill) styles.
        </p>
      </div>

      <h2>Primary (Underline)</h2>
      <ComponentPreview title="Primary variant" align="left">
        <Tabs variant="primary" items={tabItems} value={tab1} onChange={setTab1} />
      </ComponentPreview>
      <CodeBlock code={`<Tabs
  variant="primary"
  items={[
    { key: 'overview', label: 'Overview' },
    { key: 'usage', label: 'Usage' },
    { key: 'api', label: 'API' },
  ]}
  value={activeTab}
  onChange={setActiveTab}
/>`} />

      <h2>Secondary (Pill)</h2>
      <ComponentPreview title="Secondary variant" align="left">
        <Tabs variant="secondary" items={tabItems} value={tab2} onChange={setTab2} />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'variant', type: "'primary' | 'secondary'", default: "'primary'", description: 'Tab style: underline or pill', required: true },
        { name: 'items', type: 'TabItem[]', description: 'Array of { key, label, icon?, iconAfter? }', required: true },
        { name: 'value', type: 'string', description: 'Currently active tab key', required: true },
        { name: 'onChange', type: '(key: string) => void', description: 'Tab change handler', required: true },
      ]} />
    </div>
  )
}
