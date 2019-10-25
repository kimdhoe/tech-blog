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
                featured
                title
                category
                date
                dateFormatted: date(formatString: "MMM D, YYYY")
                fromNow: date(fromNow: true)
                slug
                author
                deck
                image {
                  childImageSharp {
                    fluid(quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allFile.edges.map(
    ({
      node: {
        childMdx: { frontmatter },
      },
    }) => ({
      featured: !!frontmatter.featured,
      title: frontmatter.title,
      category: frontmatter.category,
      author: frontmatter.author,
      deck: frontmatter.deck,
      slug: frontmatter.slug,
      date: frontmatter.date,
      dateFormatted: frontmatter.dateFormatted,
      fromNow: frontmatter.fromNow,
      image: frontmatter.image ? frontmatter.image.childImageSharp.fluid : null,
    })
  )
  const featured = posts.filter(post => post.featured)
  const report = posts.filter(post => post.category === 'Report')[0]

  return {
    posts,
    featured,
    report,
  }
}

export default usePosts
