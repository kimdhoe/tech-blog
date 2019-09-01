import React /*, { useState, useRef }*/ from 'react'
import { css } from '@emotion/core'
// import addToMailchimp from 'gatsby-plugin-mailchimp'
// import validator from 'validator'

import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'

// A Status is one of:
//   - default
//   - success
//   - error

const IndexPage = () => {
  const posts = usePosts()
  // const inputRef = useRef()
  // const [email, setEmail] = useState('')
  // const [status, setStatus] = useState('default')

  return (
    <div css={styles.container}>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}

      {/* <div css={[styles.newsletter, status === 'success' && styles.newsletterSuccess]}>
        {status === 'success' ? (
          <p css={styles.successMessage}>
            Thanks. TTYS.
          </p>
        ) : (
            <form
              css={styles.newsletterForm}
              onSubmit={async e => {
                e.preventDefault()
                const email = inputRef.current.value
                if (!validator.isEmail(email.trim())) {
                  setStatus('error')
                  inputRef.current.focus()
                  return
                }
                try {
                  await addToMailchimp(email)
                  setStatus('success')
                } catch (err) {
                  setStatus('error')
                  inputRef.current.focus()
                }
              }}
            >
              <p css={styles.newsletterMessage}>
                Join the Newsletter
              </p>
              <input
                css={[styles.newsletterInput, status === 'error' && styles.newsletterInputError]}
                placeholder="your email here"
                ref={inputRef}
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                  setStatus('default')
                }}
              />
              <button css={styles.newsletterButton} type="submit">
                Subscribe
              </button>
            </form>
          )}
      </div> */}
    </div>
  )
}

const styles = {
  container: css`
    margin-top: 4rem;
    padding: 0 1rem;

    @media only screen and (max-width: 600px) {
      margin-top: 1rem;
    }
  `,
}

// const fadeIn = keyframes`
//   from { opacity: 0 }
//   to: { opacity: 1 }
// `

// const styles = {
//   newsletter: css`
//     margin: 15rem auto 0;
//     padding: 3rem 0 0;
//     max-width: 650px;
//     height: 242px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     transition: all 150ms ease-out;
//   `,
//   newsletterSuccess: css`
//     background: none;

//     :hover {
//       box-shadow: none;
//     }
//   `,
//   successMessage: css`
//     letter-spacing: 0.03rem;
//     font-size: 1.3rem;
//     font-weight: 500;
//     animation: ${fadeIn} 0.5s ease-out;
//   `,
//   newsletterForm: css`
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//   `,
//   newsletterMessage: css`
//     font-size: 1.5rem;
//     letter-spacing: 0.03rem;
//   `,
//   newsletterInput: css`
//     outline: none;
//     border: none;
//     border-bottom: 1px solid #2B2836;
//     padding: 0.5rem 0.2rem;
//     width: 100%;
//     max-width: 270px;
//     font-size: 1.25rem;
//     letter-spacing: 0.03rem;
//     background: none;

//     ::placeholder {
//       color: #bbb;
//     }
//   `,
//   newsletterInputError: css`
//     border-color: #ffcc33;
//   `,
//   newsletterButton: css`
//     margin-top: 2rem;
//     outline: none;
//     border: none;
//     background: none;
//     letter-spacing: 0.03rem;
//     font-size: 1.25rem;
//     cursor: pointer;
//   `,
// }

export default IndexPage
