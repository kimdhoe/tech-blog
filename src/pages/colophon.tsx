import React from 'react'
import { css } from '@emotion/core'

import useColophon from '../hooks/use-colophon'
import { Page } from '../components/page'

const ColophonPage: React.FunctionComponent = () => {
  const { image } = useColophon()

  return (
    <Page
      title="Colophon"
      description="O most gracious reader, wash your hands and touch the book only like this: turn the pages softly and keep your finger far away from the text."
      headline="Colophon"
      lede=""
      image={image}
    >
      <section css={styles.date}>
        <p css={styles.date}>
          Updated at <time dateTime="2019-10-24">October 24, 2019</time>.
        </p>
      </section>

      <div>
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
            Some contents are sourced from{' '}
            <a href="https://contentful.com">Contentful</a> and{' '}
            <a href="https://forestry.io">Forestry</a>.
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
            The logo was made by{' '}
            <a href="https://www.namecheap.com/logo-maker/">
              Namecheap Logo Maker
            </a>
            .
          </li>
        </ul>

        <h2>Illustration</h2>

        <ul>
          <li>
            Illustrations by <a href="https://icons8.com/ouch">Ouch.pics</a>.
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
    </Page>
  )
}

const styles = {
  date: css`
    margin: 0 0 5rem 0;
    font-size: 0.8rem;
    color: #888;
  `,
}

export default ColophonPage
