import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { to: '/', label: 'Writings' },
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
      duration: 0.15,
    },
  },
  closed: {
    opacity: 0,
    x: '60vw',
    transition: {
      type: 'tween',
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    x: '60vw',
    transition: {
      type: 'tween',
      duration: 0.15,
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
    y: 50,
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
          <motion.div css={styles.list} key="a" variants={variants2}>
            {NAV_ITEMS.map(item => (
              <MenuItem key={item.to} to={item.to} label={item.label} close={close} />
            ))}
          </motion.div>
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      exit={{ opacity: 0 }}
    >
      <Link css={styles.listItemLink} to={to} onClick={close}>
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
    left: 0;
    background-color: var(--bg);
  `,
  list: css`
    margin-top: 5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  `,
  listItem: css`
  `,
  listItemLink: css`
    display: block;
    padding: 0.7rem;
    font-size: 1.7rem;
  `,
}

export { MobileMenu }