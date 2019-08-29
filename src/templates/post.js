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
          dateFormatted: date(formatString: "MMM D, YYYY hh:mm A")
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

    <Meta date={date} dateFormatted={dateFormatted} />

    <Body body={body} />

    <Footer />
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

const Meta = ({ date, dateFormatted }) => (
  <section css={styles.meta}>
    <time dateTime={date}>{dateFormatted} KST</time>
    {/* TODO: share buttons */}
  </section>
)

const Body = ({ body }) => (
  <div css={styles.body}>
    <MDXRenderer>{body}</MDXRenderer>
  </div>
)

const Footer = () => (
  <footer css={styles.footer}>
    {/* TODO: Move all posts link here? */}
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
    margin: 3.204rem 0 0;
    max-width: 720px;
  `,
  headline: css`
    margin: 0;
    line-height: 1.5;
    font-size: 2.1rem;
    font-weight: 500;

    @media only screen and (max-width: 600px) {
      font-size: 2.4rem;
    }
  `,
  deck: css`
    margin: 1.125rem 1rem 0;
    line-height: 2;
    font-size: 1.2rem;
    color: #444;
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
  meta: css`
    margin: 7rem auto 0;
    width: 100%;
    max-width: 650px;
    letter-spacing: 0.02rem;
    font-size: 0.83rem;
  `,
  body: css`
    margin: 7rem auto 0;
    width: 100%;
    max-width: 650px;
    line-height: 2.1;
    font-size: 0.9792rem;

    @media only screen and (max-width: 1060px) {
    }

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
      margin-left: 2.1rem;
      margin-right: 0;
      font-size: 0.9rem;
    }

    a {
      padding-bottom: 0.15rem;
      text-decoration: none;
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
  articleWrapper: css`
    margin-top: 7rem;
    display: flex;
    flex-direction: row-reverse;

    @media only screen and (max-width: 1060px) {
      flex-direction: column;
    }
  `,
  footer: css`
    margin: 5rem auto 0;
    max-width: 650px;
  `,
  date: css`
    font-size: 0.889rem;
  `,
  mozHack: {
    '@-moz-document url-prefix()': {
      display: 'block',
    },
  },
  wrapper: {

  }
}

export default PostTemplate
