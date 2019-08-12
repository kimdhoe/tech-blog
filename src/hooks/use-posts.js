import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "posts" }
          extension: { eq: "mdx" }
        }
        sort: { order: DESC, fields: childMdx___frontmatter___date }
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                date
                dateFormatted: date(formatString: "MMMM D, YYYY")
                slug
                author
                deck
              }
            }
          }
        }
      }
    }
  `)

  return data.allFile.edges.map(({ node: { childMdx: { frontmatter } } }) => ({
    title: frontmatter.title,
    author: frontmatter.author,
    deck: frontmatter.deck,
    slug: frontmatter.slug,
    date: frontmatter.date,
    dateFormatted: frontmatter.dateFormatted,
    image: frontmatter.image,
  }))
}

export default usePosts
