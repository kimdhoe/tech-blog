import React, { useState, useRef, useEffect } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import { Logo } from '../logo'
import { MobileMenu } from '../mobile-menu'
import { DarkModeButton } from '../dark-mode-button'

const MobileHeader = ({ title, theme, onToggle }) => {
  const [showMenu, setShowMenu] = useState(false)
  const containerRef = useRef()

  useEffect(() => {
    const handleClick = e => {
      if (!isChild(e.target, containerRef.current)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  })

  const close = () => {
    setShowMenu(false)
  }

  return (
    <div css={styles.container} ref={containerRef}>
      <motion.div css={styles.fixed}>
        <div css={styles.logo}>
          <Link to="/" onClick={close}>
            <Logo title={title} />
          </Link>
        </div>

        <div css={styles.buttonWrapper}>
          <DarkModeButton {...{ theme, onToggle }} />
          <Switch
            opened={showMenu}
            onClick={() => {
              setShowMenu(!showMenu)
            }}
          />
        </div>

        <div css={styles.brand}>
          <Link to="/" onClick={close}>
            JosephK.io
          </Link>
        </div>
      </motion.div>

      <MobileMenu visible={showMenu} close={close} />
    </div>
  )
}

const Switch = ({ opened, onClick }) => (
  <button css={styles.switchContainer} onClick={onClick} aria-label="Toggle Menu">
    <span css={styles.hidden}>Munu Button</span>
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
  hidden: css`
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  `,
  container: css`
    position: relative;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  fixed: css`
    position: fixed;
    z-index: 11;
    top: 0;
    right: 0;
    left: 0;
    padding: 0.5rem 1rem 0.3rem;
    border-bottom: 1px solid var(--hr);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.1s ease-out;
    background: var(--bg);

  `,
  brand: css`
    position: absolute;
    z-index: 12;
    top: 0.7rem;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: 90px;
    height: 31px;
    transition: all 0.1s ease-out;
    font-variant: small-caps;
    letter-spacing: 0.02rem;

    .scrolled-a-bit & {
      opacity: 0;
      transform: translate3d(-50%, -2.5rem, 0);
    }
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

// Is target a child of node?
function isChild(target, node) {
  if (target === node) return true
  if (!target.parentNode) return false
  return isChild(target.parentNode, node)
}

export { MobileHeader }