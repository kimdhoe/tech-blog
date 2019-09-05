import React from 'react'
import { css } from '@emotion/core'

import { SEO } from '../components/seo'
import { PageHeader } from '../components/page-header'

export default () => (
  <article css={styles.container}>
    <SEO title="What I'm doing now" description="Joseph: What I'm doing now" />
    <PageHeader title="Now" subtitle="What I'm doing now" />
    <AboutNow />
    <Body />
  </article>
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
  <div css={styles.body}>
    <section>
      <p>
        I'm home in Seoul, Korea with my wife <i>Summer</i>. We married last
        May.
      </p>

      <p>
        Making and polishing this website has been my recent priority. The goal
        is to develop the habit of documenting dev-related progress as well as
        other thoughts and events.
      </p>

      <p>
        I'm learning how to use Reaniamted to implement beatiful gesture
        interactions in my new React Native project.
      </p>

      <p>
        I'm trying to put weight on. All I need is 1.5kg to reach my target
        weight.
      </p>
    </section>
  </div>
)

const styles = {
  container: css`
    margin: 4rem auto;
    padding: 0 1rem;
    max-width: 650px;

    a {
      padding-bottom: 1px;
      letter-spacing: 0.04rem;
      color: #7f5555;

      &[href] {
        border-bottom: 1px solid #7f5555;
        background-position: 0 100%;
        background-size: auto 3px;
        background-repeat: repeat-x;

        :hover {
          border-color: transparent;
          background-image: url('/images/underline.svg');
        }
      }
    }
  `,
  now: css`
    margin-bottom: 4.5rem;
    letter-spacing: 0.01rem;
    font-size: 0.85rem;
  `,
  body: css`
    margin: 2.5rem auto 0;
    max-width: 620px;
    line-height: 1.8;

    h3 {
      margin: 2.75rem 0 1.602rem;
    }

    p {
      margin: 0 0 1.602rem 0;
    }

    i {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  `,
}
