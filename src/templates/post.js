import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Icon from '../components/icon'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM D, YYYY")
        date2: date(formatString: "YYYY년 M월 D일")
        summary
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx } }) => (
  <>
    <BackLink css={styles.backLink} to="/">
      <span css={styles.backLinkArrow}>
        <Icon name="arrow-left" attrs={{ width: 13 }} />
      </span>
      <span css={styles.backLinkText}>All Posts</span>
    </BackLink>

    <article css={styles.article}>
      <header css={styles.header}>
        <h2 css={styles.title}>{mdx.frontmatter.title}</h2>
      </header>

      <section css={styles.summary}>
        <span css={styles.summaryText}>{mdx.frontmatter.summary}</span>
      </section>

      <div css={styles.body}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>

      <footer css={styles.footer}>
        <p css={styles.date}>Posted {mdx.frontmatter.date}</p>
      </footer>
    </article>
  </>
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
    margin: 3.204rem 0 4rem 0;
  `,
  title: css`
    margin: 0;
    max-width: 450px;
    line-height: 1.6;
    font-size: 1.802rem;
  `,
  summary: css`
    max-width: 500px;
    line-height: 1.8;
    font-weight: 300;
    font-size: 1.125rem;
  `,
  summaryText: css`
    display: inline;
    padding: 0.5rem 0 0.75rem 0;
    background: white;
    box-shadow: 1rem 0 0 white, -1rem 0 0 white;
  `,
  body: css`
    margin: 8rem 0 0 0;
    line-height: 1.95;
    font-size: 0.9792rem;
    font-family: -apple-system, 'BlinkMacSystemFont', 'Noto Sans KR', 'Segoe UI',
      'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'Noto Sans', sans-serif;

    p,
    ul,
    ol {
      margin-bottom: 1.602rem;
    }

    blockquote {
      margin-left: 1.4rem;
      font-size: 0.917rem;
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
  `,
  footer: css`
    margin-top: 5rem;
  `,
  date: css`
    font-size: 0.889rem;
  `,
}

export default PostTemplate
