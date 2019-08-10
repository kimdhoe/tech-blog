import React from 'react'
import { css } from '@emotion/core'

export default () => (
  <>
    <h2 css={styles.title}>Dev Log</h2>
    <h3 css={styles.subtitle}>
      <span css={[styles.subtitleLine, styles.mozHack]}>
        코드를 읽고 쓰면서, 혹은 그와 관련된 활동을 하면서 많은 시간을 썼거나
        기억하고 싶은 것들에 대한 두서없는 기록.
      </span>
    </h3>

    <figure css={styles.epigraph}>
      <blockquote css={styles.epigraphQuote}>Wait. Compiling...</blockquote>
      <figcaption css={styles.epigraphAuthor}>webpack</figcaption>
    </figure>

    <div css={styles.entries}>
      <Entry />
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>
  </>
)

const Entry = () => (
  <div css={styles.entry}>
    <p css={styles.entryDate}>
      <time dateTime="2019-07-08">August 6</time>
    </p>
    <h4 css={styles.entryTitle}>Compiled Successfully</h4>
    <p css={styles.entryBody}>This page is currently under construction.</p>
    <p css={styles.entryBody}>
      Gatsby-built site flashes on page transitions. Gatsby-built site flashes
      on page transitions. Gatsby-built site flashes on page transitions.
      Gatsby-built site flashes on page transitions. Gatsby-built site flashes
      on page transitions. Gatsby-built site flashes on page transitions.
    </p>
  </div>
)

const styles = {
  title: css`
    margin: 0 0 0.79rem 0;
    padding-top: 1rem;
    font-size: 1.802rem;
  `,
  subtitle: css`
    margin: 0;
    max-width: 500px;
    word-break: keep-all;
    line-height: 1.7;
    font-size: 1.266rem;
    font-weight: 400;
  `,
  subtitleLine: css`
    padding: 0.5rem 0 0.75rem 0;
    background: white;
    box-shadow: 1rem 0 0 white, -1rem 0 0 white;
  `,
  epigraph: css`
    margin: 8rem 0 7rem;
    display: flex;
    align-items: center;
    color: #555;
  `,
  epigraphQuote: css`
    margin: 0;
    letter-spacing: 0.08rem;
    font-size: 0.889rem;
    text-transform: uppercase;
  `,
  epigraphAuthor: css`
    display: flex;
    align-items: center;
    letter-spacing: 0.02rem;
    font-size: 0.79rem;
    font-style: italic;

    ::before {
      content: '';
      margin: 0 0.5rem 0 1rem;
      width: 2rem;
      height: 1px;
      background: #495057;
    }
  `,
  entry: css`
    margin-bottom: 4rem;
    font-size: 0.889rem;
  `,
  entryDate: css`
    color: #868e96;
  `,
  entryTitle: css`
    margin: 0 0 1.6rem 0;
    font-size: 1.266rem;
  `,
  entryBody: css`
    margin-top: 0;
    line-height: 1.5;
  `,
  mozHack: {
    '@-moz-document url-prefix()': {
      display: 'block',
    },
  },
}
