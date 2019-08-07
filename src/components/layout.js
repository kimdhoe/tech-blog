import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'

import useSiteMetadata from '../hooks/use-sitemetadata'
import useLogo from '../hooks/use-logo'
import Header from './header'
import Footer from './footer'

import 'normalize.css'

const Layout = ({ children }) => {
  const { title, description, author } = useSiteMetadata()
  const logo = useLogo()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="preload" href="/fonts/noto-sans-kr-latin-400.woff2" as="font" type="font/woff2" crossOrigin="crossorigin" />
        <link rel="preload" href="/fonts/noto-sans-kr-latin-700.woff2" as="font" type="font/woff2" crossOrigin="crossorigin" />
      </Helmet>
      <Global styles={styles.global} />
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
    /* noto-sans-kr-400normal - latin */
    @font-face {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-display: swap;
      font-weight: 400;
      src:
        local('Noto Sans KR Regular '),
        local('Noto Sans KR-Regular'),
        url('/fonts/noto-sans-kr-latin-400.woff2') format('woff2'),
        url('/fonts/noto-sans-kr-latin-400.woff') format('woff');
    }

    /* noto-sans-kr-700normal - latin */
    @font-face {
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-display: swap;
      font-weight: 700;
      src:
        local('Noto Sans KR Bold '),
        local('Noto Sans KR-Bold'),
        url('/fonts/noto-sans-kr-latin-700.woff2') format('woff2'),
        url('/fonts/noto-sans-kr-latin-700.woff') format('woff');
    }

    html {
      box-sizing: border-box;
      font-size: 15px;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      font-size: 14px;
      font-family: -apple-system, 'BlinkMacSystemFont',
        'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      background-color: #f9f8f2;
      color: #052a4e;
    }
  `,
  wrapper: css`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  `,
  main: css`
    flex: 1;
    margin: 3.5rem auto 9rem;
    max-width: 630px;
    width: 90vw;
  `,
}

export default Layout
