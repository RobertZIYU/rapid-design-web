import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { Welcome } from './pages/Welcome'
import { Installation } from './pages/Installation'
import { Colors } from './pages/foundations/Colors'
import { Typography } from './pages/foundations/Typography'
import { Elevation } from './pages/foundations/Elevation'
import { Icons } from './pages/foundations/Icons'
import { ButtonPage } from './pages/components/ButtonPage'
import { CheckboxPage } from './pages/components/CheckboxPage'
import { ComboboxPage } from './pages/components/ComboboxPage'
import { LabelPage } from './pages/components/LabelPage'
import { HelptextPage } from './pages/components/HelptextPage'
import { RadioPage } from './pages/components/RadioPage'
import { SliderPage } from './pages/components/SliderPage'
import { TextAreaPage } from './pages/components/TextAreaPage'
import { TextFieldPage } from './pages/components/TextFieldPage'
import { TogglePage } from './pages/components/TogglePage'
import { AvatarPage } from './pages/components/AvatarPage'
import { ProgressPage } from './pages/components/ProgressPage'
import { SpinnerPage } from './pages/components/SpinnerPage'
import { TabsPage } from './pages/components/TabsPage'
import { TagPage } from './pages/components/TagPage'
import { LinkPage } from './pages/components/LinkPage'
import { MenuPage } from './pages/components/MenuPage'
import { MessagePage } from './pages/components/MessagePage'
import { PopoverPage } from './pages/components/PopoverPage'
import { ToastPage } from './pages/components/ToastPage'
import { TooltipPage } from './pages/components/TooltipPage'
import { AppShellPage } from './pages/components/AppShellPage'
import { SidebarPage } from './pages/components/SidebarPage'
import { FormLayoutPage } from './pages/components/FormLayoutPage'
import { EmptyStatePage } from './pages/components/EmptyStatePage'
import { Animations } from './pages/patterns/Animations'
import { DataVisualization } from './pages/patterns/DataVisualization'
import { LayoutPatterns } from './pages/patterns/LayoutPatterns'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/installation" element={<Installation />} />

          <Route path="/foundations/colors" element={<Colors />} />
          <Route path="/foundations/typography" element={<Typography />} />
          <Route path="/foundations/elevation" element={<Elevation />} />
          <Route path="/foundations/icons" element={<Icons />} />

          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/checkbox" element={<CheckboxPage />} />
          <Route path="/components/combobox" element={<ComboboxPage />} />
          <Route path="/components/label" element={<LabelPage />} />
          <Route path="/components/helptext" element={<HelptextPage />} />
          <Route path="/components/radio" element={<RadioPage />} />
          <Route path="/components/slider" element={<SliderPage />} />
          <Route path="/components/textarea" element={<TextAreaPage />} />
          <Route path="/components/textfield" element={<TextFieldPage />} />
          <Route path="/components/toggle" element={<TogglePage />} />

          <Route path="/components/avatar" element={<AvatarPage />} />
          <Route path="/components/progress" element={<ProgressPage />} />
          <Route path="/components/spinner" element={<SpinnerPage />} />
          <Route path="/components/tabs" element={<TabsPage />} />
          <Route path="/components/tag" element={<TagPage />} />

          <Route path="/components/link" element={<LinkPage />} />
          <Route path="/components/menu" element={<MenuPage />} />

          <Route path="/components/message" element={<MessagePage />} />
          <Route path="/components/popover" element={<PopoverPage />} />
          <Route path="/components/toast" element={<ToastPage />} />
          <Route path="/components/tooltip" element={<TooltipPage />} />

          <Route path="/components/app-shell" element={<AppShellPage />} />
          <Route path="/components/sidebar" element={<SidebarPage />} />
          <Route path="/components/form-layout" element={<FormLayoutPage />} />
          <Route path="/components/empty-state" element={<EmptyStatePage />} />

          <Route path="/patterns/animations" element={<Animations />} />
          <Route path="/patterns/data-visualization" element={<DataVisualization />} />
          <Route path="/patterns/layouts" element={<LayoutPatterns />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
