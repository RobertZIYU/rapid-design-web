import { Link as DSLink } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function LinkPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Navigation</div>
        <h1 className="page-header__title">Link</h1>
        <p className="page-header__description">
          Text links with 3 variants (primary, secondary, danger) and 3 sizes.
        </p>
      </div>

      <h2>Variants</h2>
      <ComponentPreview title="Link variants">
        <DSLink variant="primary" href="#">Primary link</DSLink>
        <DSLink variant="secondary" href="#">Secondary link</DSLink>
        <DSLink variant="danger" href="#">Danger link</DSLink>
      </ComponentPreview>
      <CodeBlock code={`<Link variant="primary" href="#">Primary link</Link>
<Link variant="secondary" href="#">Secondary link</Link>
<Link variant="danger" href="#">Danger link</Link>`} />

      <h2>Sizes</h2>
      <ComponentPreview title="Size variants">
        <DSLink size="sm" href="#">Small</DSLink>
        <DSLink size="md" href="#">Medium</DSLink>
        <DSLink size="lg" href="#">Large</DSLink>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'variant', type: "'primary' | 'secondary' | 'danger'", default: "'primary'", description: 'Visual variant' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Link size' },
        { name: 'href', type: 'string', description: 'Link destination', required: true },
        { name: 'external', type: 'boolean', default: 'false', description: 'Open in new tab' },
      ]} />
    </div>
  )
}
