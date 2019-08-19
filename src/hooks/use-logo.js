import { graphql, useStaticQuery } from 'gatsby'

const useLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "logo.png" } }) {
        fixed(width: 129) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  `)

  return data.imageSharp
}

export default useLogo
