import React from 'react'
import { css } from '@emotion/core'

export default () => (
  <article css={styles.container}>
    <header>
      <h1 css={styles.heading}>About</h1>
      <h2 css={styles.subheading}>
        dhk.party
      </h2>
    </header>

    <div css={styles.body}>
      <section css={styles.lede}>
        <span>
          I am Joseph a web front-end developer.
          <br />
          This website is a personal blog where I share my thoughts and life.
        </span>
      </section>

      <section>
        <h3>Recent state</h3>
        <p>
          I have lived in <strong>Seoul, Korea</strong> since university. I am
          currently residing in Songpa District with my lovely wife{' '}
          <i>Summer</i>.
        </p>
      </section>

      <section>
        <h3>Why this site exists</h3>
        <p>
          I am, so to speak, a <em>self-taught</em> software engineer who
          majored in social science university and have spend not so many years
          in the industry. Having said that, I'm always hesitant to describe
          myself as self-taught, since the community around the art of building
          software has been supportive and I could get all the help I needed
          along the way.
        </p>

        <p>
          It seems to me that everyone is learning and everyone is teaching.
          Everyone takes inputs from the community to produce outputs into the
          community. This website is one of my attempts to produce outputs and
          contribute back to the community by sharing my
          <strong>thoughts</strong>, my{' '} <strong>learnings</strong>, or
          just <strong>what I'm doing</strong>.
        </p>
      </section>

      <section>
        <h3>History</h3>
        <p>
          I majored in public administration at university. I have been a
          leather crafter for some time, during which I started to learn how to
          code to setup my own retail shop. Since then writing code has become
          my major means of craftsmanship.
        </p>
      </section>

      <section css={styles.me}>
        <h3>About myself</h3>
        <p>
          I'm not really a party person, just in case you get the wrong
          impression from the domain name. When I'm not in front of computer, I
          like to spend time with my wife or read a book in a quiet place. I
          love <strong>coffee</strong> and I hardly drink liquor.
        </p>
      </section>
    </div>
  </article>
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
    line-height: 1.5;
    font-size: 2.618rem;
  `,
  body: css`
    margin: 2.5rem 0 0 0;
    line-height: 1.8;

    section {
      padding: 0 0 0.9rem 0;
    }

    h3 {
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap; /* added line */
    }

    p {
      margin: 0 0 1.602rem 0;
    }

    a {
      text-decoration: none;
      background: linear-gradient(to right, #fd828377 0%, #fd828377);
      background-repeat: no-repeat;
      background-size: 100% 0.2rem;
      background-position: 0 88%;
      transition: background-size 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;

      &:hover {
        background-size: 100% 88%;
      }
    }

    em, strong {
      letter-spacing: 0.02rem;
      text-transform: lowercase;
      font-variant: small-caps;
      font-weight: 400;
      font-style: normal;
      color: black;
    }

    i {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  `,
  lede: css`
    margin-bottom: 2rem;
    line-height: 1.85;
    font-size: 1.266rem;

    span {
      padding: 0.7rem 0 0.7rem 0;
      background: var(--well);
      box-shadow: 1rem 0 0 var(--well), -1rem 0 0 var(--well);
    }
  `,
}