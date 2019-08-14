import React from 'react'
import { css, keyframes } from '@emotion/core'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Footer = ({ author }) => {
  return (
    <footer css={styles.container}>
      <div css={styles.wrapper}>
        <TopButton
          css={styles.top}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span css={styles.arrow}>&uarr;</span>
          Back to Top
        </TopButton>
        <small css={styles.copyright}>
          &copy; {new Date().getFullYear()} {author}
        </small>
        <Link css={styles.colophon} to="/colophon">
          Colophon
        </Link>
      </div>
    </footer>
  )
}

const TopButton = styled.button`
  outline: none;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`

const bounce = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translate3d(0, -0.2rem, 0);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translate3d(0, 0, 0);
    animation-timing-function: ease-out;
  }
`

const styles = {
  container: css`
    padding: 1rem 0;
    letter-spacing: 0.02rem;
    font-size: 0.79rem;
  `,
  wrapper: css`
    margin: 0 auto;
    padding: 0 1.5rem;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  top: css`
    @media only screen and (max-width: 600px) {
      display: none;
    }
  `,
  arrow: css`
    padding-right: 0.2rem;
    display: inline-block;

    ${TopButton}:hover & {
      animation: ${bounce} 0.9s infinite;
    }
  `,
  copyright: css`
    font-size: 0.79rem;
  `,
  colophon: css`
    text-decoration: none;
  `,
}

export default Footer
