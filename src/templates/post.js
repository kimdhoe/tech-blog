import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from '@emotion/core'

import ReadLink from '../components/read-link'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx } }) => (
  <>
    <h2>{mdx.frontmatter.title}</h2>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {mdx.frontmatter.author}
    </p>
    <div css={styles.body}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </>
)

const styles = {
  body: css`
    font-family: 'Georgia', 'Noto Sans KR', sans-serif;
  `,
}

export default PostTemplate
