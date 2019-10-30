import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { SEO } from '../components/seo'
import { PageHeader } from '../components/page-header'
import useTopicLog from '../hooks/use-topiclog'

interface TopicPreviewProps {
  slug: string
  title: string
  update: string
}

const TopicLog: React.FunctionComponent = () => {
  const { topicLogs, image } = useTopicLog()

  return (
    <div css={styles.container}>
      <SEO
        title="Topic Log"
        description={'Records left in chronological order'}
      />
      <div css={styles.header}>
        <PageHeader headline="Topic Log" image={image} />
      </div>
      <div css={styles.wrapper}>
        <ul css={styles.topics}>
          {topicLogs.map(topicLog => (
            <TopicPreview
              key={topicLog.slug}
              slug={topicLog.slug}
              title={topicLog.title}
              update={topicLog.dateFormatted}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

const TopicPreview: React.FunctionComponent<TopicPreviewProps> = ({
  slug,
  title,
  update,
}) => {
  return (
    <li css={styles.topic}>
      <Link css={styles.topicLink} to={`/topiclog/${slug}/`}>
        <p css={styles.topicTitle}>
          {title}
          <span css={styles.topicUpdate}>Updated on {update}</span>
        </p>
      </Link>
    </li>
  )
}

const styles = {
  container: css`
    margin: 6rem auto;
    padding: 0;
    max-width: 650px;
  `,
  header: css`
    margin-bottom: 5rem;
    padding: 0 1rem;
  `,
  wrapper: css`
    margin: 0 auto 9rem;
    padding: 0 1rem;
    max-width: 650px;
  `,
  topics: css`
    list-style-type: none;
    padding: 0;
  `,
  topic: css`
    margin: 0 0 1.5rem 0;
    border-bottom: 1px solid var(--hr);
    padding-bottom: 0.8rem;

    :last-of-type {
      border: none;
    }
  `,
  topicLink: css`
    text-align: center;
    :hover {
      text-decoration: underline;
    }
  `,
  topicTitle: css`
    margin: 0 0 1rem 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 500;
  `,
  topicUpdate: css`
    display: block;
    margin: 1rem 0 0 0;
    padding: 0;
    font-size: 0.9rem;
    color: var(--text-auxiliary);

    @media only screen and (max-width: 650px) {
      margin-top: 0.6rem;
      display: block;
    }
  `,
}

export default TopicLog
