import { graphql, useStaticQuery } from 'gatsby'

const useNow = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "now" }, relativePath: { eq: "now.mdx" }) {
        childMdx {
          frontmatter {
            update(formatString: "MMMM D, YYYY")
          }
          body
        }
      }
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
    update: data.file.childMdx.frontmatter.update,
    body: data.file.childMdx.body,
    image: data.image ? data.image.childImageSharp.fluid : null,
  }
}

export default useNow
