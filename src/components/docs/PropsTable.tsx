interface Prop {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

interface PropsTableProps {
  props: Prop[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <table className="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map(prop => (
          <tr key={prop.name}>
            <td>
              {prop.name}
              {prop.required && <span style={{ color: '#ef4444', marginLeft: 2 }}>*</span>}
            </td>
            <td>{prop.type}</td>
            <td>{prop.default || '—'}</td>
            <td style={{ color: 'var(--ds-text-secondary)' }}>{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
