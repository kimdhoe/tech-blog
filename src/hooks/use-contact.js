import { graphql, useStaticQuery } from 'gatsby'

const useContact = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "eastwood-message-sent.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1500) {
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

export default useContact
