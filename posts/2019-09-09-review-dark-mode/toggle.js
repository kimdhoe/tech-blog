import React from 'react'
import { Sun, Moon } from 'react-feather'
import { css } from '@emotion/core'

const Toggle = () => (
  <div css={styles.container}>
    <button
      css={styles.button}
      onClick={() => window.__setPreferredTheme('light')}
    >
      <span css={styles.hidden}>Light</span>
      <Sun size={22} />
    </button>
    <button
      css={styles.button}
      onClick={() => window.__setPreferredTheme('dark')}
    >
      <span css={styles.hidden}>Dark</span>
      <Moon size={22} />
    </button>
  </div>
)

const styles = {
  container: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  button: css`
    width: 48%;
    border: none;
    outline: none;
    background: transparent;
    margin: 0;
    padding: 3rem 0;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 100ms ease-out;

    :hover {
      background-color: var(--card);
    }
  `,
  hidden: css`
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  `,
}

export default Toggle