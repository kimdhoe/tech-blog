import React from 'react'
import { css } from '@emotion/core'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import useNow from '../hooks/use-now'
import { Page } from '../components/page'

export default () => {
  const { update, body, image } = useNow()

  return (
    <Page
      headline="Now"
      lede="What I'm doing now"
      title="What I'm doing now"
      description="Joseph: What I'm doing now"
      image={image}
    >
      <AboutNow update={update} />
      <Body body={body} />
    </Page>
  )
}

const AboutNow = ({ update }) => (
  <section css={styles.now}>
    <p>
      This is a{' '}
      <a
        href="https://nownownow.com/about"
        target="_blank"
        rel="noopener noreferrer"
      >
        now
      </a>{' '}
      page. Updated {update}.
    </p>
  </section>
)

const Body = ({ body }) => (
  <section>
    <MDXRenderer>{body}</MDXRenderer>
  </section>
)

const styles = {
  now: css`
    margin-bottom: 4.5rem;
    letter-spacing: 0.01rem;
    font-size: 0.85rem;
  `,
}
