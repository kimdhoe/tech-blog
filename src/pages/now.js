import React from 'react'
import { css } from '@emotion/core'

import { Page } from '../components/page'

export default () => (
  <Page
    headline="Now"
    lede="What I'm doing now"
    title="What I'm doing now"
    description="Joseph: What I'm doing now"
  >
    <AboutNow />
    <Body />
  </Page>
)

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
      page. Updated September 3, 2019.
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
      I'm learning how to use Reaniamted to implement sleek gesture interactions
      in my new React Native project.
    </p>

    <p>
      I'm trying to put weight on. All I need is 1.5kg to reach my target
      weight.
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
