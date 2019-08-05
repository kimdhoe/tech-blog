import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import useLogo from '../hooks/use-logo'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/dev', label: 'Dev' },
  { to: '/projects', label: 'Projects' },
  { to: '/now', label: 'Now' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const Header = ({ siteTitle }) => {
  const logo = useLogo()

  return (
    <header css={styles.container}>
      <div css={styles.wrapper}>
        <Link css={styles.title} to="/">
          <div css={styles.logo}>
            <Image fluid={logo.fluid} />
          </div>
          <h1 css={styles.titleText}>
            {siteTitle}
          </h1>
        </Link>
        <nav css={styles.nav}>
          <ul css={styles.navList}>
            {NAV_ITEMS.map(page => (
              <NavListItem key={page.label} to={page.to} label={page.label} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

const NavListItem = ({ to, label }) => (<li css={styles.navListItem}>
  <Link css={styles.navListItemLink} to={to} activeClassName="current-page">
    {label}
  </Link>
</li>
)

const styles = {
  container: css`
    padding: 2rem 0;
  `,
  wrapper: css`
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  title: css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  `,
  logo: css`
    margin-right: 0.7rem;
    width: 43px;
  `,
  logoImg: css`
    width: 100%;
  `,
  titleText: css`
    margin: 0;
    font-size: 1.1rem;
    color: #222;
  `,
  nav: css`
    margin-top: 0;
  `,
  navList: css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  `,
  navListItem: css`
    margin: 0 0 0 1.5rem;
  `,
  navListItemLink: css`
    position: relative;
    margin-left: 0.04rem;
    padding: 0.5rem 0;
    font-size: 0.8rem;
    letter-spacing: 0.03rem;
    text-decoration: none;
    color: #222;

    ::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0rem;
      transform: translateX(-50%);
      border-radius: 2px;
      width: 4px;
      height: 4px;
      background: transparent;
    }

    :hover {
      ::before {
        background: #dee2e6;
      }
    }

    &.current-page {
      ::before {
        background: #868e96;
      }
    }
  `,
}

export default Header
