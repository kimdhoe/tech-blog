import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/now', label: 'Now' },
  { to: '/dev', label: 'Dev' },
  { to: '/archive', label: 'Archive' },
  { to: '/contact', label: 'Contact' },
]

const Header = ({ siteTitle }) => (
  <header css={styles.container}>
    <div css={styles.wrapper}>
      <Link css={styles.title} to="/">
        {siteTitle}
      </Link>
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
    font-family: 'Dank Mono', 'Helvatica Neue', 'Helvetica', 'Arial', serif;
    font-style: italic;
    text-decoration: none;
    color: #444;
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
    font-family: 'Dank Mono';
    text-decoration: none;
    color: #444;

    &.current-page {
      border-bottom: 2px solid #222;
    }
  `,
}

export default Header
