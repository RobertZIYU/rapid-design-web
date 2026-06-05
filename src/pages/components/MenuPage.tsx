import { Menu, MenuItem, MenuDivider, MenuLabel } from 'treasure-rapid-stylekit'
import { ComponentPreview } from '../../components/docs/ComponentPreview'
import { CodeBlock } from '../../components/docs/CodeBlock'
import { PropsTable } from '../../components/docs/PropsTable'

export function MenuPage() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__subtitle">Navigation</div>
        <h1 className="page-header__title">Menu</h1>
        <p className="page-header__description">
          Dropdown menu system with items, labels, checkboxes, search, and dividers.
        </p>
      </div>

      <h2>Basic Menu</h2>
      <ComponentPreview title="Menu with items" align="left">
        <div style={{ border: '1px solid var(--ds-border)', borderRadius: 8, overflow: 'hidden', width: 220 }}>
          <MenuLabel>File</MenuLabel>
          <MenuItem onClick={() => {}}>New File</MenuItem>
          <MenuItem onClick={() => {}}>Open</MenuItem>
          <MenuItem onClick={() => {}}>Save</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => {}}>Export</MenuItem>
        </div>
      </ComponentPreview>
      <CodeBlock code={`<Menu trigger={<Button>Options</Button>}>
  <MenuLabel>File</MenuLabel>
  <MenuItem onClick={handleNew}>New File</MenuItem>
  <MenuItem onClick={handleOpen}>Open</MenuItem>
  <MenuItem onClick={handleSave}>Save</MenuItem>
  <MenuDivider />
  <MenuItem onClick={handleExport}>Export</MenuItem>
</Menu>`} />

      <h2>Components</h2>
      <PropsTable props={[
        { name: 'Menu', type: 'Container', description: 'Root menu container with trigger prop for the toggle button' },
        { name: 'MenuItem', type: 'Item', description: 'Clickable menu item with onClick handler' },
        { name: 'MenuLabel', type: 'Header', description: 'Non-interactive section label' },
        { name: 'MenuDivider', type: 'Separator', description: 'Visual divider between groups' },
        { name: 'MenuCheckboxItem', type: 'Toggle', description: 'Checkbox toggle item' },
        { name: 'MenuSearch', type: 'Search', description: 'Search input for filtering' },
        { name: 'MenuButtonRow', type: 'Actions', description: 'Row of action buttons' },
      ]} />
    </div>
  )
}
