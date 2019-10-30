import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImageSharpFluidWithWebp } from '../types'

interface TopicLog {
  slug: string
  title: string
  date: string
  dateFormatted: string
}

interface Data {
  allContentfulTopicLog: {
    nodes: TopicLog[]
  }
  image: {
    childImageSharp: {
      fluid: GatsbyImageSharpFluidWithWebp
    }
  }
}

const useTopicLog = (): {
  topicLogs: TopicLog[]
  image: GatsbyImageSharpFluidWithWebp | null
} => {
  const data: Data = useStaticQuery(graphql`
    query {
      allContentfulTopicLog(sort: { fields: updateTime, order: DESC }) {
        nodes {
          title
          slug
          date: updateTime
          dateFormatted: updateTime(formatString: "dddd, MMMM D, YYYY")
        }
      }
      image: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "eastwood-waiting.png" }
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
    topicLogs: data.allContentfulTopicLog.nodes.map(node => ({
      slug: node.slug,
      title: node.title,
      date: node.date,
      dateFormatted: node.dateFormatted,
    })),
    image: data.image ? data.image.childImageSharp.fluid : null,
  }
}

export default useTopicLog
