import React from 'react'
import GatsbyImage from 'gatsby-image'
import { css } from '@emotion/core'

const PageHeader = ({ headline, lede, image }) => (
  <header css={styles.header}>
    <h1 css={styles.heading}>{headline}</h1>
    <h2 css={styles.subheading}>{lede}</h2>
    {image && <Image imageFluid={image} alt={lede} />}
  </header>
)

const Image = ({ imageFluid, alt }) => (
  <div
    css={css`
      position: relative;
      height: ${100 / imageFluid.aspectRatio}%;
    `}
  >
    <GatsbyImage fluid={imageFluid} alt={alt} />
    <div
      css={css`
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      `}
    />
  </div>
)

const styles = {
  header: css`
  `,
  heading: css`
    margin: 0 0 1.5rem 0;
    padding-top: 1rem;
    font-size: 2.1rem;
    font-weight: 500;
  `,
  subheading: css`
    position: relative;
    margin: 0;
    padding-top: 1.5rem;
    word-break: keep-all;
    line-height: 1.7;
    font-weight: 400;
    font-size: 1rem;

    ::before {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0.1rem;
      width: 70px;
      height: 1px;
      background-color: var(--text);
    }
  `,
}

export { PageHeader }
