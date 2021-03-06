import React, { ReactNode } from 'react'
import { css } from '@emotion/core'

import { GatsbyImageSharpFluidWithWebp } from '../../types'
import { SEO } from '../seo'
import { PageHeader } from '../page-header'

interface Props {
  title: string
  description: string
  headline: string
  lede: string
  image: GatsbyImageSharpFluidWithWebp | null
  children?: ReactNode
}

const Page: React.FunctionComponent<Props> = ({
  title,
  description,
  headline,
  lede,
  children,
  image,
}) => {
  return (
    <article css={styles.container}>
      <SEO title={title} description={description} />
      <PageHeader image={image} headline={headline} lede={lede} />
      {children && (
        <div css={[styles.body, !!image && styles.noMarginTop]}>{children}</div>
      )}
    </article>
  )
}

const styles = {
  container: css`
    margin: 6rem auto 9rem;
    padding: 0 1rem;
    max-width: 650px;

    @media only screen and (max-width: 600px) {
      margin-top: 3rem;
    }
  `,
  noMarginTop: css`
    margin-top: 0;
  `,
  body: css`
    margin: 0;
    margin-top: 4rem;
    line-height: 1.8;

    h3 {
      margin: 2.75rem 0 1.602rem;
    }

    p {
      margin: 0 0 1.602rem 0;
    }

    ul,
    ol {
      padding-left: 1.5rem;

      ul,
      ol {
        margin-bottom: 0;
      }
    }

    blockquote {
      margin-left: 2.1rem;
      margin-right: 0;
      font-size: 0.9rem;
    }

    a {
      text-decoration: none;
      color: var(--text-link);

      &[href] {
        padding-bottom: 0.07rem;
        border-bottom: 1px solid var(--text-link);
        background-position: 0 100%;
        background-size: auto 3px;
        background-repeat: repeat-x;

        &:hover {
          border-color: transparent;
          background-image: url('/images/underline.svg');
        }

        .dark &:hover {
          border-color: transparent;
          background-image: url('/images/underline-dark.svg');
        }
      }
    }

    em,
    strong {
      letter-spacing: 0.02rem;
      text-transform: lowercase;
      font-variant: small-caps;
      font-weight: 400;
      font-style: normal;
    }

    i {
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  `,
}

export { Page }
