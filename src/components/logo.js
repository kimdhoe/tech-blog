import React from 'react'
import { css } from '@emotion/core'

const Logo = ({ title }) => (
  <svg
    role="img"
    aria-labelledby="logoimage"
    data-v-d3f97b9e=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72.49183048784231 60"
  >
    <title id="logoimage">{title}</title>
    <g
      css={styles.g}
      data-v-d3f97b9e=""
      id="2c8b65a9-763e-48f0-bc5c-ac0d2319bb5f"
      transform="matrix(0.7249178624236731,0,0,0.7249178624236731,1.689816784278264e-7,-6.245890618180233)"
      stroke="none"
    >
      <path d="M92.703 32.266c-.758-8.932-8.271-15.97-17.396-15.97-9.029 0-16.48 6.89-17.371 15.688H47.827a9.54 9.54 0 0 0-4.842 1.322c.781-10.054 6.124-18.82 13.958-24.261-1.854-.251-3.733-.429-5.657-.429C28.433 8.616 9.905 27.145 9.905 50c0 .727.024 1.448.063 2.165C4.33 53.041 0 57.928 0 63.808c0 6.498 5.286 11.784 11.783 11.784h6.995c7.577 9.614 19.318 15.792 32.509 15.792 17.486 0 32.404-10.861 38.466-26.187-4.306 2.094-9.126 3.299-14.236 3.299A32.495 32.495 0 0 1 62 65.566a13.666 13.666 0 0 0 2.982-6.741h18.357c4.723 0 8.661-3.423 9.465-7.918C96.958 49.829 100 46.043 100 41.6a9.573 9.573 0 0 0-7.297-9.334zM4.198 63.808c0-4.183 3.403-7.585 7.586-7.585h6.415l-.208-2.288c-.039-.43-.058-.829-.058-1.218 0-7.388 6.01-13.397 13.397-13.397 2.477 0 4.85.695 6.899 1.932-.004.117-.018.232-.018.351 0 5.302 4.314 9.615 9.616 9.615h6.097a9.645 9.645 0 0 0 6.854 7.264c-.773 4.48-4.677 7.902-9.375 7.902h-9.835l-.599 1.085a7.59 7.59 0 0 1-6.644 3.927H11.783c-4.182-.002-7.585-3.404-7.585-7.588zm86.525-16.801l-2.027.173.059 2.031a5.423 5.423 0 0 1-5.417 5.417h-20.01c-2.987 0-5.417-2.43-5.416-5.411l.036-2.198h-10.12a5.425 5.425 0 0 1-5.418-5.417 5.425 5.425 0 0 1 5.418-5.418h14.266l-.049-2.426c0-7.313 5.949-13.262 13.262-13.262s13.261 5.949 13.261 13.262l-.055 2.359 2.071.074a5.394 5.394 0 0 1 5.219 5.411 5.423 5.423 0 0 1-5.08 5.405z" />
    </g>
  </svg>
)

const styles = {
  g: css`
    fill: var(--text);
  `,
}

export { Logo }
