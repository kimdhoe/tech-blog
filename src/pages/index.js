import React /*, { useState, useRef }*/ from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
// import addToMailchimp from 'gatsby-plugin-mailchimp'
// import validator from 'validator'

import usePosts from '../hooks/use-posts'
import PostPreview, {
  Container as PostPreviewContainer,
} from '../components/post-preview'

// A Status is one of:
//   - default
//   - success
//   - error

const NAV_ITEMS = [
  { to: '/', label: 'Blog' },
  { to: '/devlog/', label: 'Devlog' },
  { to: '/journal/', label: 'Journal' },
  { to: '/now/', label: 'Now' },
  { to: '/about/', label: 'About' },
  { to: '/contact/', label: 'Contact' },
]

const IndexPage = () => {
  const posts = usePosts()
  // const inputRef = useRef()
  // const [email, setEmail] = useState('')
  // const [status, setStatus] = useState('default')

  return (
    <>
      <div css={styles.nav}>
        <div css={styles.navWrapper}>
          {NAV_ITEMS.map(item => (
            <div key={item.to} css={styles.navItem}>
              <Link css={styles.navItemLink} to={item.to} activeClassName="current">
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div css={styles.container}>
        <Previews>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </Previews>

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
    </>
  )
}

const Previews = styled.div`
  padding: 0;

  &:hover ${PostPreviewContainer} {
    opacity: 0.7;

    @media only screen and (max-width: 650px) {
      opacity: 1;
    }
  }
`

const styles = {
  container: css`
    margin: 7rem auto;
    padding: 0 1rem;
    max-width: 650px;

    @media only screen and (max-width: 650px) {
      margin-top: 3rem;
    }
  `,
  nav: css`
    position: fixed;
    z-index: 4;
    top: 46px;
    right: 0;
    left: 0;
    border-bottom: 1px solid var(--hr);
    height: 45px;
    transition: all 0.25s ease-out;

    .scrolled-a-bit & {
      transform: translate3d(0, -45px, 0);
    }

    @media only screen and (max-width: 650px) {
      display: none;
    }
  `,
  navWrapper: css`
    margin: 0 auto;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    background: var(--bg);
  `,
  navItem: css`
    flex: 1;
    margin: 0;
    padding: 0;
  `,
  navItemLink: css`
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.9rem;

    :hover {
      color: var(--text-link);
    }

    &.current {
      color: var(--brand);
    }
  `,
  header: css`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 650px;
  `,
  postPreviews: css`
    padding: 0;
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
