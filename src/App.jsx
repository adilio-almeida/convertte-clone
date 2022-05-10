import './App.scss'
import Header from './components/Header'
import Body from './components/Body'
import Instructions from './components/Instructions'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#06c3d4',
    },
    secondary: {
      main: '#FFF',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box>
        <Header />
        <Body />
        <Instructions />
      </Box>
    </ThemeProvider>
  )
}

export default App
