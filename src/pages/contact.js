import React from 'react'
import { css } from '@emotion/core'

import SEO from '../components/seo'

export default () => (
  <div css={styles.container}>
    <SEO
      title="Contact"
      description="I'd love to hear from you, whether you have a question about this website, a feedback on me, or anything else. I'm happy to send you a real response, so please email me and say hi."
    />
    <h1 css={styles.heading}>Contact</h1>
    <h2 css={styles.subheading}>Drop me a line</h2>

    <div css={styles.body}>
      <p css={styles.deck}>
        <span>
          I'd love to hear from you, whether you have a question about this
          website, a feedback on me, or anything else.
        </span>
      </p>
      <p css={styles.message}>
        I'm happy to send you a <em>real</em> response, so please email at{' '}
        <a href="mailto:kimdhoe1@gmail.com">kimdhoe1@gmail.com</a> and{' '}
        <strong>say hi</strong>.
      </p>
    </div>
  </div>
)

const styles = {
  container: css`
    margin: 6rem auto;
    padding: 0 1rem;
    max-width: 650px;
  `,
  heading: css`
    letter-spacing: 0.02rem;
    font-size: 0.889rem;
    font-weight: 400;
    color: #728CA3;
  `,
  subheading: css`
    margin: 0;
    padding-bottom: 0.2rem;
    display: inline-block;
    border-bottom: 6px solid #728CA3;
    line-height: 1.4;
    font-size: 2.618rem;
  `,
  body: css`
    margin: 2rem 0 0 0;
    line-height: 1.8;
    font-size: 1.125rem;
  `,
  deck: css`
    line-height: 1.85;
    font-size: 1.266rem;

    span {
      padding: 0.7rem 0 0.7rem 0;
      background: var(--well);
      box-shadow: 1rem 0 0 var(--well), -1rem 0 0 var(--well);
    }
  `,
  message: css`
    margin-top: 3.5rem;

    span {
      padding: 0.7rem 0 0.7rem 0;
      background: white;
      box-shadow: 1rem 0 0 white, -1rem 0 0 white;
    }

    em {
      letter-spacing: 0.02rem;
      text-transform: lowercase;
      font-variant: small-caps;
      font-weight: 400;
      font-style: normal;
    }

    a {
      letter-spacing: 0.04rem;
      font-size: 1rem;
      color: #7F5555;

      &[href] {
        padding-bottom: 3px;
        border-bottom: 1px solid #7F5555;
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
