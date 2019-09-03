import React from 'react'
import { css } from '@emotion/core'

import SEO from '../components/seo'

export default () => (
  <article css={styles.container}>
    <SEO
      title="What I'm doing now"
      description="Joseph: What I'm doing now"
    />
    <header css={styles.header}>
      <h2 css={styles.heading}>What I'm doing now</h2>
      <h1 css={styles.subheading}>Now</h1>
      <p css={styles.desc}>
        This is a{' '}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          now
        </a>
        {' '}page.{' '}
        Updated September 3, 2019.
      </p>
    </header>

    <div css={styles.body}>
      <section>
        <p>
          I'm home in Seoul, Korea with my wife <i>Summer</i>. We married last
          May.
        </p>

        <p>
          Making and polishing this website has been my recent priority. The
          goal is to develop the habit of documenting dev-related progress
          as well as other thoughts and events.
        </p>

        <p>
          I'm learning how to use Reaniamted to implement beatiful gesture
          interactions in my new React Native project.
        </p>

        <p>
          I'm trying to put weight on. All I need is 1.5kg to reach my
          target weight.
        </p>
      </section>
    </div>
  </article>
)

const styles = {
  container: css`
    margin: 6rem auto;
    padding: 0 1rem;
    max-width: 650px;
    line-height: 1.9;
  `,
  header: css`
    margin: 0 0 4.5rem 0;

    a {
      text-decoration: none;
      color: #7f5555;

      &[href] {
        padding-bottom: 0.07rem;
        border-bottom: 1px solid #7f5555;
        background-position: 0 100%;
        background-size: auto 3px;
        background-repeat: repeat-x;

        &:hover {
          border-color: transparent;
          background-image: url('/images/underline.svg');
        }
      }
    }
  `,
  heading: css`
    margin: 0;
    letter-spacing: 0.02rem;
    font-size: 0.889rem;
    font-weight: 400;
    color: #728ca3;
  `,
  subheading: css`
    margin: 0;
    padding-bottom: 0.5rem;
    display: inline;
    border-bottom: 6px solid #728ca3;
    line-height: 1.5;
    font-size: 2.618rem;
  `,
  desc: css`
    margin: 4.5rem 0 0;
    font-size: 0.889rem;
  `,
  body: css`
    margin: 2.5rem auto 0;
    max-width: 620px;
    line-height: 1.8;

    h3 {
      margin: 2.75rem 0 1.602rem;
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

    i {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  `,
}
