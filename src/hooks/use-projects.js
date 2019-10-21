import { graphql, useStaticQuery } from 'gatsby'

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "eastwood-come-back-later.png" }
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

export default useProjects
