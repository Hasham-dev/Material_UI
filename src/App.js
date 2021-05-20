import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Layout from './components/Layout'
import Routes from './Router'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
