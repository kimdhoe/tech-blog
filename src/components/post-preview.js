import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const PostPreview = ({ post, i }) => (
  <div css={styles.container}>
    <StyledLink css={styles.link} to={`/${post.slug}/`}>
      <Meta
        category={post.category}
        date={post.date}
        dateFormatted={post.dateFormatted}
        fromNow={post.fromNow}
      />
      <Title title={post.title} />
      <Deck deck={post.deck} />
    </StyledLink>
  </div>
)

const Meta = ({ category, date, dateFormatted, fromNow }) => (
  <p css={styles.meta}>
    {category}
    <DotSeparator />
    <time dateTime={date}>{dateFormatted}</time>
    <DotSeparator />
    {fromNow}
  </p>
)

const Title = ({ title }) => <h3 css={styles.title}>{title}</h3>

const Deck = ({ deck }) => (!deck ? null : <p css={styles.deck}>{deck}</p>)

const DotSeparator = () => <span css={styles.separator} />

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;
`

const styles = {
  container: css`
    max-width: calc(768px - 1rem);
    border-bottom: 1px solid var(--hr);
    transition: all 200ms ease-out;

    :last-of-type {
      border: none;
    }
  `,
  title: css`
    display: inline-block;
    margin: 0 0 0.3rem 0;
    padding-bottom: 0.2rem;
    line-height: 1.65;
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 100ms ease-out;

    ${StyledLink}:hover & {
      text-decoration: underline;
    }
  `,
  deck: css`
    margin: 0;
    line-height: 1.9;
    font-size: 0.9rem;
  `,
  meta: css`
    margin: 0 0 0.8rem 0;
    display: flex;
    align-items: center;
    letter-spacing: 0.02rem;
    font-size: 0.8rem;
    color: var(--text-auxiliary);
  `,
  separator: css`
    border-radius: 2px;
    width: 4px;
    height: 4px;
    background-color: var(--hr);
    margin: 0 0.55rem;
  `,
}

export default PostPreview
