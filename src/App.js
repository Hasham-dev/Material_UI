import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Layout from './components/Layout'
import { useAuth0 } from '@auth0/auth0-react'
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
  const { loginWithRedirect } = useAuth0()
  const { isAuthenticated, isLoading } = useAuth0()

  if (!isAuthenticated && !isLoading) loginWithRedirect()

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
