import { TokenSwatch } from '../../components/docs/TokenSwatch'

const colorScales = [
  {
    name: 'Neutral',
    prefix: '--neutral',
    colors: [
      { step: 0, value: '#fcfcfd' }, { step: 1, value: '#f7f7f8' }, { step: 2, value: '#eeeff1' },
      { step: 3, value: '#e6e8ea' }, { step: 4, value: '#d2d6da' }, { step: 5, value: '#b6bcc3' },
      { step: 6, value: '#97a0aa' }, { step: 7, value: '#77818d' }, { step: 8, value: '#576170' },
      { step: 9, value: '#3d4652' }, { step: 10, value: '#242d38' }, { step: 11, value: '#181c21' },
    ],
  },
  {
    name: 'Primary',
    prefix: '--primary',
    colors: [
      { step: 0, value: '#f2f5fe' }, { step: 1, value: '#e6ebfc' }, { step: 2, value: '#cdd7f9' },
      { step: 3, value: '#9bb0f3' }, { step: 4, value: '#6888ee' }, { step: 5, value: '#3661e8' },
      { step: 6, value: '#0439e2' }, { step: 7, value: '#032eb5' }, { step: 8, value: '#022288' },
      { step: 9, value: '#02175a' }, { step: 10, value: '#010b2d' }, { step: 11, value: '#000617' },
    ],
  },
  {
    name: 'Success',
    prefix: '--success',
    colors: [
      { step: 0, value: '#f3fbf8' }, { step: 1, value: '#e7f7f1' }, { step: 2, value: '#cfefe4' },
      { step: 3, value: '#a0dfc8' }, { step: 4, value: '#70d0ad' }, { step: 5, value: '#41c091' },
      { step: 6, value: '#11b076' }, { step: 7, value: '#0e8d5e' }, { step: 8, value: '#0a6a47' },
      { step: 9, value: '#07462f' }, { step: 10, value: '#032318' }, { step: 11, value: '#02120c' },
    ],
  },
  {
    name: 'Warning',
    prefix: '--warning',
    colors: [
      { step: 0, value: '#fffcf6' }, { step: 1, value: '#fff9ed' }, { step: 2, value: '#fef2db' },
      { step: 3, value: '#fee5b7' }, { step: 4, value: '#fdd994' }, { step: 5, value: '#fdcc70' },
      { step: 6, value: '#fcbf4c' }, { step: 7, value: '#ca993d' }, { step: 8, value: '#97732e' },
      { step: 9, value: '#654c1e' }, { step: 10, value: '#32260f' }, { step: 11, value: '#191308' },
    ],
  },
  {
    name: 'Error',
    prefix: '--error',
    colors: [
      { step: 0, value: '#fef6f6' }, { step: 1, value: '#fdecec' }, { step: 2, value: '#fcdada' },
      { step: 3, value: '#f9b4b4' }, { step: 4, value: '#f58f8f' }, { step: 5, value: '#f26969' },
      { step: 6, value: '#ef4444' }, { step: 7, value: '#bf3636' }, { step: 8, value: '#8f2929' },
      { step: 9, value: '#601b1b' }, { step: 10, value: '#300e0e' }, { step: 11, value: '#180707' },
    ],
  },
]

const dataVizScales = [
  { name: 'Sapphire', value: '#5b8def', prefix: '--sapphire' },
  { name: 'Aquamarine', value: '#7dd3fc', prefix: '--aquamarine' },
  { name: 'Emerald', value: '#8dd3c7', prefix: '--emerald' },
  { name: 'Amethyst', value: '#a78bfa', prefix: '--amethyst' },
  { name: 'Morganite', value: '#eb7f9b', prefix: '--morganite' },
  { name: 'Sunstone', value: '#f59e8b', prefix: '--sunstone' },
  { name: 'Amber', value: '#f4a96c', prefix: '--amber' },
]

const semanticSurface = [
  { name: '--surface-default', value: '#fcfcfd', desc: 'App/component backgrounds' },
  { name: '--surface-canvas', value: '#f7f7f8', desc: 'Page canvas' },
  { name: '--surface-page-bg', value: '#f9fbff', desc: 'Light blue app background' },
  { name: '--surface-button-primary', value: '#181c21', desc: 'Primary button fill' },
  { name: '--surface-disabled', value: '#f7f7f8', desc: 'Disabled backgrounds' },
]

const semanticText = [
  { name: '--text-default', value: '#181c21', desc: 'Primary text' },
  { name: '--text-secondary', value: '#77818d', desc: 'Secondary text' },
  { name: '--text-subtext', value: '#97a0aa', desc: 'Subtle/tertiary text' },
  { name: '--text-disabled', value: '#b6bcc3', desc: 'Disabled text' },
  { name: '--text-inverse', value: '#fcfcfd', desc: 'Text on dark backgrounds' },
  { name: '--text-primary', value: '#0439e2', desc: 'Brand-colored text/links' },
  { name: '--text-success', value: '#11b076', desc: 'Success text' },
  { name: '--text-error', value: '#ef4444', desc: 'Error text' },
  { name: '--text-warning', value: '#fcbf4c', desc: 'Warning text' },
]

const semanticBorder = [
  { name: '--border-default', value: '#eeeff1', desc: 'Default borders' },
  { name: '--border-strong', value: '#d2d6da', desc: 'Strong borders' },
  { name: '--border-focus', value: '#6888ee', desc: 'Focus ring color' },
  { name: '--border-error', value: '#f26969', desc: 'Error borders' },
  { name: '--border-warning', value: '#fcbf4c', desc: 'Warning borders' },
]

export function Colors() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Foundations</div>
        <h1 className="page-header__title">Colors</h1>
        <p className="page-header__description">
          12-step color scales from lightest (step 0) to darkest (step 11). Always prefer semantic
          tokens over raw scale values.
        </p>
      </div>

      {colorScales.map(scale => (
        <div key={scale.name} className="section">
          <h2>{scale.name}</h2>
          <div className="token-grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
            {scale.colors.map(c => (
              <TokenSwatch
                key={c.step}
                name={`${scale.name} ${c.step}`}
                value={c.value}
                cssVar={`${scale.prefix}-${c.step}`}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="section">
        <h2>Data Visualization</h2>
        <p>Seven dedicated color scales for charts and graphs. Step 6 is the canonical primary hue.</p>
        <div className="token-grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
          {dataVizScales.map(s => (
            <TokenSwatch key={s.name} name={s.name} value={s.value} cssVar={`${s.prefix}-6`} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Semantic Tokens</h2>
        <p>Use semantic tokens to ensure consistent meaning across the UI.</p>

        <h3>Surface</h3>
        {semanticSurface.map(t => (
          <div className="token-row" key={t.name}>
            <div className="token-row__swatch" style={{ background: t.value }} />
            <div className="token-row__name">{t.name}</div>
            <div className="token-row__desc">{t.desc}</div>
          </div>
        ))}

        <h3>Text</h3>
        {semanticText.map(t => (
          <div className="token-row" key={t.name}>
            <div className="token-row__swatch" style={{ background: t.value }} />
            <div className="token-row__name">{t.name}</div>
            <div className="token-row__desc">{t.desc}</div>
          </div>
        ))}

        <h3>Border</h3>
        {semanticBorder.map(t => (
          <div className="token-row" key={t.name}>
            <div className="token-row__swatch" style={{ background: t.value }} />
            <div className="token-row__name">{t.name}</div>
            <div className="token-row__desc">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
