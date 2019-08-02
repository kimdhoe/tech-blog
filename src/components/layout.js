import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import useSiteMetadata from '../hooks/use-sitemetadata'
import Header from './header'

import 'normalize.css'

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main css={styles.main}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = {
  main: {
    margin: '2rem auto 4rem',
    maxWidth: '90vw',
    width: '550px',
  }
}

export default Layout
