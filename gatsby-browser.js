import * as Sentry from '@sentry/browser'
require('./static/styles/code-theme.css')
require('typeface-noto-sans-kr')

export const onClientEntry = (_, pluginParams) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
    })
  }
}
