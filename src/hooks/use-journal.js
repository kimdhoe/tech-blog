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
            fluid(quality: 70) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      image: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "eastwood-downloading.png" }
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
    journals: data.allContentfulJournal.nodes.map(node => ({
      slug: node.slug,
      headline: node.headline,
      date: node.date,
      dateFormatted: node.dateFormatted,
      fluid: node.heroImage.fluid,
    })),
    image: data.image ? data.image.childImageSharp.fluid : null,
  }
}

export default useJournal
