import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Moon, Sun } from 'react-feather'

import { Logo } from './logo'
import { LogoText } from './logo-text'
import { MobileHeader } from './mobile-header'

const NAV_ITEMS = [
  { to: '/', label: 'Blog' },
  { to: '/devlog/', label: 'Devlog' },
  { to: '/journal/', label: 'Journal' },
  { to: '/now/', label: 'Now' },
  { to: '/about/', label: 'About' },
  { to: '/contact/', label: 'Contact' },
]

const Header = ({ siteTitle }) => {
  return (
    <header css={styles.container}>
      <div css={styles.pc}>
        <div css={styles.wrapper}>
          <Link css={styles.title} to="/">
            <div css={styles.logoText}>
              <div css={styles.logoTextImg}>
                <LogoText title={siteTitle} />
              </div>
            </div>
          </Link>
          <nav css={styles.nav}>
            <ul css={styles.navList}>
              {NAV_ITEMS.map(page => (
                <NavListItem key={page.label} to={page.to} label={page.label} />
              ))}
              <li css={[styles.navListItem, { marginLeft: '0.7rem' }]}>
                <ThemeToggler>
                  {(x) => console.log(x) || (
                    <ToggleDarkMode
                      theme={x.theme}
                      onToggle={() => x.toggleTheme(x.theme === 'dark' ? 'light' : 'dark')}
                    />
                  )}
                </ThemeToggler>
              </li>
            </ul>
          </nav>
        </div>
        <Link to="/">
          <div css={styles.logo}>
            <Logo title={siteTitle} />
          </div>
        </Link>
      </div>

      <MobileHeader title={siteTitle} />
    </header>
  )
}

const ToggleDarkMode = ({ theme, onToggle }) => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        align-items: center;
        width: 50px;
        height: 25px;
        background-color: var(--bg1);
        border-radius: 35px;
        cursor: pointer;
      `}
      onClick={onToggle}
    >
      <Sun
        css={css`
          flex: 1;
          justify-content: center;
          align-items: center;
          color: var(--text);
        `}
        size={15}
      />
      <Moon
        css={css`
          flex: 1;
          justify-content: center;
          align-items: center;
          color: var(--text);
        `}
        size={15}
      />
      <div
        css={css`
          position: absolute;
          top: 2px;
          left: 2px;
          width: 21px;
          height: 21px;
          border-radius: 13px;
          background-color: var(--bg2);
          transition: transform 0.2s ease-out;
          transform: translateX(${theme === 'dark' ? '25px' : '0'});
        `}
      />
    </div>
  )
}

const NavListItem = ({ to, label }) => (
  <li css={styles.navListItem}>
    <Link css={styles.navListItemLink} to={to} activeClassName="current-page">
      {label}
    </Link>
  </li>
)

const styles = {
  container: css`
    padding: 0;
  `,
  pc: css`
    @media only screen and (max-width: 760px) {
      display: none;
    }
  `,
  wrapper: css`
    margin: 0 auto;
    padding: 0.8rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  logo: css`
    position: fixed;
    z-index: 11;
    top: 1.1rem;
    left: 1rem;
    width: 40px;
    height: 37px;
  `,
  title: css`
    margin-left: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  `,
  logoText: css`
    overflow: hidden;
    width: 120px;
    height: 36px;
  `,
  logoTextImg: css`
    width: 100%;
  `,
  titleText: css`
    margin: 0;
    font-size: 1.1rem;
    font-weight: bold;
  `,
  nav: css`
    display: flex;
    margin-top: 0;

    @media only screen and (max-width: 760px) {
      display: none;
      margin-top: 1.5rem;
    }
  `,
  navList: css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    @media only screen and (max-width: 760px) {
      display: block;
    }
  `,
  navListItem: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;

    @media only screen and (max-width: 760px) {
      margin: 0 1.5rem 0 0;
      display: inline-block;
    }
  `,
  navListItemLink: css`
    padding: 1rem;
    font-size: 0.95rem;
    letter-spacing: 0.02rem;
    text-decoration: none;
    transition: all 0.15s ease-out;

    :hover {
      color: var(--text-link);
    }

    &.current-page {
      color: var(--brand);
    }
  `,
}

export default Header
