import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from '../context/themeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
