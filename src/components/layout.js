import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

import useSiteMetadata from '../hooks/use-sitemetadata'
import useLogo from '../hooks/use-logo'
import Header from './header'
import Footer from './footer'
import { SEO } from './seo'

import 'normalize.css'

const Layout = ({ children }) => {
  const { title, description, author, deployBranch } = useSiteMetadata()
  const logo = useLogo()
  const spy = useRef()

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.intersectionRatio) {
          document.body.classList.add('scrolled-a-bit')
        } else {
          document.body.classList.remove('scrolled-a-bit')
        }
      },
      { rootMargin: '0px' },
    )
    observer.observe(spy.current)
    return observer.disconnect
  }, [])

  return (
    <>
      <SEO
        lang="en"
        title=""
        meta={[
          { property: 'og:image', content: '/images/cover.png' },
          deployBranch !== 'master' && {
            name: 'robots',
            content: 'noindex,nofollow',
          },
        ].filter(Boolean)}
        description={description}
      />
      <Global styles={styles.global} />
      <div css={styles.scrollSpy} ref={spy} />
      <div css={styles.wrapper}>
        <Header siteTitle={title} logo={logo} />
        <main css={styles.main}>{children}</main>
        <Footer author={author} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = {
  global: css`
    @font-face {
      font-family: 'Fira Code';
      font-style: normal;
      font-weight: 400;
      src: local('Fira Code'),
        url('/fonts/FiraCode-Regular.woff2') format('woff2'),
        url('/fonts/FiraCode-Regular.woff') format('woff');
    }

    html {
      box-sizing: border-box;
      font-size: 15px;

      @media only screen and (max-width: 600px) {
        font-size: 17px;
      }
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      --brand: #5b748b;
      --bg: #f4f7fb;
      --bg1: #dee2e6;
      --bg2: #b6bfc8;
      --well: #f8f9fa;
      --card: #ecf1f8;
      --text: #2b2836;
      --text-link: #7f5555;
      --text-auxiliary: #535960;
      --text-placeholder: #868e96;
      --hr: hsla(0, 0%, 0%, 0.15);

      font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
        'Helvetica Neue', 'Arial', 'Noto Sans', 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      transition: all 0.1s ease-out;
      background-color: var(--bg);
      color: var(--text);
    }

    body.dark {
      --brand: #93a7b9;
      --bg: #2b2836;
      --bg1: #3a3649;
      --bg2: #514c66;
      --well: #23212c;
      --card: #3a3649;
      --text: #b6bfc8;
      --text-link: #b79494;
      --text-auxiliary: #848c94;
      --text-placeholder: #868e9688;
      --hr: #3a3649;
    }

    a {
      text-decoration: none;
      color: var(--text);
    }

    button {
      color: var(--text);
    }
  `,
  scrollSpy: css`
    position: absolute;
    z-index: -999;
    top: 0;
    width: 1px;
    height: 210px;
  `,
  wrapper: css`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  `,
  main: css`
    position: relative;
    flex: 1;
    margin: 0 auto;
    padding: 0;
    width: 100%;
  `,
}

export default Layout
