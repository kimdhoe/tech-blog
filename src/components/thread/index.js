import React from 'react'
import { css } from '@emotion/core'
import ReactMarkdown from 'react-markdown'
// import Refractor from 'react-refractor'
import { GitHub } from 'react-feather'
import GatsbyImage from 'gatsby-image'

import ThreadForm from './thread-form'

const Thread = ({ slug, messages, noCommentsImage }) => (
  <div css={styles.container}>
    <Heading />
    <ThreadForm slug={slug} noCommentsImage={noCommentsImage} />
    <ThreadMessages messages={messages} />
    {messages.length === 0 && <Image image={noCommentsImage} />}
  </div>
)

const Image = ({ image }) => (
  <div
    css={css`
      position: relative;
    `}
  >
    <GatsbyImage css={styles.noCommentsImage} fluid={image} />
    <div
      css={css`
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      `}
    />
  </div>
)

const Heading = () => <h2 css={styles.threadHeading}>Your thoughts? Please leave a reply.</h2>

const ThreadMessages = ({ messages }) => (
  <div css={styles.threadMessages}>
    {messages.map(message => (
      <ThreadMessage
        key={message.id}
        id={message.id}
        slug={message.slug}
        name={message.name}
        email={message.email}
        message={message.message}
        date={message.date}
        dateFormatted={message.dateFormatted}
      />
    ))}
  </div>
)

const ThreadMessage = ({
  id,
  slug,
  name,
  email,
  message,
  date,
  dateFormatted,
}) => {
  return (
    <div css={styles.threadMessage}>
      <div css={styles.avatar}>
        <img
          css={styles.avatarImg}
          src={`https://avatars.dicebear.com/v2/jdenticon/${email}.svg?options[background][]=%23f9f8f2&options[colorSaturation][]=0.3`}
          alt={`avatar of ${name}`}
        />
      </div>
      <div css={styles.messageContent}>
        <div css={styles.messageMeta}>
          <p css={styles.messageAuthor}>{name}</p>
          <p css={styles.messageDate}>
            <time dateTime={date}>{dateFormatted}</time>
          </p>
          <p css={styles.messageFile}>
            <a
              css={styles.messageFileLink}
              href={`https://github.com/kimdhoe/tech-blog/blob/master/data/comments/${slug}/${id}.yml`}
            >
              <GitHub css={styles.messageFileIcon} size={13} />
            </a>
          </p>
        </div>

        <ReactMarkdown
          css={styles.messageBody}
          // renderers={{ code: props => <Refractor {...props} language={props.language || 'javascript'} /> }}
          disallowedTypes={['link']}
          source={message}
        />
      </div>
    </div>
  )
}

const styles = {
  container: css`
    margin: 7.5rem auto 9.5rem;
    padding: 0 1rem;
    max-width: 650px;
  `,
  noCommentsImage: css`
    margin: 0 auto;
    max-width: 400px;
  `,
  threadHeading: css`
    margin-bottom: 0;
  `,
  threadMessages: css``,
  threadMessage: css`
    display: flex;
    align-items: flex-start;
    margin: 0 0 2.5rem 0;

    :last-child {
      margin-bottom: 0;
    }
  `,
  avatar: css`
    margin: 0.1rem 1rem 0 0;
    border: 1px solid #dee2e6;
    width: 35px;
    height: 35px;
  `,
  avatarImg: css`
    width: 100%;
  `,
  messageContent: css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  messageMeta: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  messageAuthor: css`
    margin: 0 1rem 0 0;
    letter-spacing: 0.01rem;
    font-size: 0.889rem;
    font-weight: 700;
  `,
  messageDate: css`
    margin: 0 1rem 0 0;
    font-size: 0.79rem;
    color: #999;
  `,
  messageFile: css`
    margin: 0;
    padding: 0;
  `,
  messageFileLink: css`
    padding: 0;
    text-decoration: none;
    font-size: 0.79rem;
    color: #999;
    transition: color 0.1s ease-out;

    &:hover {
      color: #444;
    }
  `,
  messageBody: css`
    margin: 0.35rem 0 0 0;
    line-height: 1.7;
    font-size: 0.9792rem;

    p,
    ul,
    ol,
    pre,
    blockquote {
      margin: 0 0 1rem 0;
    }

    pre {
      padding: 0.5rem 0.85rem;
      border: 1px solid #dee2e6;
    }

    code {
      padding: 0 0.2rem;
      border: 1px solid #dee2e6;
      border-radius: 0.3rem;
    }

    pre code {
      padding: 0;
      border: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 1rem 0 1rem 0;
      line-height: 1.3;
    }

    h1 {
      font-size: 1.383rem;
    }

    h2 {
      font-size: 1.296rem;
    }

    h3 {
      font-size: 1.215rem;
    }

    h4 {
      font-size: 1.138rem;
    }

    h5 {
      font-size: 1.067rem;
    }

    small {
      font-size: 0.937rem;
    }
  `,
}

export default Thread
