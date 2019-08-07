import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: ASC, fields: frontmatter___date }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            slug
            author
            deck
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
    deck: post.frontmatter.deck,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    image: post.frontmatter.image,
  }))
}

export default usePosts
