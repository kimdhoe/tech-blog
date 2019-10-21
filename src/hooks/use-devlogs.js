import { graphql, useStaticQuery } from 'gatsby'

const useDevLogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "devlogs" }
          extension: { in: ["md", "mdx"] }
        }
        sort: { order: DESC, fields: childMdx___frontmatter___date }
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                title
                slug
                date
                dateFormatted: date(formatString: "MMM D, YYYY")
              }
              body
              id
            }
          }
        }
      }
      image: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "eastwood-unsubscribed.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return {
    devLogs: data.allFile.edges.map(edge => ({
      id: edge.node.childMdx.id,
      body: edge.node.childMdx.body,
      title: edge.node.childMdx.frontmatter.title,
      slug: edge.node.childMdx.frontmatter.slug,
      date: edge.node.childMdx.frontmatter.date,
      dateFormatted: edge.node.childMdx.frontmatter.dateFormatted,
    })),
    image: data.image ? data.image.childImageSharp.fluid : null,
  }
}

export default useDevLogs
