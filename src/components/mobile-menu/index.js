import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

const SIDEBAR_WIDTH = 220
const NAV_ITEMS = [
  { to: '/', label: 'Home (blog)' },
  { to: '/devlog/', label: 'Devlog' },
  { to: '/journal/', label: 'Journal' },
  { to: '/crafts/', label: 'Crafts' },
  { to: '/now/', label: 'Now' },
  { to: '/about/', label: 'About' },
  { to: '/colophon/', label: 'Colophon' },
  { to: '/contact/', label: 'Contact' },
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
    x: SIDEBAR_WIDTH + 35 + 'px',
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  },
  exit: {
    opacity: 1,
    x: SIDEBAR_WIDTH + 35 + 'px',
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
    y: 20,
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
        activeClassName="active"
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
    top: 55px;
    right: 15px;
    border-radius: 7px;
    width: 100%;
    max-width: ${SIDEBAR_WIDTH}px;
    max-height: 500px;
    overflow: scroll;
    transition: background-color 0.1s ease-out;
    background-color: var(--bg);
    box-shadow: var(--shadow-medium);
  `,
  list: css`
    flex: 1;
  `,
  listItem: css`
    border-bottom: 1px solid var(--hr);
  `,
  listItemLink: css`
    display: block;
    padding: 1.1rem 1.4rem;
    font-size: 0.95rem;
    color: var(--text-auxiliary);
    transition: all 0.15s ease-out;

    :hover {
      color: var(--text0);
      background-color: var(--bg-accents);
    }

    &.active {
      text-decoration: underline;
      color: var(--text);
    }
  `,
}

export { MobileMenu }