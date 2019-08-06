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
      <Global styles={styles.global} />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap" rel="stylesheet" />
      </Helmet>
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
      font-family: -apple-system, 'BlinkMacSystemFont', 'Noto Sans KR', 'Segoe UI', 'Roboto',
        'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      background-color: #f9f8f4;
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
