import React from 'react'
import { css } from '@emotion/core'

const PageHeader = ({ headline, lede }) => (
  <header css={styles.header}>
    <h1 css={styles.heading}>{headline}</h1>
    <h2 css={styles.subheading}>{lede}</h2>
  </header>
)

const styles = {
  header: css`
    margin-bottom: 4rem;
  `,
  heading: css`
    margin: 0 0 1.5rem 0;
    padding-top: 1rem;
    font-size: 1.802rem;
  `,
  subheading: css`
    position: relative;
    margin: 0;
    padding-top: 1.5rem;
    word-break: keep-all;
    line-height: 1.7;
    font-weight: 400;
    font-size: 1rem;

    ::before {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0.1rem;
      width: 70px;
      height: 1px;
      background-color: var(--text)
    }
  `,
}

export { PageHeader }
