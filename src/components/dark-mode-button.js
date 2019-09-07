import React from 'react'
import { css } from '@emotion/core'
import { Moon, Sun } from 'react-feather'

const DarkModeButton = ({ theme, onToggle }) => (
  <button type="button" css={styles.container} onClick={onToggle}>
    <Sun
      css={[styles.icon, { opacity: theme === 'light' ? 0 : 1 }]}
      size={15}
    />
    <Moon
      css={[styles.icon, { opacity: theme === 'light' ? 1 : 0 }]}
      size={15}
    />
    <div css={styles.ball} />
  </button>
)

const styles = {
  container: css`
    border: none;
    outline: none;
    position: relative;
    display: flex;
    align-items: center;
    width: 48px;
    height: 23px;
    background-color: var(--bg1);
    border-radius: 11.5px;
    cursor: pointer;
  `,
  icon: css`
    flex: 1;
    justify-content: center;
    align-items: center;
    color: var(--text);
  `,
  ball: css`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 19.5px;
    height: 19.5px;
    border-radius: 13px;
    background-color: var(--bg2);
    transition: transform 0.1s ease-out;

    .dark & {
      transform: translate3d(24px, 0, 0);
    }
  `,
}

export { DarkModeButton }
