import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import Icon from './icon';

const PostPreview = ({ post }) => (
  <article css={styles.container}>
    <Link css={styles.link} to={post.slug}>
      <h2 css={styles.title}>
        {post.title}
      </h2>
      <p css={styles.summary}>{post.summary}</p>
      <p css={styles.date}>{post.date}</p>
      <p css={styles.read}>
        <span css={styles.readText}>
          Read this post
        </span>
        <span css={styles.readIcon}>
          <Icon name="arrow-right" attrs={{ width: 13 }} />
        </span>
      </p>
    </Link>
  </article>
)

const styles = {
  container: css`
    margin-bottom: 3rem;
  `,
  link: css`
    text-decoration: none;
    color: #212529;
  `,
  title: css`
    margin: 0;
  `,
  titleLink: css`
    line-height: 1.2;
    font-size: 1.602rem;
    text-decoration: none;
  `,
  date: css`
    letter-spacing: 0.02rem;
    font-size:0.79rem;
    font-weight: 300;
    color: #495057;
  `,
  summary: css`
    line-height: 1.5;
  `,
  read: css`
    letter-spacing: 0.02rem;
    font-size:0.79rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `,
}

export default PostPreview
