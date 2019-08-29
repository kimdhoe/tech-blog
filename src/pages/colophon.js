import React from 'react'
import { css } from '@emotion/core'

import SEO from '../components/seo'

export default () => (
  <article css={styles.container}>
    <SEO title="Colophon" />
    <h1 css={styles.heading}>Colophon</h1>

    <p css={styles.date}>
      Updated at <time dateTime="2019-08-22">August 12, 2019</time>.
    </p>

    <div css={styles.body}>
      <h2>Technology</h2>

      <ul>
        <li>
          This website is built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>, and hosted on{' '}
          <a href="https://zeit.co/now">ZEIT Now</a>.
        </li>
        <li>
          The commenting system is implemented with{' '}
          <a href="https://staticman.net">Staticman</a>, whose instance is{' '}
          self-hosted on <a href="https://zeit.co/now">ZEIT Now</a>.
        </li>
        <li>
          The whole source code, articles and comments are hosted on{' '}
          <a href="https://github.com/kimdhoe/tech-blog">GitHub</a>.
        </li>
        <li>
          Made on a Mac with{' '}
          <a href="https://code.visualstudio.com">Visual Studio Code</a>,{' '}
          <a href="https://www.iterm2.com">iTerm2</a>, and{' '}
          <a href="https://www.google.com/chrome">Chrome</a>.
        </li>
      </ul>

      <h2>Logo</h2>

      <ul>
        <li>
          The logo was made by <a href="https://www.namecheap.com/logo-maker/">Namecheap Logo Maker</a>.
        </li>
      </ul>

      <h2>Icon</h2>

      <ul>
        <li>
          A few <a href="https://feathericons.com">Feather</a> icons are used.
        </li>
      </ul>

      <h2>Typeface</h2>

      <ul>
        <li>
          This website is configured to use system typeface if possible, and{' '}
          <a href="https://fonts.google.com/specimen/Noto+Sans+KR">
            Noto Sans KR
          </a>{' '}
          in some other cases.
        </li>
        <li>
          Used <a href="https://github.com/tonsky/FiraCode">Fira Code</a> for
          monospaced texts.
        </li>
      </ul>
    </div>
  </article>
)

const styles = {
  heading: css`
    margin: 0 0 1rem 0;
    padding-top: 1rem;
    font-size: 2.618rem;
  `,
  date: css`
    margin: 0 0 5rem 0;
    font-size: 0.79rem;
    color: #888;
  `,
  body: css`
    line-height: 1.7;

    p,
    ul,
    ol {
      margin-bottom: 1.602rem;
    }

    blockquote {
      margin-left: 1.5rem;
      margin-right: 0;
      font-size: 0.889rem;
    }

    a {
      text-decoration: none;
      color: inherit;
      color: #7F5555;

      &[href] {
        padding-bottom: 3px;
        border-bottom: 1px solid #7F5555;
        background-position: 0 100%;
        background-size: auto 3px;
        background-repeat: repeat-x;

        &:hover {
          border-color: transparent;
          background-image: url('/images/underline.svg');
        }
      }
    }

    hr {
      position: relative;
      margin: 2.848rem auto 2.848rem;
      padding: 0;
      border: none;
      width: 20px;
      height: 20px;
      font-size: 0.889rem;
      background: none;

      &::after {
        content: '\u2666';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 2.75rem 0 1rem;
      line-height: 1.15;
    }

    h1 {
      margin-top: 0;
      padding-top: 1rem;
      font-size: 1.802rem;
    }

    h2 {
      font-size: 1.424rem;
    }

    h3 {
      font-size: 1rem;
    }
  `,
}
