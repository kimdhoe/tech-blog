import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            slug
            author
            summary
            image {
              childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    summary: post.frontmatter.summary,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    image: post.frontmatter.image,
  }))
}

export default usePosts
