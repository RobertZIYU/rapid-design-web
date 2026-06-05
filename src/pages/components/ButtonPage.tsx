import { Button, HomeIcon, PlusIcon, CheckIcon } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function ButtonPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">Button</h1>
        <p className="page-header__description">
          Buttons trigger actions. Six variants cover primary actions, secondary options,
          outlined borders, ghost/subtle buttons, text links, and destructive operations.
        </p>
      </div>

      <h2>Variants</h2>
      <ComponentPreview title="All variants">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </ComponentPreview>
      <CodeBlock code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>`} />

      <h2>Sizes</h2>
      <ComponentPreview title="Size variants">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </ComponentPreview>
      <CodeBlock code={`<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>`} />

      <h2>With Icons</h2>
      <ComponentPreview title="Icon buttons">
        <Button variant="primary" icon={<PlusIcon />}>Add Item</Button>
        <Button variant="secondary" icon={<HomeIcon />}>Home</Button>
        <Button variant="outline" endIcon={<CheckIcon />}>Confirm</Button>
        <Button variant="ghost" icon={<HomeIcon />} iconOnly aria-label="Home" />
      </ComponentPreview>
      <CodeBlock code={`<Button variant="primary" icon={<PlusIcon />}>Add Item</Button>
<Button variant="secondary" icon={<HomeIcon />}>Home</Button>
<Button variant="outline" endIcon={<CheckIcon />}>Confirm</Button>
<Button variant="ghost" icon={<HomeIcon />} iconOnly aria-label="Home" />`} />

      <h2>Disabled</h2>
      <ComponentPreview title="Disabled state">
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="outline" disabled>Outline</Button>
      </ComponentPreview>

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'", default: "'primary'", description: 'Visual style variant' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size' },
        { name: 'icon', type: 'ReactNode', description: 'Icon before the label' },
        { name: 'endIcon', type: 'ReactNode', description: 'Icon after the label' },
        { name: 'iconOnly', type: 'boolean', default: 'false', description: 'Render icon-only button (requires aria-label)' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable the button' },
        { name: 'onClick', type: '() => void', description: 'Click handler' },
        { name: 'className', type: 'string', description: 'Additional CSS class' },
      ]} />

      <h2>Guidelines</h2>
      <div className="dos-donts">
        <div className="dos-donts__col dos-donts__col--do">
          <h4>Do</h4>
          <ul>
            <li>Use primary for the single most important action on the page</li>
            <li>Use secondary for supporting actions</li>
            <li>Always include aria-label for icon-only buttons</li>
            <li>Use destructive only for irreversible actions (delete, remove)</li>
          </ul>
        </div>
        <div className="dos-donts__col dos-donts__col--dont">
          <h4>Don't</h4>
          <ul>
            <li>Don't use more than one primary button in the same action group</li>
            <li>Don't use destructive for "cancel" — use secondary instead</li>
            <li>Don't create custom button variants</li>
            <li>Don't use emojis — use design system icons</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
