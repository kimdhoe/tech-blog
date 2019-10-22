import { graphql, useStaticQuery } from 'gatsby'

const useNow = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "eastwood-searching.png" }
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
    image: data.image ? data.image.childImageSharp.fluid : null,
  }
}

export default useNow
