import React, { useState, useRef } from 'react'
import validator from 'validator'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css, keyframes } from '@emotion/core'

import useSiteMetadata from '../hooks/use-sitemetadata'
import Thread from '../components/thread'
import { SEO } from '../components/seo'
import Share from '../components/share'

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
          category
          author
          deck
          abstract
          epigraph
          epigraphAuthor
          date
          dateFormatted: date(formatString: "MMM D, YYYY hh:mmA")
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
  <div css={styles.container}>
    <SEO
      title={frontmatter.title}
      description={frontmatter.deck || frontmatter.abstract}
    />
    <Article
      slug={frontmatter.slug}
      category={frontmatter.category}
      headline={frontmatter.title}
      deck={frontmatter.deck}
      abstract={frontmatter.abstract}
      epigraph={frontmatter.epigraph}
      epigraphAuthor={frontmatter.epigraphAuthor}
      date={frontmatter.date}
      dateFormatted={frontmatter.dateFormatted}
      body={body}
    />
    <Newsletter />
    <Thread slug={frontmatter.slug} messages={edges.map(edge => edge.node)} />
  </div>
)

const Newsletter = () => {
  const [status, setStatus] = useState('default')
  const [email, setEmail] = useState('')
  const inputRef = useRef()
  return (
    <div css={styles.newsletterContainer}>
      <div
        css={[
          styles.newsletter,
          status === 'success' && styles.newsletterSuccess,
        ]}
      >
        {status === 'success' ? (
          <p css={styles.successMessage}>Thanks. TTYS.</p>
        ) : (
          <form
            onSubmit={async e => {
              e.preventDefault()
              const email = inputRef.current.value
              if (!validator.isEmail(email.trim())) {
                setStatus('error')
                inputRef.current.focus()
                return
              }
              try {
                await addToMailchimp(email)
                setStatus('success')
              } catch (err) {
                setStatus('error')
                inputRef.current.focus()
              }
            }}
          >
            <p css={styles.newsletterHeader}>Get the latest emailed to you.</p>
            <input
              css={[
                styles.newsletterInput,
                status === 'error' && styles.newsletterInputError,
              ]}
              placeholder="your email here"
              ref={inputRef}
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                setStatus('default')
              }}
            />
            <button css={styles.newsletterButton} type="submit">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

const Article = ({
  slug,
  category,
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
    <div css={styles.hero}>
      <Header category={category} headline={headline} deck={deck} />

      {abstract && <Abstract text={abstract} />}
    </div>

    {epigraph && <Epigraph text={epigraph} author={epigraphAuthor} />}

    <Meta
      headline={headline}
      deck={deck}
      date={date}
      dateFormatted={dateFormatted}
      slug={slug}
    />

    <Body body={body} />

    <Footer />
  </article>
)

const Header = ({ category, headline, deck }) => (
  <header css={styles.header}>
    {category && <p css={styles.category}>{category}</p>}
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

const Meta = ({ headline, deck, date, dateFormatted, slug }) => {
  const { siteUrl } = useSiteMetadata()
  const url = `${siteUrl}/${slug}/`
  const body = headline + '%0A%0A' + deck + '%0A%0A' + url

  return (
    <section css={styles.meta}>
      <div css={styles.share}>
        <Share url={url} headline={headline} body={body} />
      </div>
      <time dateTime={date}>{dateFormatted} KST</time>
    </section>
  )
}

const Body = ({ body }) => (
  <div css={styles.body}>
    <MDXRenderer>{body}</MDXRenderer>
  </div>
)

const Footer = () => (
  <footer css={styles.footer}>{/* TODO: Move all posts link here? */}</footer>
)

const fadeIn = keyframes`
  from { opacity: 0 }
  to: { opacity: 1 }
`

const styles = {
  container: css``,
  hero: css`
    margin: 0 0 5rem 0;
    padding: 5rem 0 0;
    /* background-color: #6d95a7; */
    color: #111;

    @media only screen and (max-width: 600px) {
      margin-bottom: 3rem;
      padding-top: 4.5rem;
    }
  `,
  header: css`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 650px;
  `,
  category: css`
    margin: 0 0 1.1rem 0.15rem;
    letter-spacing: 0.03rem;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #728ca3;
  `,
  headline: css`
    margin: 0;
    padding: 0;
    line-height: 1.4;
    font-size: 2.1rem;
    font-weight: 500;

    @media only screen and (max-width: 600px) {
      font-size: 1.65rem;
    }
  `,
  deck: css`
    margin: 0.95rem 0 0;
    padding: 0 0.1rem;
    line-height: 1.75;
    font-size: 1.2rem;
    color: #444;

    @media only screen and (max-width: 600px) {
      font-size: 1.05rem;
    }
  `,
  deckText: css``,
  abstract: css`
    margin: 3.5rem auto 0;
    padding: 0 1rem;
    max-width: 720px;
    display: flex;
    justify-content: center;
  `,
  abstractText: css`
    max-width: 500px;
    line-height: 1.9;
    color: #444;
  `,
  epigraph: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0 1rem 5rem;
    max-width: 650px;
    text-align: center;
  `,
  epigraphText: css`
    max-width: 450px;
    margin: 0 0 0.5rem 0;
    line-height: 1.9;
  `,
  epigraphAuthor: css`
    padding-top: 0.3rem;
    max-width: 500px;
    display: flex;
    align-items: center;
    margin: 0 0.225rem 0 0;
    letter-spacing: 0.03rem;
    color: #555;

    ::before {
      content: '';
      margin-right: 0.44rem;
      width: 13px;
      height: 1px;
      background: #777;
    }
  `,
  meta: css`
    margin: 0 auto;
    padding: 0 1rem 0;
    width: 100%;
    max-width: 650px;
    letter-spacing: 0.02rem;
    font-size: 0.83rem;
  `,
  share: css`
    margin-bottom: 1rem;
  `,
  body: css`
    margin: 8rem auto 0;
    padding: 0 1rem;
    width: 100%;
    max-width: 650px;
    line-height: 2;
    font-size: 0.9792rem;

    @media only screen and (max-width: 600px) {
      margin-top: 5.5rem;
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

    img {
      max-width: 100%;
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
  mozHack: {
    '@-moz-document url-prefix()': {
      display: 'block',
    },
  },
  wrapper: {},
  newsletterContainer: css`
    margin: 5rem auto 0;
    padding: 0 1rem;
  `,
  newsletter: css`
    margin: 0 auto;
    padding: 2rem 1rem;
    max-width: 550px;
    /* height: 226px; */
    border: 1px solid #728ca3;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 150ms ease-out;
  `,
  newsletterSuccess: css`
    border: none;
    background-color: transparent;
  `,
  successMessage: css`
    letter-spacing: 0.03rem;
    font-size: 1.3rem;
    animation: ${fadeIn} 0.5s ease-out;
    color: #728ca3;
  `,
  newsletterHeader: css`
    margin-top: 0;
    font-size: 1.7rem;
    color: #728ca3;
  `,
  newsletterInput: css`
    outline: none;
    margin-bottom: 3rem;
    padding: 0.5rem 0;
    border: none;
    border-bottom: 2px solid #728ca3;
    border-radius: 0;
    -webkit-appearance: none;
    width: 100%;
    max-width: 330px;
    background: none;
    font-size: 1.3rem;

    ::placeholder {
      color: #728ca360;
    }
  `,
  newsletterButton: css`
    outline: none;
    border: none;
    background: none;
    font-size: 1.3rem;
    color: #728ca3;
    cursor: pointer;
  `,
}

export default PostTemplate
