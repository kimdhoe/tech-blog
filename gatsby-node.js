exports.createPages = async ({ actions, graphql, reporter }) => {
  const [postEdges, journalSlugs, topicLogSlugs] = await Promise.all([
    getPostData(graphql, reporter),
    getJournalData(graphql, reporter),
    getTopicLog(graphql, reporter),
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
  topicLogSlugs.forEach(slug => {
    actions.createPage({
      path: `/topiclog/${slug}/`,
      component: `${__dirname}/src/templates/topiclog.tsx`,
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

async function getTopicLog(graphql, reporter) {
  const topicLogResult = await graphql(`
    query {
      allContentfulTopicLog {
        nodes {
          slug
        }
      }
    }
  `)

  if (topicLogResult.errors) {
    reporter.panic('failed to create topic log', topicLogResult.errors)
  }

  return topicLogResult.data.allContentfulTopicLog.nodes.map(node => node.slug)
}
