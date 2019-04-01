import * as Sentry from '@sentry/browser'
import * as React from 'react'
import _ from 'lodash'

export const ErrorBoundaryContent: React.SFC<{ onClick: () => void }> = ({ onClick }) => (
  <div>error</div>
)

export class ErrorBoundary extends React.Component<{}, { error: Error | null }> {
  state = { error: null }

  componentDidCatch(error: Error, errorInfo: any) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      scope.setTag('errorViewDisplayed', 'true')
      Sentry.captureException(error)
    })
    this.setState({ error })
  }

  render() {
    if (this.state.error) {
      return <ErrorBoundaryContent onClick={() => Sentry.showReportDialog()} />
    } else {
      return this.props.children
    }
  }
}
