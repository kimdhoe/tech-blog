import * as Sentry from '@sentry/browser'
import React from 'react'
require('./static/styles/code-theme.css')
require('typeface-noto-sans-kr')

export const onClientEntry = () => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: process.env.GATSBY_SENTRY_DSN,
    })
  }
}

export const wrapRootElement = ({ element }) => {
  if (process.env.NODE_ENV !== 'production') {
    return element
  }

  return <ErrorBoundary>{element}</ErrorBoundary>
}

class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.log('info', errorInfo)
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo)
      Sentry.captureException(error)
    })
  }

  render() {
    return this.props.children
  }
}
