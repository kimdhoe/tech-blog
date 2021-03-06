import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageSharpFluidWithWebp } from '../types'

const use404 = (): { image: GatsbyImageSharpFluidWithWebp | null } => {
  const data = useStaticQuery(graphql`
    query {
      image: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "eastwood-list-is-empty.png" }
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

export default use404
