import { Avatar } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function AvatarPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Data Display</div>
        <h1 className="page-header__title">Avatar</h1>
        <p className="page-header__description">
          User profile images with fallback text. Supports 5 sizes and 2 shapes.
        </p>
      </div>

      <h2>Sizes</h2>
      <ComponentPreview title="Size variants">
        <Avatar size="xs" fallback="XS" />
        <Avatar size="sm" fallback="SM" />
        <Avatar size="md" fallback="MD" />
        <Avatar size="lg" fallback="LG" />
        <Avatar size="xl" fallback="XL" />
      </ComponentPreview>
      <CodeBlock code={`<Avatar size="xs" fallback="XS" />
<Avatar size="sm" fallback="SM" />
<Avatar size="md" fallback="MD" />
<Avatar size="lg" fallback="LG" />
<Avatar size="xl" fallback="XL" />`} />

      <h2>Shapes</h2>
      <ComponentPreview title="Circle and square">
        <Avatar shape="circle" fallback="CI" />
        <Avatar shape="square" fallback="SQ" />
      </ComponentPreview>

      <h2>With Image</h2>
      <ComponentPreview title="Image avatar">
        <Avatar src="https://i.pravatar.cc/150?img=3" alt="User" size="lg" />
        <Avatar src="https://i.pravatar.cc/150?img=5" alt="User" size="lg" shape="square" />
      </ComponentPreview>
      <CodeBlock code={`<Avatar src="https://example.com/photo.jpg" alt="User" size="lg" />
<Avatar src="https://example.com/photo.jpg" alt="User" size="lg" shape="square" />`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'src', type: 'string', description: 'Image URL' },
        { name: 'alt', type: 'string', description: 'Image alt text' },
        { name: 'fallback', type: 'string', description: 'Fallback text (1-2 characters)' },
        { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Avatar size' },
        { name: 'shape', type: "'circle' | 'square'", default: "'circle'", description: 'Avatar shape' },
      ]} />
    </div>
  )
}
