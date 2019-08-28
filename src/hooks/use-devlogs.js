import { graphql, useStaticQuery } from 'gatsby'

const useDevLogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "devlogs" }
          extension: { eq: "mdx" }
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
    }
  `)

  return data.allFile.edges.map(edge => ({
    id: edge.node.childMdx.id,
    body: edge.node.childMdx.body,
    title: edge.node.childMdx.frontmatter.title,
    slug: edge.node.childMdx.frontmatter.slug,
    date: edge.node.childMdx.frontmatter.date,
    dateFormatted: edge.node.childMdx.frontmatter.dateFormatted,
  }))
}

export default useDevLogs
