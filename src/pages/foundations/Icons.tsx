import { useState } from 'react'
import {
  ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon,
  ArtifactsIcon, AudienceIcon, CalendarIcon,
  CaretDownIcon, CaretLeftIcon, CaretRightIcon, CaretUpIcon,
  CheckIcon, CircleHelpIcon, CirclePlusIcon, CollapseIcon,
  DataWorkbenchIcon, DocumentIcon, DownloadIcon,
  EngageIcon, ExpandIcon, ExportIcon, FilterIcon,
  FoundryIcon, HomeIcon, ImageIcon, JobsIcon,
  MoreIcon, NewChatIcon, P13nIcon,
  PencilAiIcon, PencilIcon, PlusIcon, PointEditIcon,
  PreviousChatsIcon, ReleaseIcon, SaveIcon,
  SettingsIcon, ShareIcon, SuperAgentIcon,
  WarningIcon, WorkspaceAltIcon, WorkspaceIcon,
} from 'treasure-rapid-stylekit'
import { CodeBlock } from '../../components/docs/CodeBlock'

const icons = [
  { name: 'ArrowDownIcon', component: ArrowDownIcon, category: 'Navigation' },
  { name: 'ArrowLeftIcon', component: ArrowLeftIcon, category: 'Navigation' },
  { name: 'ArrowRightIcon', component: ArrowRightIcon, category: 'Navigation' },
  { name: 'ArrowUpIcon', component: ArrowUpIcon, category: 'Navigation' },
  { name: 'ArtifactsIcon', component: ArtifactsIcon, category: 'Product' },
  { name: 'AudienceIcon', component: AudienceIcon, category: 'Product' },
  { name: 'CalendarIcon', component: CalendarIcon, category: 'Content' },
  { name: 'CaretDownIcon', component: CaretDownIcon, category: 'Navigation' },
  { name: 'CaretLeftIcon', component: CaretLeftIcon, category: 'Navigation' },
  { name: 'CaretRightIcon', component: CaretRightIcon, category: 'Navigation' },
  { name: 'CaretUpIcon', component: CaretUpIcon, category: 'Navigation' },
  { name: 'CheckIcon', component: CheckIcon, category: 'Status' },
  { name: 'CircleHelpIcon', component: CircleHelpIcon, category: 'Status' },
  { name: 'CirclePlusIcon', component: CirclePlusIcon, category: 'Editing' },
  { name: 'CollapseIcon', component: CollapseIcon, category: 'Navigation' },
  { name: 'DataWorkbenchIcon', component: DataWorkbenchIcon, category: 'Product' },
  { name: 'DocumentIcon', component: DocumentIcon, category: 'Content' },
  { name: 'DownloadIcon', component: DownloadIcon, category: 'Content' },
  { name: 'EngageIcon', component: EngageIcon, category: 'Product' },
  { name: 'ExpandIcon', component: ExpandIcon, category: 'Navigation' },
  { name: 'ExportIcon', component: ExportIcon, category: 'Content' },
  { name: 'FilterIcon', component: FilterIcon, category: 'Content' },
  { name: 'FoundryIcon', component: FoundryIcon, category: 'Product' },
  { name: 'HomeIcon', component: HomeIcon, category: 'Navigation' },
  { name: 'ImageIcon', component: ImageIcon, category: 'Content' },
  { name: 'JobsIcon', component: JobsIcon, category: 'Product' },
  { name: 'MoreIcon', component: MoreIcon, category: 'Navigation' },
  { name: 'NewChatIcon', component: NewChatIcon, category: 'Content' },
  { name: 'P13nIcon', component: P13nIcon, category: 'Product' },
  { name: 'PencilAiIcon', component: PencilAiIcon, category: 'Editing' },
  { name: 'PencilIcon', component: PencilIcon, category: 'Editing' },
  { name: 'PlusIcon', component: PlusIcon, category: 'Editing' },
  { name: 'PointEditIcon', component: PointEditIcon, category: 'Editing' },
  { name: 'PreviousChatsIcon', component: PreviousChatsIcon, category: 'Content' },
  { name: 'ReleaseIcon', component: ReleaseIcon, category: 'Product' },
  { name: 'SaveIcon', component: SaveIcon, category: 'Content' },
  { name: 'SettingsIcon', component: SettingsIcon, category: 'Navigation' },
  { name: 'ShareIcon', component: ShareIcon, category: 'Content' },
  { name: 'SuperAgentIcon', component: SuperAgentIcon, category: 'Product' },
  { name: 'WarningIcon', component: WarningIcon, category: 'Status' },
  { name: 'WorkspaceAltIcon', component: WorkspaceAltIcon, category: 'Product' },
  { name: 'WorkspaceIcon', component: WorkspaceIcon, category: 'Product' },
]

export function Icons() {
  const [search, setSearch] = useState('')
  const filtered = icons.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Foundations</div>
        <h1 className="page-header__title">Icons</h1>
        <p className="page-header__description">
          {icons.length} custom SVG icons at 24x24px. All icons use <code>currentColor</code> for
          color inheritance.
        </p>
      </div>

      <div style={{ marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            maxWidth: 360,
            padding: '8px 12px',
            border: '1px solid var(--ds-border)',
            borderRadius: 'var(--ds-radius-md)',
            fontSize: 14,
            fontFamily: 'inherit',
            outline: 'none',
          }}
        />
      </div>

      <div className="icon-grid">
        {filtered.map(icon => {
          const Icon = icon.component
          return (
            <div className="icon-grid__item" key={icon.name} title={icon.name}>
              <Icon />
              <span className="icon-grid__label">{icon.name.replace('Icon', '')}</span>
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', padding: 48, color: 'var(--ds-text-tertiary)' }}>
          No icons match "{search}"
        </p>
      )}

      <h2>Usage</h2>
      <CodeBlock code={`import { HomeIcon, CheckIcon, PlusIcon } from 'treasure-rapid-stylekit'

// Standalone
<HomeIcon />

// In a button
<Button icon={<HomeIcon />}>Home</Button>

// Custom size
<HomeIcon style={{ width: 16, height: 16 }} />

// Custom color
<HomeIcon style={{ color: 'var(--text-primary)' }} />`} />

      <h2>Sizing Reference</h2>
      <table className="props-table">
        <thead>
          <tr>
            <th>Context</th>
            <th>Size</th>
            <th colSpan={2}>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Default</td><td>24x24px</td><td colSpan={2}>Standard icon size</td></tr>
          <tr><td>Button (md/sm)</td><td>12x12px</td><td colSpan={2}>Auto-sized by Button component</td></tr>
          <tr><td>Button (xs)</td><td>10x10px</td><td colSpan={2}>Auto-sized by Button component</td></tr>
          <tr><td>Inline text</td><td>16x16px</td><td colSpan={2}>Set via inline style</td></tr>
        </tbody>
      </table>
    </div>
  )
}
