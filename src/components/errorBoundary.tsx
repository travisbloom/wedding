import * as Sentry from "@sentry/browser"
import * as React from "react"
import _ from "lodash"

export class ErrorBoundary extends React.Component<
  {},
  { error: Error | null }
> {
  state = { error: null }

  componentDidCatch(error: Error, errorInfo: any) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      scope.setTag("errorViewDisplayed", "true")
      Sentry.captureException(error)
    })
    this.setState({ error })
  }

  render() {
    return this.props.children
  }
}
