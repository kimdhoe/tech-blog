import { graphql, useStaticQuery } from 'gatsby'

const useJournal = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulJournal(sort: { fields: publishDate, order: DESC }) {
        nodes {
          id
          date: publishDate
          dateFormatted: publishDate(formatString: "MMM D")
          slug
          headline
          heroImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return data.allContentfulJournal.nodes.map(node => ({
    slug: node.slug,
    headline: node.headline,
    date: node.date,
    dateFormatted: node.dateFormatted,
    fluid: node.heroImage.fluid,
  }))
}

export default useJournal