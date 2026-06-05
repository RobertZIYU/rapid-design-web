import { Tag } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function TagPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Data Display</div>
        <h1 className="page-header__title">Tag</h1>
        <p className="page-header__description">
          Status badges with 7 color variants for categorization, icon support, and closeable option.
        </p>
      </div>

      <h2>Variants</h2>
      <ComponentPreview title="All color variants">
        <Tag variant="primary">Primary</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="error">Error</Tag>
        <Tag variant="neutral">Neutral</Tag>
        <Tag variant="purple">Purple</Tag>
        <Tag variant="teal">Teal</Tag>
      </ComponentPreview>
      <CodeBlock code={`<Tag variant="primary">Primary</Tag>
<Tag variant="success">Success</Tag>
<Tag variant="warning">Warning</Tag>
<Tag variant="error">Error</Tag>
<Tag variant="neutral">Neutral</Tag>
<Tag variant="purple">Purple</Tag>
<Tag variant="teal">Teal</Tag>`} />

      <h2>Sizes</h2>
      <ComponentPreview title="Size variants">
        <Tag variant="primary" size="mini">Mini</Tag>
        <Tag variant="primary" size="default">Default</Tag>
      </ComponentPreview>

      <h2>Closeable</h2>
      <ComponentPreview title="With close button">
        <Tag variant="success" onClose={() => {}}>Closeable</Tag>
        <Tag variant="error" onClose={() => {}}>Remove</Tag>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'variant', type: "'success' | 'warning' | 'error' | 'neutral' | 'primary' | 'purple' | 'teal'", default: "'neutral'", description: 'Color variant' },
        { name: 'size', type: "'default' | 'mini'", default: "'default'", description: 'Tag size' },
        { name: 'onClose', type: '() => void', description: 'Close handler (shows close button when provided)' },
        { name: 'icon', type: 'ReactNode', description: 'Icon before the label' },
        { name: 'children', type: 'string', description: 'Tag text', required: true },
      ]} />
    </div>
  )
}
