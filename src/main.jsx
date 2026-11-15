import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource/be-vietnam-pro/latin-400.css'
import '@fontsource/be-vietnam-pro/latin-500.css'
import '@fontsource/be-vietnam-pro/latin-600.css'
import '@fontsource/be-vietnam-pro/latin-700.css'
import './index.css'
import App from './App'

const theme = createTheme({
  primaryColor: 'teal',
  fontFamily: '"Be Vietnam Pro", sans-serif',
  headings: { fontFamily: '"Plus Jakarta Sans Variable", sans-serif' },
  defaultRadius: 'md',
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
