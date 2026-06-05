export interface NavItem {
  label: string
  path: string
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export interface NavSection {
  title: string
  groups?: NavGroup[]
  items?: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { label: 'Welcome', path: '/' },
      { label: 'Installation', path: '/installation' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { label: 'Colors', path: '/foundations/colors' },
      { label: 'Typography', path: '/foundations/typography' },
      { label: 'Elevation', path: '/foundations/elevation' },
      { label: 'Icons', path: '/foundations/icons' },
    ],
  },
  {
    title: 'Form Controls',
    items: [
      { label: 'Button', path: '/components/button' },
      { label: 'Checkbox', path: '/components/checkbox' },
      { label: 'Combobox', path: '/components/combobox' },
      { label: 'Label', path: '/components/label' },
      { label: 'Helptext', path: '/components/helptext' },
      { label: 'Radio', path: '/components/radio' },
      { label: 'Slider', path: '/components/slider' },
      { label: 'TextArea', path: '/components/textarea' },
      { label: 'TextField', path: '/components/textfield' },
      { label: 'Toggle', path: '/components/toggle' },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { label: 'Avatar', path: '/components/avatar' },
      { label: 'Progress', path: '/components/progress' },
      { label: 'Spinner', path: '/components/spinner' },
      { label: 'Tabs', path: '/components/tabs' },
      { label: 'Tag', path: '/components/tag' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { label: 'Link', path: '/components/link' },
      { label: 'Menu', path: '/components/menu' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { label: 'Message', path: '/components/message' },
      { label: 'Popover', path: '/components/popover' },
      { label: 'Toast', path: '/components/toast' },
      { label: 'Tooltip', path: '/components/tooltip' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { label: 'App Shell', path: '/components/app-shell' },
      { label: 'Sidebar', path: '/components/sidebar' },
      { label: 'Form Layout', path: '/components/form-layout' },
      { label: 'Empty State', path: '/components/empty-state' },
    ],
  },
  {
    title: 'Patterns',
    items: [
      { label: 'Animations', path: '/patterns/animations' },
      { label: 'Data Visualization', path: '/patterns/data-visualization' },
      { label: 'Layout Patterns', path: '/patterns/layouts' },
    ],
  },
]
