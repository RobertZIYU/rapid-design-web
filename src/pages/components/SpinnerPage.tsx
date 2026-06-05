import { Spinner } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function SpinnerPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Data Display</div>
        <h1 className="page-header__title">Spinner</h1>
        <p className="page-header__description">
          Loading indicator with 3 sizes. Use to indicate ongoing processes.
        </p>
      </div>

      <h2>Sizes</h2>
      <ComponentPreview title="Size variants">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </ComponentPreview>
      <CodeBlock code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`} />

      <h2>With Label</h2>
      <ComponentPreview title="With text">
        <Spinner size="md" label="Loading..." />
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Spinner size' },
        { name: 'label', type: 'string', description: 'Loading label text' },
      ]} />
    </div>
  )
}
