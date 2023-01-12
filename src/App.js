import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from './scenes/global/TopBar'
import Dashboard from "./scenes/dashboard";
import {Routes, Route} from 'react-router-dom'
import Sidebar from './scenes/global/Sidebar'
import Team from './scenes/dashboard/dashboardElements/Team'
import Invoices from './scenes/dashboard/dashboardElements/Invoices'
import Contacts from './scenes/dashboard/dashboardElements/Contacts'
import Bar from './scenes/dashboard/dashboardElements/Bar'
import Form from './scenes/dashboard/dashboardElements/Form'
import Line from './scenes/dashboard/dashboardElements/Line'
import Pie from './scenes/dashboard/dashboardElements/Pie'
import FAQ from './scenes/dashboard/dashboardElements/FAQ'
import Geography from './scenes/dashboard/dashboardElements/Geography'
import Calender from './scenes/dashboard/dashboardElements/Geography'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calender" element={<Calender />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
