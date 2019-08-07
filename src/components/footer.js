import React from 'react'
import { css, keyframes } from '@emotion/core'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Footer = ({ author }) => {
  return (
    <footer css={styles.container}>
      <div css={styles.wrapper}>
        <TopButton
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
        <Link css={styles.colophon} to="colophon">
          Colophon
        </Link>
      </div>
    </footer>
  )
}

const TopButton = styled.button`
  outline: none;
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
    padding: 0.702rem 0;
    letter-spacing: 0.02rem;
    font-size: 0.79rem;
  `,
  wrapper: css`
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  arrow: css`
    padding-right: 0.2rem;
    display: inline-block;
    color: #495057;

    ${TopButton}:hover & {
      animation: ${bounce} 0.9s infinite;
      color: #212529;
    }
  `,
  copyright: css`
    font-size: 0.79rem;
  `,
  colophon: css`
    text-decoration: none;
    color: inherit;
  `,
}

export default Footer
