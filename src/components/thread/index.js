import React from 'react'
import { css } from '@emotion/core'

import ThreadForm from './thread-form'

const Thread = ({ slug, messages }) => (
  <div css={styles.container}>
    <Heading />
    <ThreadMessages messages={messages} />
    <ThreadForm slug={slug} />
  </div>
)

const Heading = () => (
  <h2 css={styles.threadHeading}>
    Thread
  </h2>
)

const ThreadMessages = ({ messages }) => messages.map(message => (
  <ThreadMessage
    key={message.id}
    name={message.name}
    email={message.email}
    message={message.message}
    date={message.date}
  />
))

const ThreadMessage = ({ name, email, message, date }) => {
  return (
    <div>
      <img style={{ width: 35 }} src={`https://avatars.dicebear.com/v2/avataaars/${email}.svg`} />
      <p>{name}</p>
      <p>{message}</p>
      <p>{date}</p>
    </div>
  )
}

const styles = {
  container: css`
    margin: 7.5rem 0 0 0;
  `,
}

export default Thread