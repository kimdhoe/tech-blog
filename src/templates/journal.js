import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import Image from 'gatsby-image'

import { SEO } from '../components/seo'

export const query = graphql`
  query($slug: String!) {
    contentfulJournal(slug: { eq: $slug }) {
      headline
      description
      location
      date: publishDate(formatString: "dddd, MMMM D, YYYY")
      date2: publishDate(formatString: "YYYY년 M월 D일")
      body {
        childMdx {
          body
        }
      }
      heroImage {
        fluid(quality: 80) {
          ...GatsbyContentfulFluid_withWebp
        }
        alt: title
        caption: description
      }
    }
  }
`

const JournalTemplate = ({
  data: {
    contentfulJournal: {
      headline,
      description,
      date,
      date2,
      location = 'Seoul',
      body: {
        childMdx: { body: mdx },
      },
      heroImage: { fluid, alt, caption },
    },
  },
}) => (
  <article css={styles.container}>
    <SEO
      title={headline}
      description={description || `Joseph이 ${date2}에 남긴 일상 기록.`}
      meta={[
        {
          property: 'og:image',
          content: fluid.src || '/images/cover.png',
        },
      ]}
    />
    <header css={styles.header}>
      <div css={styles.hero}>
        <figure css={styles.heroFigure}>
          <Image fluid={fluid} loading="eager" alt={alt} />
          {caption && (
            <figcaption css={styles.heroCaption}>{caption}</figcaption>
          )}
        </figure>
      </div>
      <h1 css={styles.headline}>{headline}</h1>
      <p css={styles.date}>
        {location ? location + ', ' : ''}{date}
      </p>
    </header>

    <div css={styles.body}>
      <MDXRenderer>{mdx}</MDXRenderer>
    </div>
  </article>
)

const styles = {
  container: css`
    margin: 4.5rem 0 17rem;

    @media only screen and (max-width: 650px) {
      margin-top: 2rem;
    }
  `,
  header: css`
    margin: 0 0 4rem 0;
    text-align: center;
  `,
  hero: css`
    margin: 0 auto 7rem;
    padding: 0 4rem;
    max-width: 1024px;

    @media only screen and (max-width: 650px) {
      padding: 0 1rem;
    }
  `,
  heroFigure: css`
    margin: 0;
  `,
  heroCaption: css`
    margin-top: 0.7rem;
    line-height: 1.5;
    font-size: 0.88rem;
    color: var(--text-auxiliary);
  `,
  headline: css`
    position: relative;
    display: inline-block;
    margin: 0 0 2rem 0;
    padding-bottom: 2rem;
    text-align: center;
    font-size: 1.55rem;
    font-weight: 400;

    ::after {
      content: '';
      width: 4.4rem;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background: var(--text);
    }
  `,
  date: css`
    margin: 0;
    text-align: center;
    letter-spacing: 0.02rem;
    font-size: 0.9rem;
    font-style: italic;
  `,
  body: css`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 560px;
    line-height: 2;

    p,
    ul,
    ol {
      margin: 0 0 1.602rem 0;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      word-break: break-word;
      hyphens: auto;
    }

    code {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      word-break: break-word;
      hyphens: auto;
    }

    ul,
    ol {
      padding-left: 1.5rem;

      ul,
      ol {
        margin-bottom: 0;
      }
    }

    blockquote {
      margin-left: 2.1rem;
      margin-right: 0;
      font-size: 0.9rem;
    }

    a {
      text-decoration: none;
      color: var(--text-link);

      &[href] {
        padding-bottom: 0.07rem;
        border-bottom: 1px solid var(--text-link);
        background-position: 0 100%;
        background-size: auto 3px;
        background-repeat: repeat-x;

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

    img {
      max-width: 100%;
    }

    hr {
      position: relative;
      margin: 1.7rem auto;
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
        font-size: 0.8rem;
        color: var(--text);
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 2.75rem 0 1.602rem 0;
      line-height: 1.15;
      font-weight: 400;
    }

    h2 {
      font-size: 1.296rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.215rem;
    }

    h4 {
      font-size: 1.138rem;
    }

    h5 {
      font-size: 1.067rem;
    }

    small {
      font-size: 0.937rem;
    }
  `,
}

export default JournalTemplate
