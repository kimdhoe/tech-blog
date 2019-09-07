import React, { useState } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import disableScroll from 'disable-scroll'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { Logo } from '../logo'
import { LogoText } from '../logo-text'
import { MobileMenu } from '../mobile-menu'
import { DarkModeButton } from '../dark-mode-button'

const fixBody = (fix) => {
  if (fix) {
    disableScroll.on()
  } else {
    disableScroll.off()
  }
}

const MobileHeader = ({ title }) => {
  const [showMenu, setShowMenu] = useState(false)

  const close = () => {
    fixBody(false)
    setShowMenu(false)
  }

  return (
    <div css={styles.container}>
      <motion.div css={styles.fixed}>
        <div css={styles.logo}>
          <Link to="/" onClick={close}>
            <Logo title={title} />
          </Link>
        </div>

        <div css={styles.buttonWrapper}>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <DarkModeButton
                theme={theme}
                onToggle={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
              />
            )}
          </ThemeToggler>
          <Switch
            opened={showMenu}
            onClick={() => {
              fixBody(!showMenu)
              setShowMenu(!showMenu)
            }}
          />
        </div>
      </motion.div>

      <div css={styles.brand}>
        <Link to="/" onClick={close}>
          <LogoText title={title} />
        </Link>
      </div>

      <MobileMenu visible={showMenu} close={close} />
    </div>
  )
}

const Switch = ({ opened, onClick }) => (
  <button css={styles.switchContainer} onClick={onClick}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        initial="closed"
        animate={opened ? 'open' : 'closed'}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        initial="closed"
        animate={opened ? 'open' : 'closed'}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        initial="closed"
        animate={opened ? 'open' : 'closed'}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
)

const Path = props => (
  <motion.path
    css={css`stroke: var(--text);`}
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
)

const styles = {
  container: css`
    position: relative;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 761px) {
      display: none;
    }
  `,
  fixed: css`
    position: fixed;
    z-index: 11;
    top: 0;
    right: 0;
    left: 0;
    padding: 0.5rem 1rem 0.3rem;
    border-bottom: 1px solid var(--card);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg);

  `,
  brand: css`
    position: relative;
    z-index: 12;
    top: 0.7rem;
    width: 90px;
    height: 31px;
  `,
  logo: css`
    width: 35px;
    height: 33px;
  `,
  buttonWrapper: css`
    display: flex;
  `,
  switchContainer: css`
    position: relative;
    z-index: 12;
    display: flex;
    width: 27px;
    height: 27px;
    align-items: center;
    justify-content:center;
    outline: none;
    margin: 0 0 0 0.5rem;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  `,
}

export { MobileHeader }