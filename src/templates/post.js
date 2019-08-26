import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Icon from '../components/icon'
import Thread from '../components/thread'
import SEO from '../components/seo'

export const query = graphql`
  query($slug: String!) {
    post: file(
      sourceInstanceName: { eq: "posts" }
      childMdx: { frontmatter: { slug: { eq: $slug } } }
    ) {
      childMdx {
        frontmatter {
          title
          slug
          author
          deck
          abstract
          epigraph
          epigraphAuthor
          date
          dateFormatted: date(formatString: "MMMM D, YYYY")
        }
        body
      }
    }
    comments: allYaml(
      filter: { slug: { eq: $slug } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id: _id
          name
          email
          message
          slug
          date
          dateFormatted: date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`

const PostTemplate = ({
  data: {
    post: {
      childMdx: { frontmatter, body },
    },
    comments: { edges },
  },
}) => (
  <>
    <SEO
      title={frontmatter.title}
      description={frontmatter.deck || frontmatter.abstract}
    />
    {/* <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.abstract || frontmatter.deck} />
      </Helmet> */}
    <BackToAllPosts />
    <Article
      headline={frontmatter.title}
      deck={frontmatter.deck}
      abstract={frontmatter.abstract}
      epigraph={frontmatter.epigraph}
      epigraphAuthor={frontmatter.epigraphAuthor}
      date={frontmatter.date}
      dateFormatted={frontmatter.dateFormatted}
      body={body}
    />
    <Thread slug={frontmatter.slug} messages={edges.map(edge => edge.node)} />
  </>
)

const BackToAllPosts = () => (
  <BackLink css={styles.backLink} to="/">
    <span css={styles.backLinkArrow}>
      <Icon name="arrow-left" attrs={{ width: 13 }} />
    </span>
    <span css={styles.backLinkText}>All Posts</span>
  </BackLink>
)

const Article = ({
  headline,
  deck,
  abstract,
  epigraph,
  epigraphAuthor,
  body,
  date,
  dateFormatted,
}) => (
  <article css={styles.article}>
    <Header headline={headline} deck={deck} />

    {abstract && <Abstract text={abstract} />}

    {epigraph && <Epigraph text={epigraph} author={epigraphAuthor} />}

    <Body body={body} />

    <Footer date={date} dateFormatted={dateFormatted} />
  </article>
)

const Header = ({ headline, deck }) => (
  <header css={styles.header}>
    <h2 css={styles.headline}>{headline}</h2>
    {deck && (
      <section css={styles.deck}>
        <span css={[styles.deckText, styles.mozHack]}>{deck}</span>
      </section>
    )}
  </header>
)

const Abstract = ({ text }) => (
  <section css={styles.abstract}>
    <p css={styles.abstractText}>{text}</p>
  </section>
)

const Epigraph = ({ text, author }) => (
  <section css={styles.epigraph}>
    <p css={styles.epigraphText}>{text}</p>
    {author && <p css={styles.epigraphAuthor}>{author}</p>}
  </section>
)

const Body = ({ body }) => (
  <div css={styles.body}>
    <MDXRenderer>{body}</MDXRenderer>
  </div>
)

const Footer = ({ date, dateFormatted }) => (
  <footer css={styles.footer}>
    <p css={styles.date}>
      <time dateTime={date}>Posted {dateFormatted}</time>
    </p>
  </footer>
)

const BackLink = styled(Link)`
  max-width: 100px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #868e96;
  transition: color 0.1s ease-out;

  &:hover {
    color: #555;
  }
`
const styles = {
  backLinkArrow: css`
    margin-right: 0.3rem;
  `,
  backLinkText: css`
    padding-bottom: 0.1rem;
    font-size: 0.79rem;
    border-bottom: 0.5px solid #adb5bd;
  `,
  header: css`
    margin: 3.204rem 0 0 0;
  `,
  headline: css`
    margin: 0;
    line-height: 1.6;
    font-size: 1.802rem;
    font-weight: 500;
  `,
  deck: css`
    margin-top: 1.125rem;
    max-width: 550px;
    line-height: 1.8;
    font-size: 1.125rem;
  `,
  deckText: css`
    display: inline;
    padding: 0.5rem 0 0.75rem 0;
    background: white;
    box-shadow: 1rem 0 0 white, -1rem 0 0 white;
  `,
  abstract: css`
    margin: 6.5rem 0 0 0;
    display: flex;
    justify-content: flex-end;
  `,
  abstractText: css`
    max-width: 500px;
    line-height: 1.9;
    font-size: 0.9rem;
  `,
  epigraph: css`
    display: flex;
    flex-direction: column;
    margin: 6.5rem 0 0 0;
    font-size: 0.889rem;
    color: #555;
  `,
  epigraphText: css`
    max-width: 500px;
    margin: 0 0 1rem 0;
    line-height: 1.9;
  `,
  epigraphAuthor: css`
    max-width: 500px;
    display: flex;
    align-items: center;
    margin: 0 0.225rem 0 0;

    ::before {
      content: '';
      margin-right: 0.44rem;
      width: 30px;
      height: 1px;
      background: #555;
    }
  `,
  body: css`
    margin: 7rem 0 0 0;
    line-height: 2.1;
    font-size: 0.9792rem;

    p,
    ul,
    ol {
      margin-bottom: 1.602rem;
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      word-break: break-word;
      hyphens: auto;
    }

    ul,
    ol {
      padding-left: 1.5rem;
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
      margin: 2.75rem 0 1.602rem 0;
      line-height: 1.15;
      font-weight: 400;
    }

    h2 {
      font-size: 1.296rem;
      font-weight: 500;
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

    em {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  `,
  footer: css`
    margin-top: 5rem;
  `,
  date: css`
    font-size: 0.889rem;
  `,
  mozHack: {
    '@-moz-document url-prefix()': {
      display: 'block',
    },
  },
}

export default PostTemplate
