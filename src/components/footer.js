import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { Logo } from './logo'

const Footer = ({ author }) => {
  return (
    <footer css={styles.container}>
      <div css={styles.links}>
        <Column css={styles.brandColumn}>
          <div css={styles.illust}>
            Illustrations by <a href="https://icons8.com">Ouch.pics</a>
          </div>
          <div css={styles.brand}>
            <div css={styles.logo}>
              <Logo />
            </div>
            <div css={styles.meta}>
              <div css={styles.brandName}>josephk.io</div>
              <div css={styles.copyright}>
                &copy; {new Date().getFullYear()} {author}
              </div>
            </div>
          </div>
        </Column>

        <Column>
          <LinkList
            items={[
              { label: 'Blog', url: '/' },
              { label: 'Devlog', url: '/devlog/' },
              { label: 'Journal', url: '/journal/' },
            ]}
          />
        </Column>

        <Column>
          <LinkList
            items={[
              { label: 'Now', url: '/now/' },
              { label: 'About', url: '/about/' },
              { label: 'Crafts', url: '/crafts/' },
              { label: 'Colophon', url: '/colophon/' },
            ]}
          />
        </Column>
      </div>
    </footer>
  )
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const LinkList = ({ items }) => (
  <ul css={styles.list}>
    {items.map((item, i) => (
      <li css={styles.listItem} key={i}>
        <Link css={styles.listItemLink} to={item.url}>
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
)

const styles = {
  container: css`
    padding: 3rem 0 2.5rem;
    border-top: 1px solid var(--hr);
    letter-spacing: 0.02rem;
    font-size: 0.9rem;
    color: var(--text-auxiliary);
  `,
  links: css`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 768px;

    @media only screen and (max-width: 600px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  `,
  column: css`
    display: flex;
    flex-direction: column;
  `,
  brandColumn: css`
    justify-content: space-between;

    @media only screen and (max-width: 600px) {
      order: 3;
      margin-top: 1rem;
      width: 100%;
    }
  `,
  brand: css`
    margin-left: -1rem;
    padding-bottom: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 600px) {
      margin-top: 3rem;
      margin-left: 0;
    }
  `,
  logo: css`
    margin: 0.4rem 0.7rem 0 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  `,
  meta: css``,
  brandName: css`
    margin-bottom: 0.5rem;
  `,
  illust: css`
    padding-top: 0.8rem;
    text-align: center;

    a {
      color: var(--text-auxiliary);
      transition: all 0.15s ease-out;

      :hover {
        color: var(--text0);
      }
    }
  `,
  list: css`
    margin: 0;
    padding: 0;
    list-style-type: none;
  `,
  listItemLink: css`
    padding: 0.8rem 2rem;
    display: inline-block;
    color: var(--text-auxiliary);
    transition: all 0.15s ease-out;

    :hover {
      color: var(--text0);
    }
  `,
  copyright: css`
    font-size: 0.9rem;
  `,
}

export default Footer
