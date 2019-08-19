import React from 'react'
import PropTypes from 'prop-types'
import { Global, css } from '@emotion/core'

import useSiteMetadata from '../hooks/use-sitemetadata'
import useLogo from '../hooks/use-logo'
import Header from './header'
import Footer from './footer'
import SEO from './seo'

import 'normalize.css'

const Layout = ({ children }) => {
  const { title, description, author } = useSiteMetadata()
  const logo = useLogo()

  return (
    <>
      <SEO
        lang="en"
        meta={[
          { property: `og:image`, content: "/images/monstera.jpg" },
        ]}
        title="Blog"
        description={description}
      />
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
      --bg: #f8f9f2;
      --well: white;
      --text: #052a4e;
      --textLink: #052a4e;
      --hr: hsla(0, 0%, 0%, 0.2);

      font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
        'Helvetica Neue', 'Arial', 'Noto Sans', 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      transition: all 0.1s ease;
      background-color: var(--bg);
      color: var(--text);
    }

    a {
      text-decoration: none;
      color: var(--textLink);
    }

    button {
      color: var(--textLink);
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
    width: 100%;
  `,
}

export default Layout
