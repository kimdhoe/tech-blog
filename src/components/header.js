import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import { Logo } from './logo'
import { LogoTypeface } from './logo-typeface'
import { MobileHeader } from './mobile-header'

const NAV_ITEMS = [
  { to: '/', label: 'Writings' },
  { to: '/devlog/', label: 'Devlog' },
  { to: '/projects/', label: 'Projects' },
  { to: '/about/', label: 'About' },
  { to: '/contact/', label: 'Contact' },
]

const Header = ({ siteTitle }) => {
  return (
    <header css={styles.container}>
      <div css={styles.pc}>
        <div css={styles.wrapper}>
          <Link css={styles.title} to="/">
            <div css={styles.logoTypeface}>
              <div css={styles.logoTypefaceImg}>
                <LogoTypeface title={siteTitle} />
              </div>
            </div>
          </Link>
          <nav css={styles.nav}>
            <ul css={styles.navList}>
              {NAV_ITEMS.map(page => (
                <NavListItem key={page.label} to={page.to} label={page.label} />
              ))}
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

    @media only screen and (max-width: 600px) {
      padding: 0;
    }
  `,
  pc: css`
    @media only screen and (max-width: 600px) {
      display: none;
    }
  `,
  wrapper: css`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 768px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  logo: css`
    position: fixed;
    z-index: 11;
    top: 2rem;
    left: 1rem;
    width: 45px;

    @media only screen and (max-width: 868px) {
      display: none;
    }
  `,
  title: css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  `,
  logoTypeface: css`
    overflow: hidden;
    margin-right: 0.7rem;
    width: 180px;
    height: 40px;
  `,
  logoTypefaceImg: css`
    margin-left: -50px;
    width: 100%;

    @media only screen and (max-width: 868px) {
      margin-left: 0;
    }
  `,
  titleText: css`
    margin: 0;
    font-size: 1.1rem;
    font-weight: bold;
  `,
  nav: css`
    margin-top: 0;

    @media only screen and (max-width: 600px) {
      display: none;
      margin-top: 1.5rem;
    }
  `,
  navList: css`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    @media only screen and (max-width: 600px) {
      display: block;
    }
  `,
  navListItem: css`
    margin: 0;

    @media only screen and (max-width: 600px) {
      margin: 0 1.5rem 0 0;
      display: inline-block;
    }
  `,
  navListItemLink: css`
    position: relative;
    margin-left: 0.04rem;
    padding: 1rem;
    font-size: 0.9rem;
    letter-spacing: 0.03rem;
    text-decoration: none;
    color: black;

    @media only screen and (max-width: 600px) {
      display: block;
    }

    ::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0rem;
      transform: translateX(-50%);
      transition: all 0.12s ease-out;
      border-radius: 2px;
      width: 4px;
      height: 4px;
      background: transparent;
    }

    :hover {
      ::before {
        background: #dee2e6;
        transform: translate(-50%, -0.3rem);
      }
    }

    &.current-page {
      ::before {
        background: #868e96;
        transform: translate(-50%, 0);
      }
    }
  `,
}

export default Header
