import { CodeBlock } from '../components/docs/CodeBlock'

export function Installation() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Getting Started</div>
        <h1 className="page-header__title">Installation</h1>
        <p className="page-header__description">
          Get started with Rapid StyleKit in your React project.
        </p>
      </div>

      <h2>Install the package</h2>
      <CodeBlock
        language="bash"
        code={`npm install treasure-rapid-stylekit`}
      />

      <h2>Import styles</h2>
      <p>
        Import the design system CSS in your app's entry file. This loads all design tokens,
        component styles, and the Plus Jakarta Sans font.
      </p>
      <CodeBlock
        code={`// src/main.tsx
import 'treasure-rapid-stylekit/dist/index.css'`}
      />

      <h2>Use components</h2>
      <p>Import and use components directly from the package.</p>
      <CodeBlock
        code={`import { Button, TextField, Tag } from 'treasure-rapid-stylekit'

function App() {
  return (
    <div>
      <TextField label="Email" type="email" />
      <Button variant="primary">Submit</Button>
      <Tag variant="success">Active</Tag>
    </div>
  )
}`}
      />

      <h2>Use design tokens</h2>
      <p>
        All design tokens are available as CSS custom properties. Use them in your own styles
        for visual consistency.
      </p>
      <CodeBlock
        language="css"
        code={`.my-card {
  background: var(--surface-default);
  color: var(--text-default);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card-2);
  padding: 24px;
}`}
      />

      <h2>Tech stack</h2>
      <table className="props-table">
        <thead>
          <tr>
            <th>Technology</th>
            <th>Version</th>
            <th colSpan={2}>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>React</td><td>19</td><td colSpan={2}>UI framework</td></tr>
          <tr><td>TypeScript</td><td>5.7+</td><td colSpan={2}>Type safety</td></tr>
          <tr><td>CSS Custom Properties</td><td>—</td><td colSpan={2}>Design tokens</td></tr>
          <tr><td>Vite</td><td>7+</td><td colSpan={2}>Build tool</td></tr>
          <tr><td>Plus Jakarta Sans</td><td>—</td><td colSpan={2}>Primary font</td></tr>
        </tbody>
      </table>
    </div>
  )
}
