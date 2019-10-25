const Sentry = require('@sentry/browser')
const React = require('react')

const onClientEntry = () => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: process.env.GATSBY_SENTRY_DSN,
    })
  }
}

const wrapRootElement = ({ element }) => {
  if (process.env.NODE_ENV !== 'production') {
    return element
  }

  return React.createElement(ErrorBoundary, null, element)
}

class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo)
      Sentry.captureException(error)
    })
  }

  render() {
    return this.props.children
  }
}

module.exports = {
  onClientEntry,
  wrapRootElement,
}
