import React from 'react'
import { css } from '@emotion/core'

import ThreadForm from './thread-form'

const Thread = ({ slug, messages }) => (
  <div css={styles.container}>
    <Heading />
    <ThreadForm slug={slug} />
    <ThreadMessages messages={messages} />
  </div>
)

const Heading = () => (
  <h2 css={styles.threadHeading}>
    Comments
  </h2>
)

const ThreadMessages = ({ messages }) => (
  <div css={styles.threadMessages}>
    {messages.map(message => (
      <ThreadMessage
        key={message.id}
        name={message.name}
        email={message.email}
        message={message.message}
        date={message.date}
      />
    ))}
  </div>
)

const ThreadMessage = ({ name, email, message, date }) => {
  return (
    <div css={styles.threadMessage}>
      <div css={styles.avatar}>
        <img css={styles.avatarImg} src={`https://avatars.dicebear.com/v2/jdenticon/${email}.svg?options[background][]=%23f9f8f2&options[colorSaturation][]=0.3`} alt={`avatar of ${name}`} />
      </div>
      <div css={styles.messageBody}>
        <div css={styles.messageMeta}>
          <p css={styles.messageAuthor}>{name}</p>
          <p css={styles.messageDate}>{date}</p>
        </div>
        {message.split(/\n\n+/).map((paragraph, i) => (
          <p key={i} css={styles.messageText}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: css`
    margin: 7.5rem 0 0 0;
  `,
  threadHeading: css`
    margin-bottom: 0;
  `,
  threadMessages: css`
  `,
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
  messageBody: css`
    flex:1;
    display: flex;
    flex-direction: column;
  `,
  messageMeta: css`
    display: flex;
    align-items: flex-start;
  `,
  messageAuthor: css`
    margin: 0 1rem 0 0;
    letter-spacing: 0.01rem;
    font-size: 0.889rem;
    font-weight: 700;
  `,
  messageDate: css`
    margin: 0;
    font-size: 0.79rem;
    color: #999;
  `,
  messageText: css`
    margin: 0.7rem 0 0 0;
    line-height: 1.7;
    white-space: pre-wrap;
  `,
}

export default Thread