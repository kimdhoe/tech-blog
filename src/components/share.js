import React from 'react'
import { css } from '@emotion/core'
import { Facebook, Mail, Twitter } from 'react-feather'

const Share = ({ url, body, headline }) => {
  return (
    <div css={styles.container}>
      <a
        href={`http://www.facebook.com/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span css={styles.hidden}>Facebook</span>
        <Facebook size={22} />
      </a>
      <a
        href={`https://twitter.com/share?url=${url}&text=${headline}&via=kimdhoe`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter size={20} />
        <span css={styles.hidden}>Twitter</span>
      </a>
      <a href={`mailto:?Subject=${headline}&Body=${body}`}>
        <Mail size={19} />
        <span css={styles.hidden}>Email</span>
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
  hidden: css`
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  `,
}

export default Share
