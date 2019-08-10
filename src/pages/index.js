import React from 'react'
import { css } from '@emotion/core'

import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'

const IndexPage = () => {
  const posts = usePosts()

  return (
    <>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </>
  )
}

export default IndexPage
