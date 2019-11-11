import React from 'react'
import { css } from '@emotion/core'

import use404 from '../hooks/use-404'
import { SEO } from '../components/seo'
import { Page } from '../components/page'

const NotFoundPage: React.FunctionComponent = () => {
  const { image } = use404()

  return (
    <>
      <SEO title="404" />
      <div
        css={css`
          height: 50px;
        `}
      />
      <Page
        headline="Nothing here"
        lede="404 Not Found"
        title="404 Not Found"
        description="What I'm doing now"
        image={image}
      />
    </>
  )
}

export default NotFoundPage
