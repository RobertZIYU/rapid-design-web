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
        <Tag variant="default">Default</Tag>
        <Tag variant="primary">Primary</Tag>
        <Tag variant="success">Success</Tag>
        <Tag variant="warning">Warning</Tag>
        <Tag variant="error">Error</Tag>
        <Tag variant="info">Info</Tag>
        <Tag variant="neutral">Neutral</Tag>
      </ComponentPreview>
      <CodeBlock code={`<Tag variant="default">Default</Tag>
<Tag variant="primary">Primary</Tag>
<Tag variant="success">Success</Tag>
<Tag variant="warning">Warning</Tag>
<Tag variant="error">Error</Tag>
<Tag variant="info">Info</Tag>
<Tag variant="neutral">Neutral</Tag>`} />

      <h2>Sizes</h2>
      <ComponentPreview title="Size variants">
        <Tag variant="primary" size="sm">Small</Tag>
        <Tag variant="primary" size="md">Medium</Tag>
        <Tag variant="primary" size="lg">Large</Tag>
      </ComponentPreview>

      <h2>Closeable</h2>
      <ComponentPreview title="With close button">
        <Tag variant="success" closeable onClose={() => {}}>Closeable</Tag>
        <Tag variant="error" closeable onClose={() => {}}>Remove</Tag>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'variant', type: "'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'", default: "'default'", description: 'Color variant' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tag size' },
        { name: 'closeable', type: 'boolean', default: 'false', description: 'Show close button' },
        { name: 'onClose', type: '() => void', description: 'Close handler' },
        { name: 'icon', type: 'ReactNode', description: 'Icon before the label' },
      ]} />
    </div>
  )
}
