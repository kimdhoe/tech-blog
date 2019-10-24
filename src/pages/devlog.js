import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'

import useDevLogs from '../hooks/use-devlogs'
import { Page } from '../components/page'

export default () => {
  const { devLogs, image } = useDevLogs()

  return (
    <Page
      headline="Devlog"
      lede="A developer keeps a log."
      title="Devlog"
      description="A developer keeps a log."
      image={image}
    >
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
      <div css={styles.titleWrapper}>
        <p css={styles.title}>Devlog</p>
      </div>
    </Page>
  )
}

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
  entry: css`
    margin-bottom: 4rem;
  `,
  entryDate: css`
    display: block;
    margin: 0;
    font-size: 0.85rem;
    color: var(--brand);
  `,
  entryTitle: css`
    display: inline-block;
    margin: 0 0 0.6rem 0;
    padding: 0.2rem 0 0.4rem 0;
    /* border-bottom: 1px solid #5a6c70; */
    border-bottom: 1px solid var(--text-auxiliary);
    font-size: 1.1rem;
    font-weight: 400;
  `,
  entryBody: css`
    margin-top: 0;
    line-height: 1.8;
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
        padding-bottom: 0.07rem;
        border-bottom: 1px solid var(--text-link);
        background-position: 0 100%;
        background-size: auto 3px;
        background-repeat: repeat-x;
        color: var(--text-link);

        &:hover {
          border-color: transparent;
          background-image: url('/images/underline.svg');
        }

        .dark &:hover {
          border-color: transparent;
          background-image: url('/images/underline-dark.svg');
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
  titleWrapper: css`
    position: fixed;
    z-index: -1;
    top: 11px;
    left: 50%;
    transform: translateX(-50%);

    .scrolled-a-bit & {
      z-index: 12;
    }
  `,
  title: css`
    margin: 0 auto;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.9792rem;
    transition: all 0.15s ease-out;
    transform: translate3d(0, 0.5rem, 0);
    opacity: 0;

    .scrolled-a-bit & {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    @media only screen and (max-width: 650px) {
      font-size: 0.8rem;
    }
  `,
}
