import { graphql, useStaticQuery } from 'gatsby'

const usePost = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "eastwood-no-messages.png" }
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
    noCommentsImage: data.image ? data.image.childImageSharp.fluid : null,
  }
}

export default usePost
