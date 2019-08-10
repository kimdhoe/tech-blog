import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Icon from '../components/icon'
import Thread from '../components/thread'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        deck
        abstract
        epigraph
        epigraphAuthor
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
    allYaml(
      filter: { slug: { eq: $slug } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          name
          email
          message
          slug
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`

const PostTemplate = ({
  data: {
    mdx: { frontmatter, body },
    allYaml: { edges },
  },
}) => (
  <>
    <BackToAllPosts />
    <Article
      headline={frontmatter.title}
      deck={frontmatter.deck}
      abstract={frontmatter.abstract}
      epigraph={frontmatter.epigraph}
      epigraphAuthor={frontmatter.epigraphAuthor}
      date={frontmatter.date}
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
}) => (
  <article css={styles.article}>
    <Header headline={headline} deck={deck} />

    {abstract && <Abstract text={abstract} />}

    {epigraph && <Epigraph text={epigraph} author={epigraphAuthor} />}

    <Body body={body} />

    <Footer date={date} />
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

const Footer = ({ date }) => (
  <footer css={styles.footer}>
    <p css={styles.date}>Posted {date}</p>
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
    max-width: 450px;
    line-height: 1.6;
    font-size: 1.802rem;
  `,
  deck: css`
    margin-top: 1.125rem;
    max-width: 550px;
    line-height: 1.8;
    font-size: 1.266rem;
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
    line-height: 1.7;
    font-size: 0.889rem;
  `,
  epigraph: css`
    margin: 5.5rem 0 0 0;
    text-align: right;
  `,
  epigraphText: css`
    margin: 0 0 1rem 0;
    font-style: italic;
  `,
  epigraphAuthor: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0.225rem 0 0;
    font-size: 0.889rem;

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
    line-height: 1.95;
    font-size: 0.9792rem;

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

    .gatsby-highlight {
      padding: 0.1rem 0 0.7rem 0;
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
