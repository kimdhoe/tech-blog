import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'

import useDevLogs from '../hooks/use-devlogs'
import { Page } from '../components/page'

export default () => {
  const devLogs = useDevLogs()

  return (
    <Page
      headline="Devlog"
      lede="A developer keeps a log."
      title="Devlog"
      description="A developer keeps a log."
    >
      <Epigraph />
      <div css={styles.entries}>
        {devLogs.map(devLog => (
          <Entry
            key={devLog.id}
            slug={devLog.slug}
            title={devLog.title}
            date={devLog.date}
            dateFormatted={devLog.dateFormatted}
            body={devLog.body}
          />
        ))}
      </div>
    </Page>
  )
}

const Epigraph = () => (
  <figure css={styles.epigraph}>
    <blockquote css={styles.epigraphQuote}>Wait. Compiling...</blockquote>
    <figcaption css={styles.epigraphAuthor}>webpack</figcaption>
  </figure>
)

const Entry = ({ slug, title, date, dateFormatted, body }) => (
  <div css={styles.entry}>
    <span css={styles.entryDate}>
      <time dateTime={date}>{dateFormatted}</time>
    </span>
    <h4 css={styles.entryTitle}>{title}</h4>
    <div css={styles.entryBody}>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  </div>
)

const styles = {
  epigraph: css`
    margin: 5rem 0 5rem;
    display: flex;
    align-items: center;
    color: #777;

    blockquote {
      margin: 0;
      font-size: 0.8rem;
    }
  `,
  epigraphQuote: css`
  `,
  epigraphAuthor: css`
    display: flex;
    align-items: center;
    letter-spacing: 0.02rem;
    font-size: 0.8rem;

    ::before {
      content: '';
      margin: 0 0.3rem 0 1rem;
      width: 1.3rem;
      height: 1px;
      background: #495057;
    }
  `,
  entry: css`
    margin-bottom: 4rem;
  `,
  entryDate: css`
    display: block;
    margin: 0;
    font-size: 0.85rem;
    color: #5a6c70;
  `,
  entryTitle: css`
    display: inline-block;
    margin: 0 0 0.6rem 0;
    padding: 0.2rem 0 0.4rem 0;
    border-bottom: 1px solid #5a6c70;
    font-size: 1.1rem;
    font-weight: 400;
  `,
  entryBody: css`
    margin-top: 0;
    line-height: 1.7;
    font-size: 0.9792rem;

    p,
    ul,
    ol {
      margin: 0 0 0.5rem 0;
    }

    blockquote {
      margin-left: 1.5rem;
      margin-right: 0;
      font-size: 0.889rem;
    }

    a {
      text-decoration: none;

      &[href] {
        background: linear-gradient(to right, #fd828377 0%, #fd828377);
        background-repeat: no-repeat;
        background-size: 100% 0.2rem;
        background-position: 0 88%;
        transition: background-size 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86)
          0s;

        &:hover {
          background-size: 100% 88%;
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
      margin: 2.75rem 0 1.602rem;
      line-height: 1.15;
    }

    h2 {
      margin-top: 0;
      font-size: 1.802rem;
    }

    h3 {
      font-size: 1.602rem;
    }

    h4 {
      font-size: 1.424rem;
    }

    h5 {
      font-size: 1.266rem;
    }

    h6 {
      font-size: 1.125rem;
    }

    small {
      font-size: 0.889rem;
    }

    em {
    }

    .gatsby-highlight {
      padding: 0.1rem 0 0.7rem 0;
    }
  `,
}
