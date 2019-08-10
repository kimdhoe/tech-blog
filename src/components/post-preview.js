import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Icon from './icon'

const PostPreview = ({ post }) => (
  <Container>
    <Link css={styles.link} to={'/' + post.slug}>
      <h3 css={styles.title}>
        <span css={styles.titleText}>{post.title}</span>
      </h3>
      {post.deck && (
        <p css={styles.deck}>
          <span css={[styles.deckText, styles.mozHack]}>{post.deck}</span>
        </p>
      )}
      <div css={styles.footer}>
        <p css={styles.date}>
          <time dateTime={post.date}>{post.dateFormatted}</time>
        </p>
        <p css={styles.read}>
          <span css={styles.readText}>Read this post</span>
          <span css={styles.readIcon}>
            <Icon name="arrow-right" attrs={{ width: 14, color: '#333' }} />
          </span>
        </p>
      </div>
    </Link>
  </Container>
)

const Container = styled.article`
  position: relative;
  display: block;
  margin-bottom: 5rem;
`

const styles = {
  link: css`
    display: block;
    text-decoration: none;
    color: inherit;
  `,
  title: css`
    display: inline-block;
    margin: 0 0 1.424rem 0;
    padding-top: 1.424rem;
    border-top: 1px solid #495057;
    font-size: 1.424rem;
    text-decoration: none;
  `,
  titleText: css`
    padding-bottom: 0.4rem;
    line-height: 1.65;
  `,
  deck: css`
    margin: 0 0 1.266rem 0;
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

    ${Container}:hover & {
      background: white;
      box-shadow: 1rem 0 0 white, -1rem 0 0 white;
    }
  `,
  footer: css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > * {
      margin: 0;
    }
  `,
  date: css`
    display: flex;
    letter-spacing: 0.02rem;
    font-size: 0.79rem;
  `,
  read: css`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.2s ease-out;

    ${Container}:hover & {
      opacity: 1;
    }
  `,
  readText: css`
    letter-spacing: 0.01rem;
    font-size: 0.79rem;
    font-family: Dank Mono;
    transform: translateX(-0.25rem);
    transition: all 0.2s ease-out;

    ${Container}:hover & {
      transform: translateX(0);
    }
  `,
  readIcon: css`
    margin: 0 0 0 0.2rem;
    transform: translateX(-0.2rem);
    transition: all 0.15s ease-out;

    ${Container}:hover & {
      transform: translateX(0);
    }
  `,
}

export default PostPreview
