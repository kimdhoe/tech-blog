import React from 'react'
import { css } from '@emotion/core'

import useNow from '../hooks/use-now'
import { Page } from '../components/page'

export default () => {
  const { image } = useNow()

  return (
    <Page
      headline="Now"
      lede="What I'm doing now"
      title="What I'm doing now"
      description="Joseph: What I'm doing now"
      image={image}
    >
      <AboutNow />
      <Body />
    </Page>
  )
}

const AboutNow = () => (
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
      page. Updated October 22, 2019.
    </p>
  </section>
)

const Body = () => (
  <section>
    <p>
      I'm home in Seoul, Korea with my wife <i>Summer</i>. We married last May.
    </p>

    <p>
      Making and polishing this website has been my recent priority. The goal is
      to develop the habit of documenting dev-related progress as well as other
      thoughts and events.
    </p>

    <p>
      We decided to go on a trip to Boston this winter.
    </p>
  </section>
)

const styles = {
  now: css`
    margin-bottom: 4.5rem;
    letter-spacing: 0.01rem;
    font-size: 0.85rem;
  `,
}
