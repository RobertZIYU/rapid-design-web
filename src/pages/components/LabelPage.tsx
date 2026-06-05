import { Label } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function LabelPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Form Controls</div>
        <h1 className="page-header__title">Label</h1>
        <p className="page-header__description">
          Standalone label with required asterisk indicator and optional help icon.
        </p>
      </div>

      <h2>Variants</h2>
      <ComponentPreview title="Label variants" direction="column" align="left">
        <Label>Default label</Label>
        <Label required>Required label</Label>
        <Label showHelpIcon>Label with help</Label>
        <Label required showHelpIcon>Required with help</Label>
      </ComponentPreview>
      <CodeBlock code={`<Label>Default label</Label>
<Label required>Required label</Label>
<Label showHelpIcon>Label with help</Label>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'children', type: 'string', description: 'Label text', required: true },
        { name: 'required', type: 'boolean', default: 'false', description: 'Show required asterisk' },
        { name: 'showHelpIcon', type: 'boolean', default: 'false', description: 'Show help icon' },
        { name: 'htmlFor', type: 'string', description: 'Associated input ID' },
      ]} />
    </div>
  )
}
