import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { PostPreview } from '../types'

interface PostPreviewProps {
  post: PostPreview
}

const PostPreviewComp: React.FunctionComponent<PostPreviewProps> = ({
  post,
}) => (
  <div css={styles.container}>
    <PostPreviewLink to={`/${post.slug}/`}>
      <Meta
        category={post.category}
        date={post.date}
        dateFormatted={post.dateFormatted}
      />
      <h3 css={styles.title}>{post.title}</h3>
      {post.deck ? <p css={styles.deck}>{post.deck}</p> : null}
    </PostPreviewLink>
  </div>
)

const PostPreviewLink = styled(Link)`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Meta: React.FunctionComponent<
  Pick<PostPreview, 'category' | 'date' | 'dateFormatted'>
> = ({ category, date, dateFormatted }) => (
  <p css={styles.meta}>
    {category}
    <span css={styles.separator} />
    <time dateTime={date}>{dateFormatted}</time>
  </p>
)

const styles = {
  container: css`
    max-width: calc(768px - 1rem);
    border-bottom: 1px solid var(--hr);
    transition: all 200ms ease-out;

    :last-of-type {
      border: none;
    }
  `,
  title: css`
    display: inline-block;
    margin: 0 0 0.3rem 0;
    padding-bottom: 0.2rem;
    line-height: 1.65;
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 100ms ease-out;

    ${PostPreviewLink}:hover & {
      text-decoration: underline;
    }
  `,
  deck: css`
    margin: 0;
    line-height: 2;
    font-size: 0.9rem;
  `,
  meta: css`
    margin: 0 0 0.8rem 0;
    display: flex;
    align-items: center;
    letter-spacing: 0.02rem;
    font-size: 0.8rem;
    color: var(--text-auxiliary);
  `,
  separator: css`
    border-radius: 2px;
    width: 4px;
    height: 4px;
    background-color: var(--hr);
    margin: 0 0.55rem;
  `,
}

export default PostPreviewComp
