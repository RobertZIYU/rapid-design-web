import { FormLayout, TextField, Button } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function FormLayoutPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Layout</div>
        <h1 className="page-header__title">Form Layout</h1>
        <p className="page-header__description">
          Form container with title, field sections, and action buttons.
        </p>
      </div>

      <h2>Basic</h2>
      <ComponentPreview title="Form layout" direction="column" align="left">
        <div style={{ width: '100%', maxWidth: 480 }}>
          <FormLayout
            title="Account Settings"
            actions={
              <div style={{ display: 'flex', gap: 8 }}>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Save</Button>
              </div>
            }
          >
            <TextField label="Display Name" placeholder="Enter your name" />
            <TextField label="Email" type="email" placeholder="you@example.com" />
          </FormLayout>
        </div>
      </ComponentPreview>
      <CodeBlock code={`<FormLayout
  title="Account Settings"
  actions={
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Save</Button>
    </div>
  }
>
  <TextField label="Display Name" />
  <TextField label="Email" type="email" />
</FormLayout>`} />

      <h2>Props</h2>
      <PropsTable props={[
        { name: 'title', type: 'string', description: 'Form section title' },
        { name: 'children', type: 'ReactNode', description: 'Form fields', required: true },
        { name: 'actions', type: 'ReactNode', description: 'Action buttons (bottom)' },
      ]} />
    </div>
  )
}
