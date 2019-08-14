import React from 'react'
import { css } from '@emotion/core'

export default () => (
  <div css={styles.container}>
    <h1 css={styles.heading}>About</h1>
    <h2 css={styles.subheading}>
      dhk.party
    </h2>

    <div css={styles.body}>
      <div css={styles.deck}>
        <span>
          I'm Joseph a frontend developer. This website is a personal blog where
          I share my thoughts and life.
        </span>
      </div>

      <p>
        I have lived in <strong>Seoul, Korea</strong> since university. I am
        currently residing in Songpa District with my lovely wife <i>Summer</i>.
      </p>

      <p>
        I am, so to speak, a <em>self-taught</em> software engineer who majored
        in social science at university and have spend not so many years in the
        field. Having said that, I'm always hesitant to describe myself as
        "self-taught", since the community around the art of building software
        is amazingly supportive and I could get all the help I needed along the
        way.
      </p>

      <p>
        It seems to me that everyone is learning and everyone is teaching.
        Everyone takes inputs from the community to produce outputs into the
        community. This website is one of my attempts to produce outputs and
        contribute back to the community by sharing my <strong>thoughts</strong>
        , my{' '} <strong>learnings</strong>, or just <strong>what I'm doing
        </strong>.
      </p>
    </div>
  </div>
)

const styles = {
  container: css`
    margin-top: 0.7rem;
  `,
  heading: css`
    margin: 0;
    letter-spacing: 0.02rem;
    font-size: 0.889rem;
    font-weight: 400;
    color: #fd8283;
  `,
  subheading: css`
    margin: 0;
    padding-bottom: 0.5rem;
    display: inline;
    border-bottom: 6px solid #fd8283;
    line-height: 1.7;
    font-size: 2.618rem;
  `,
  body: css`
    margin: 2.5rem 0 0 0;
    line-height: 1.8;
    font-size: 1.125rem;

    p {
      margin: 0 0 1.602rem 0;
    }

    em, strong {
      letter-spacing: 0.02rem;
      text-transform: lowercase;
      font-variant: small-caps;
      font-weight: 400;
      font-style: normal;
      color: #555;
    }

    i {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  `,
  deck: css`
    margin-bottom: 3rem;
    line-height: 1.85;
    font-size: 1.266rem;

    span {
      padding: 0.7rem 0 0.7rem 0;
      background: var(--well);
      box-shadow: 1rem 0 0 var(--well), -1rem 0 0 var(--well);
    }
  `,
}