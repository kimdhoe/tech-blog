import React from 'react'

import usePosts from '../hooks/use-posts'
import Layout from '../components/layout'
import PostPreview from '../components/post-preview'

const IndexPage = () => {
  const posts = usePosts()

  return (
    <>
      <Layout>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}

export default IndexPage
