import React, { useState, useRef } from 'react'
import validator from 'validator'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css, keyframes } from '@emotion/core'
import Image from 'gatsby-image'

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
          updateDate
          image {
            childImageSharp {
              fluid(quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          imageAlt
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
}) => {
  const { author, siteUrl } = useSiteMetadata()
  const imageSrc = frontmatter.image
    ? frontmatter.image.childImageSharp.fluid.srcWebp
    : ''

  return (
    <div css={styles.container}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.deck || frontmatter.abstract}
        meta={[
          !!imageSrc && { property: 'og:image', content: siteUrl + imageSrc },
        ].filter(Boolean)}
      >
        <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "TechArticle",
          "headline": "${frontmatter.title}",
          "datePublished": "${frontmatter.date}",
          "dateModified": "${frontmatter.updateDate}",
          "image": ${JSON.stringify(imageSrc ? [siteUrl + imageSrc] : [])},
          "author": {
            "@type": "Person",
            "name": "${author}"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Joseph K.",
            "logo": {
              "@type": "ImageObject",
              "url": "${siteUrl}/images/profile.png"
            }
          },
          "description": "${frontmatter.deck || frontmatter.abstract}",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${siteUrl}/${frontmatter.slug}"
          }
        }
      `}</script>
      </SEO>
      <Article
        siteUrl={siteUrl}
        slug={frontmatter.slug}
        category={frontmatter.category}
        headline={frontmatter.title}
        deck={frontmatter.deck}
        abstract={frontmatter.abstract}
        epigraph={frontmatter.epigraph}
        epigraphAuthor={frontmatter.epigraphAuthor}
        date={frontmatter.date}
        dateFormatted={frontmatter.dateFormatted}
        image={frontmatter.image}
        imageAlt={frontmatter.imageAlt}
        body={body}
      />
      <Newsletter />
      <Thread slug={frontmatter.slug} messages={edges.map(edge => edge.node)} />
    </div>
  )
}

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
  siteUrl,
  slug,
  category,
  headline,
  deck,
  abstract,
  epigraph,
  epigraphAuthor,
  image,
  imageAlt,
  body,
  date,
  dateFormatted,
}) => (
  <article css={styles.article}>
    <div css={styles.hero}>
      <Header category={category} headline={headline} deck={deck} />

      {image && (
        <div css={styles.heroImageWrapper}>
          <Image
            css={styles.heroImage}
            loading="eager"
            alt={imageAlt}
            fluid={image.childImageSharp.fluid}
          />
        </div>
      )}

      {abstract && <Abstract text={abstract} />}
    </div>

    {epigraph && <Epigraph text={epigraph} author={epigraphAuthor} />}

    <Meta
      siteUrl={siteUrl}
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

const Header = ({ category, headline, deck }) => {
  return (
    <header css={styles.header}>
      {category && <p css={styles.category}>{category}</p>}
      <h2 css={styles.headline}>{headline}</h2>
      {deck && (
        <section css={styles.deck}>
          <span css={[styles.deckText, styles.mozHack]}>{deck}</span>
        </section>
      )}
      <div css={styles.titleWrapper}>
        <p css={styles.title}>
          {headline}
        </p>
      </div>
    </header>
  )
}

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

const Meta = ({ siteUrl, headline, deck, date, dateFormatted, slug }) => {
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
    margin: 0 0 3rem 0;
    padding: 5rem 0 0;

    @media only screen and (max-width: 600px) {
      margin-bottom: 3rem;
      padding-top: 4.5rem;
    }
  `,
  heroImageWrapper: css`
    margin: 2.5rem auto 0;
    padding: 0 1rem;
    max-width: 800px;
  `,
  heroImage: css``,
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
    color: var(--text-auxiliary);
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
  titleWrapper: css`
    position: fixed;
    z-index: -1;
    top: 15px;
    left: 7rem;
    right: 7rem;
    text-align: center;

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
  deck: css`
    margin: 0.95rem 0 0;
    padding: 0 0.1rem;
    line-height: 1.75;
    font-size: 1.2rem;

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
    margin: 6rem auto 0;
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

      &[href] {
        padding-bottom: 0.07rem;
        border-bottom: 1px solid #7f5555;
        background-position: 0 100%;
        background-size: auto 3px;
        background-repeat: repeat-x;
        color: var(--text-link);

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
    margin: 7rem auto 0;
    padding: 0 1rem;
  `,
  newsletter: css`
    margin: 0 auto;
    padding: 2rem 1rem;
    max-width: 620px;
    /* height: 226px; */
    border-radius: 3px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 150ms ease-out;
    background-color: var(--card);
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
    font-size: 1.5rem;
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
    font-size: 1.2rem;
    color: #728ca3;
    cursor: pointer;
  `,
}

export default PostTemplate