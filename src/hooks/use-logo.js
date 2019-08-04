import { graphql, useStaticQuery } from 'gatsby'

const useLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fluid: {originalName: { eq: "logo.png" }}) {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `)

  return data.imageSharp
}

export default useLogo