import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Icon from './icon';

const PostPreview = ({ post }) => (
  <Container>
    <Link css={styles.link} to={post.slug}>
      <h3 css={styles.title}>
        <span css={styles.titleText}>
          {post.title}
        </span>
      </h3>
      <p css={styles.summary}>
        <span css={styles.summaryText}>{post.summary}</span>
      </p>
      <div css={styles.footer}>
        <p css={styles.date}>{post.date}</p>
        <p css={styles.read}>
          <span css={styles.readText}>
            Read this post
          </span>
          <span css={styles.readIcon}>
            <Icon name="arrow-right" attrs={{ width: 16, color: '#222' }} />
          </span>
        </p>
      </div>
    </Link>
  </Container>
)

const Container = styled.article`
  display: block;
  margin-bottom: 3.888rem;
  color: #212529;
`

const styles = {
  link: css`
    display: block;
    text-decoration: none;
    color: #212529;
  `,
  title: css`
    margin: 0 0 1.424rem 0;
    font-size: 1.424rem;
    text-decoration: none;
  `,
  titleText: css`
    padding-bottom: 0.4rem;
    line-height: 1.65;
    background: linear-gradient(to right, #fd8283 0%, #fd8283);
    background-repeat: no-repeat;
    background-size: 0 0.2rem;
    background-position: 0 100%;
    transition: background-size 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;

    ${Container}:hover & {
      background-size: 100% 0.2rem;
    }
  `,
  summary: css`
    margin: 0 0 1.424rem 0;
    line-height: 1.7;
  `,
  summaryText: css`
    padding: 0.5rem 0 0.75rem 0;
    background: white;
    box-shadow: 1rem 0 0 white, -1rem 0 0 white;
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
    padding-bottom: 0.5rem;
    letter-spacing: 0.02rem;
    font-size:0.79rem;
  `,
  read: css`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
  readText: css`
    padding-bottom: 0.3rem;
    border-bottom: 3px solid #a7edffaa;
    letter-spacing: 0.01rem;
    font-size:0.79rem;
    font-family: Dank Mono;

    ${Container}:hover & {
      border-color: #a7edff;
    }
  `,
  readIcon: css`
    margin: 0 0 0 0.2rem;
    transform: translateX(-0.25rem);
    transition: all 0.2s ease-out;
    opacity: 0;

    ${Container}:hover & {
      transform: translateX(0);
      opacity: 1;
    }
  `,
}

export default PostPreview
