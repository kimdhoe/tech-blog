import React from "react"
import { Link } from "gatsby"

import usePosts from '../hooks/use-posts'
import Layout from "../components/layout"
import Hero from '../components/hero'
import PostPreview from "../components/post-preview"

const IndexPage = () => {
  const posts = usePosts()

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my blog</h2>

        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  )
}

export default IndexPage
