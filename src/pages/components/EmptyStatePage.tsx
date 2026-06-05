import { EmptyState, Button } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function EmptyStatePage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Layout</div>
        <h1 className="page-header__title">Empty State</h1>
        <p className="page-header__description">
          Centered placeholder for pages or sections with no content. Includes icon, title,
          description, and optional action button.
        </p>
      </div>

      <h2>Default</h2>
      <ComponentPreview title="Empty state">
        <EmptyState
          title="No results found"
          description="Try adjusting your search or filter criteria."
          action={<Button variant="primary">Clear Filters</Button>}
        />
      </ComponentPreview>
      <CodeBlock code={`<EmptyState
  title="No results found"
  description="Try adjusting your search or filter criteria."
  action={<Button variant="primary">Clear Filters</Button>}
/>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'title', type: 'string', description: 'Heading text', required: true },
        { name: 'description', type: 'string', description: 'Supporting text' },
        { name: 'icon', type: 'ReactNode', description: 'Custom icon or illustration' },
        { name: 'action', type: 'ReactNode', description: 'Call-to-action button' },
      ]} />
    </div>
  )
}
