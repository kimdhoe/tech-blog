import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/dev', label: 'Dev' },
  { to: '/projects', label: 'Projects' },
  { to: '/now', label: 'Now' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const Header = ({ siteTitle }) => (
  <header css={styles.container}>
    <div css={styles.wrapper}>
      <h1 css={styles.title}>
        <Link css={styles.titleLink} to="/">
          {siteTitle}
        </Link>
      </h1>
      <Nav />
    </div>
  </header>
)

const Nav = () => (
  <nav css={styles.nav}>
    <ul css={styles.navList}>
      {NAV_ITEMS.map(page => (
        <NavListItem key={page.label} to={page.to} label={page.label} />
      ))}
    </ul>
  </nav>
)

const NavListItem = ({ to, label }) => (
  <li css={styles.navListItem}>
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
    margin: 0;
  `,
  titleLink: css`
    font-size: 1.35rem;
    font-family: 'Futura', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
      'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif;
    font-weight: bold;
    text-decoration: none;
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
    margin-left: 0.04rem;
    padding: 0.1rem 0;
    font-size: 0.8rem;
    letter-spacing: 0.03rem;
    text-decoration: none;
    color: #222;

    &.current-page {
      position: relative;

      ::before {
        content: '';
        position: absolute;
        left: 50%;
        top: -0.3rem;
        transform: translateX(-50%);
        border-radius: 2px;
        width: 4px;
        height: 4px;
        background: #868e96;
      }
    }
  `,
}

export default Header
