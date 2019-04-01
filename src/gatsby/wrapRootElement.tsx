import * as React from 'react'
import { theme } from '../theme'
import { ErrorBoundary } from '../components/errorBoundary'
import { ThemeProvider } from '../components/styled'

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>{element}</ErrorBoundary>
    </ThemeProvider>
  )
}
