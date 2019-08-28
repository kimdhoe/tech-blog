import React, { useRef } from 'react'
import { css } from '@emotion/core'

import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'

const IndexPage = () => {
  const posts = usePosts()
  const inputRef = useRef()

  return (
    <>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}

      {/* <div css={styles.newsletter}>
        <p css={styles.newsletterMessage}>
          Get the latest party emailed to you
        </p>
        <input
          css={styles.newsletterInput}
          placeholder="Your email here"
          ref={inputRef}
          type="email"
        />
        <button
          css={styles.newsletterButton}
          onClick={() => {
            console.log(inputRef.current.value)
          }}
        >
          Subscribe
        </button>
      </div> */}
    </>
  )
}

const styles = {
  newsletter: css`
    margin: 17rem auto -13rem;
    padding: 3rem 0;
    display: flex;
    border-radius: 9px;
    flex-direction: column;
    align-items: center;
    background-color: #4d504c;
    color: #F2EFF0;
    transition: all 150ms ease-out;

    :hover {
      box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.39), 0 4px 25px 0px rgba(0, 0, 0, 0.06), 0 8px 10px -5px rgba(0, 0, 0, 0.07);
    }
  `,
  newsletterMessage: css`
    font-size: 1.3rem;
    letter-spacing: 0.03rem;
    color: #F2EFF0;
  `,
  newsletterInput: css`
    outline: none;
    border: none;
    border-bottom: 1px solid #F2EFF0;
    padding: 0.5rem 0.2rem;
    width: 100%;
    max-width: 270px;
    font-size: 1.25rem;
    letter-spacing: 0.03rem;
    background: none;
    color: #F2EFF0;

    ::placeholder {
      color: #8b8f89;
    }
  `,
  newsletterButton: css`
    margin-top: 2rem;
    outline: none;
    border: none;
    background: none;
    letter-spacing: 0.03rem;
    font-size: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    color: #F2EFF0;
  `,
}

export default IndexPage
