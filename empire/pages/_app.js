import Head from 'next/head'
import { RecoilRoot } from 'recoil'
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
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Empire</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Raleway:wght@300;400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
