import React from 'react'
import { css } from '@emotion/core'

import Icon from '../components/icon'

const Share = ({ url, body, headline }) => {
  return (
    <div css={styles.container}>
      <a href={`http://www.facebook.com/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer">
        <Icon name="facebook" attrs={{ width: 22 }} />
      </a>
      <a
        href={`https://twitter.com/share?url=${url}&text=${headline}&via=kimdhoe`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="twitter" attrs={{ width: 20 }} />
      </a>
      <a href={`mailto:?Subject=${headline}&Body=${body}`}>
        <Icon name="mail" attrs={{ width: 19 }} />
      </a>
    </div>
  )
}

const styles = {
  container: css`
    display: flex;

    a {
      margin-right: 1.7rem;
    }
  `,
}

export default Share
