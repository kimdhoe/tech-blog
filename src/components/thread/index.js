import React from 'react'
import { css } from '@emotion/core'

import ThreadForm from './thread-form'

const Thread = ({ slug }) => (
  <div css={styles.container}>
    <h2 css={styles.threadHeading}>
      Thread
    </h2>
    <ThreadForm slug={slug} />
  </div>
)

const styles = {
  container: css`
    margin: 7.5rem 0 0 0;
  `,
}

export default Thread