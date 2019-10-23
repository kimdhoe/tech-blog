import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const PostPreview = ({ post }) => (
  <Container>
    <Link css={styles.link} to={`/${post.slug}/`}>
      <div css={styles.right}>
        <p css={styles.date}>
          <span css={styles.category}>{post.category}</span>
          <time dateTime={post.date}>{post.dateFormatted}</time>
        </p>
        <h3 css={styles.title}>
          <span css={styles.titleText}>{post.title}</span>
        </h3>
        {post.deck && (
          <p css={styles.deck}>
            <span css={[styles.deckText, styles.mozHack]}>{post.deck}</span>
          </p>
        )}
      </div>
    </Link>
  </Container>
)

const Container = styled.article`
  position: relative;
  /* margin: 0 auto; */
  padding: 0;
  max-width: calc(768px - 1rem);
  border-bottom: 1px solid var(--hr);
  transition: all 200ms ease-out;

  :last-of-type {
    border: none;
  }

  :hover {
    opacity: 1 !important;
  }
`

const styles = {
  link: css`
    padding: 2.5rem 0;
    display: flex;
    justify-content: space-between;
  `,
  right: css`
    flex: 1;
    display: block;
    text-decoration: none;
    z-index: 3;
  `,
  title: css`
    display: inline-block;
    margin: 0;
    padding-bottom: 0.2rem;
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
  `,
  titleText: css`
    padding-bottom: 0.4rem;
    line-height: 1.65;
    transition: color 100ms ease-out;
  `,
  deck: css`
    margin: 0 0 0.3rem 0;
    line-height: 1.9;
  `,
  mozHack: {
    '@-moz-document url-prefix()': {
      display: 'block',
    },
  },
  deckText: css`
    padding: 0.5rem 0 0.75rem 0;
    transition: all 0.2s ease-out;
    font-size: 0.95rem;
  `,
  category: css`
    margin-right: 0.55rem;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
    font-weight: 500;
    color: var(--brand);
  `,
  date: css`
    margin: 0.3rem 0 0.5rem;
    display: flex;
    letter-spacing: 0.02rem;
    font-size: 0.79rem;
    color: var(--text);
  `,
}

export default PostPreview
export { Container }
