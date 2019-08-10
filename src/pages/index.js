import React from 'react'
import { css } from '@emotion/core'

import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'

const IndexPage = () => {
  const posts = usePosts()

  return (
    <>
      <h1 css={styles.heading}>Blog</h1>

      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </>
  )
}

const styles = {
  heading: css`
    margin-bottom: 5rem;
  `,
}

export default IndexPage
