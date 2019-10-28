exports.createPages = async ({ actions, graphql, reporter }) => {
  const [postEdges, journalSlugs] = await Promise.all([
    getPostData(graphql, reporter),
    getJournalData(graphql, reporter),
  ])

  postEdges.forEach(edge => {
    actions.createPage({
      path: edge.node.childMdx.frontmatter.slug + '/',
      component: `${__dirname}/src/templates/post.tsx`,
      context: {
        slug: `${edge.node.childMdx.frontmatter.slug}`,
      },
    })
  })
  journalSlugs.forEach(slug => {
    actions.createPage({
      path: `/journal/${slug}/`,
      component: `${__dirname}/src/templates/journal.js`,
      context: {
        slug,
      },
    })
  })
}

async function getPostData(graphql, reporter) {
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

  return postsResult.data.allFile.edges
}

async function getJournalData(graphql, reporter) {
  const journalResult = await graphql(`
    query {
      allContentfulJournal {
        nodes {
          slug
        }
      }
    }
  `)

  if (journalResult.errors) {
    reporter.panic('failed to create journals', journalResult.errors)
  }

  return journalResult.data.allContentfulJournal.nodes.map(node => node.slug)
}
