import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

const SIDEBAR_WIDTH = 250
const NAV_ITEMS = [
  { to: '/', label: 'Blog' },
  { to: '/devlog/', label: 'Devlog' },
  { to: '/journal/', label: 'Journal' },
  { to: '/now/', label: 'Now' },
  { to: '/about/', label: 'About' },
  { to: '/contact/', label: 'Contact' },
  { to: '/colophon/', label: 'Colophon' },
]

const variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  },
  closed: {
    opacity: 1,
    x: SIDEBAR_WIDTH + 'px',
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  },
  exit: {
    opacity: 1,
    x: SIDEBAR_WIDTH + 'px',
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  },
}

const variants2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  },
}

const variants3 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 30,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  },
};

const MobileMenu = ({ visible, close }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          css={styles.container}
          variants={variants}
          initial="closed"
          animate={visible ? 'open' : 'closed'}
          exit="closed"
        >
          <div style={{ overflow: 'scroll' }}>
            <motion.div css={styles.list} key="a" variants={variants2}>
              {NAV_ITEMS.map(item => (
                <MenuItem key={item.to} to={item.to} label={item.label} close={close} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const MenuItem = ({ to, label, close }) => {
  return (
    <motion.div
      css={styles.listItem}
      key={to + label}
      variants={variants3}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      exit={{ opacity: 0 }}
    >
      <Link
        css={styles.listItemLink}
        to={to}
        onClick={() => setTimeout(close)}
      >
        {label}
      </Link>
    </motion.div>
  );
};

const styles = {
  container: css`
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    border-left: 1px solid var(--hr);
    width: 100%;
    max-width: ${SIDEBAR_WIDTH}px;
    overflow: scroll;
    transition: background-color 0.1s ease-out;
    background-color: var(--bg);
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.05);
  `,
  list: css`
    margin-top: 5rem;
    flex: 1;
  `,
  listItem: css`
  `,
  listItemLink: css`
    display: block;
    padding: 0.7rem 1.4rem;
  `,
}

export { MobileMenu }