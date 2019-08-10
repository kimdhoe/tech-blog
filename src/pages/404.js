import React from 'react'
import { css } from '@emotion/core'

import SEO from '../components/seo'

const NotFoundPage = () => (
  <div css={styles.container}>
    <SEO title="404" />
    <h1 css={styles.heading1}>404 Not Found</h1>
    <h2 css={styles.heading2}>
      Nothing
      <br />
      Here
    </h2>
  </div>
)

const styles = {
  container: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
  heading1: css`
    margin: 0;
    letter-spacing: 0.02rem;
    font-size: 0.889rem;
    font-weight: 400;
    color: #868e96;
  `,
  heading2: css`
    margin: 0.7rem 0 0 0;
    line-height: 1.4;
    font-size: 2.618rem;
  `,
}

export default NotFoundPage
