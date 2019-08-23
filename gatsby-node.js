exports.createPages = async ({ actions, graphql, reporter }) => {
  const postsResult = await graphql(`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "posts" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            childMdx {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    }
  `)

  if (postsResult.errors) {
    reporter.panic('failed to create posts', postsResult.errors)
  }

  const postEdges = postsResult.data.allFile.edges

  postEdges.forEach(edge => {
    actions.createPage({
      path: edge.node.childMdx.frontmatter.slug + '/',
      component: `${__dirname}/src/templates/post.js`,
      context: {
        slug: `${edge.node.childMdx.frontmatter.slug}`
      }
    })
  })
}