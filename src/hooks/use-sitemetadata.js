import { graphql, useStaticQuery } from 'gatsby'

const UseSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          staticmanEndpoint
          staticmanVersion
          githubUsername
          githubRepository
          githubBranch
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default UseSiteMetadata
