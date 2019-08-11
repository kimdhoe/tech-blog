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
    html {
      box-sizing: border-box;
      font-size: 16px;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      font-size: 16px;
      font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
        'Helvetica Neue', 'Arial', 'Noto Sans', 'Noto Sans', sans-serif,
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
    position: relative;
    flex: 1;
    margin: 3.5rem auto 9rem;
    padding: 0 1.5rem;
    max-width: 650px;
  `,
}

export default Layout
