import React from 'react'
import { css } from '@emotion/core'

import { SEO } from '../components/seo'
import { PageHeader } from '../components/page-header'

export default () => (
  <div css={styles.container}>
    <SEO
      title="Contact"
      description="I'd love to hear from you, whether you have a question about this website, a feedback on me, or anything else. I'm happy to send you a real response, so please email me and say hi."
    />
    <PageHeader title="Contact" subtitle="Drop me a line" />

    <div css={styles.body}>
      <p css={styles.message}>
        I'd love to hear from you, whether you have a question about this
        website, a feedback on me, or anything else.
      </p>
      <p css={styles.message}>
        I'm happy to send you a real response, so please email at{' '}
        <a href="mailto:kimdhoe1@gmail.com">kimdhoe1@gmail.com</a> and{' '}
        <strong>say hi</strong>.
      </p>
    </div>
  </div>
)

const styles = {
  container: css`
    margin: 4rem auto;
    padding: 0 1rem;
    max-width: 650px;
  `,
  body: css`
    margin: 2rem 0 0 0;
    line-height: 1.8;
  `,
  message: css`
    margin-bottom: 1.5rem;

    span {
      padding: 0.7rem 0 0.7rem 0;
      background: white;
      box-shadow: 1rem 0 0 white, -1rem 0 0 white;
    }

    a {
      letter-spacing: 0.04rem;
      font-size: 1rem;
      color: #7f5555;

      &[href] {
        padding-bottom: 3px;
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
}
