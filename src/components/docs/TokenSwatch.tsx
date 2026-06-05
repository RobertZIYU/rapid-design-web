interface TokenSwatchProps {
  name: string
  value: string
  cssVar?: string
}

export function TokenSwatch({ name, value, cssVar }: TokenSwatchProps) {
  return (
    <div className="token-swatch">
      <div className="token-swatch__color" style={{ background: value }} />
      <div className="token-swatch__info">
        <div className="token-swatch__name">{cssVar || name}</div>
        <div className="token-swatch__value">{value}</div>
      </div>
    </div>
  )
}

interface TokenRowProps {
  name: string
  value: string
  description?: string
}

export function TokenRow({ name, value, description }: TokenRowProps) {
  return (
    <div className="token-row">
      <div className="token-row__swatch" style={{ background: value }} />
      <div className="token-row__name">{name}</div>
      {description && <div className="token-row__desc">{description}</div>}
    </div>
  )
}
