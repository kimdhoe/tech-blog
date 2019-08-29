import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Icon from './icon'

const PostPreview = ({ post }) => (
  <Container>
    <Link css={styles.link} to={`/${post.slug}/`}>
      <div css={styles.left}>
        <img src={`https://avatars.dicebear.com/v2/jdenticon/${post.slug}.svg?options[background][]=%23f4f7fb&options[colorSaturation][]=0.1`} />
      </div>

      <div css={styles.right}>
        <p css={styles.date}>
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
        <div css={styles.footer}>
          <p css={styles.read}>
            <span css={styles.readText}>Read this post</span>
            <span css={styles.readIcon}>
              <Icon name="arrow-right" attrs={{ width: 14 }} />
            </span>
          </p>
        </div>
      </div>
    </Link>
  </Container>
)

const Container = styled.article`
  position: relative;
  margin: 0 auto 2rem;
  max-width: 650px;
`

const styles = {
  link: css`
    display: flex;
    justify-content: space-between;
  `,
  left: css`
    margin: 1rem 2rem 0 0;
    border-radius: 2px;
    width: 100px;
    height: 100px;
    background-color: #f1f3f5;

    @media only screen and (max-width: 600px) {
      display: none;
    }

    img {
      border-radius: 2px;
      width: 100%;
    }
  `,
  right: css`
    flex: 1;
    display: block;
    text-decoration: none;
  `,
  title: css`
    display: inline-block;
    margin: 0 0 0.5rem 0;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #728CA3;
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: none;
  `,
  titleText: css`
    padding-bottom: 0.4rem;
    line-height: 1.65;
    transition: color 150ms ease-out;
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
  footer: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > * {
      margin: 0;
    }
  `,
  date: css`
    margin: 0 0 0.5rem 0.1rem;
    display: flex;
    letter-spacing: 0.02rem;
    font-size: 0.79rem;
    color: #728CA3;
  `,
  read: css`
    margin: 0;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    opacity: 0;
    transition: all 0.2s ease-out;

    ${Container}:hover & {
      opacity: 1;
      background: var(--well);
      box-shadow: 0.7rem 0 0 var(--well), -0.7rem 0 0 var(--well);
    }
  `,
  readText: css`
    letter-spacing: 0.02rem;
    font-size: 0.8rem;
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
