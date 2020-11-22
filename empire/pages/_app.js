import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import '../styles/globals.scss'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#531253'
    }
  },
  typography: {
    fontFamily: 'Raleway, sans-serif'
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
