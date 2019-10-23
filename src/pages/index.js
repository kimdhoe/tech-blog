import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import usePosts from '../hooks/use-posts'
import PostPreview, {
  Container as PostPreviewContainer,
} from '../components/post-preview'
import { PageHeader } from '../components/page-header'

const IndexPage = () => {
  const posts = usePosts()

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <PageHeader headline="Blog" />
      </div>
      <div css={styles.wrapper}>
        <div css={styles.main}>
          <Previews>
            {posts.map(post => (
              <PostPreview key={post.slug} post={post} />
            ))}
          </Previews>
        </div>
        <aside css={styles.aside}>
          <div css={styles.featured}>
            <h2 css={styles.featuredHeading}>Featured Posts</h2>
            <ul css={styles.featuredList}>
              {posts.map(post =>
                !post.featured ? null : (
                  <li key={post.slug} css={styles.featuredListItem}>
                    <Link
                      css={styles.featuredListItemLink}
                      to={`/${post.slug}/`}
                    >
                      {post.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

const Previews = styled.div`
  padding: 0;
/*
  &:hover ${PostPreviewContainer} {
    opacity: 0.7;

    @media only screen and (max-width: 650px) {
      opacity: 1;
    }
  } */
`

const styles = {
  container: css`
    margin: 7rem auto;
    padding: 0;
    max-width: 1000px;
  `,
  header: css`
    padding: 0 1rem;
  `,
  wrapper: css`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
      margin-top: 3rem;
    }
  `,
  main: css`
    flex: 1;
    padding: 0 1rem;
    max-width: 730px;
  `,
  aside: css`
    margin-left: 1.5rem;
    padding: 1rem 1rem 0;
    width: 300px;

    @media only screen and (max-width: 730px) {
      display: none;
    }
  `,
  featured: css`
    position: sticky;
    top: 80px;
  `,
  featuredHeading: css`
    margin-bottom: 1.5rem;
    font-size: 1.15rem;
    font-weight: 600;
  `,
  featuredList: css`
    list-style: none;
    padding: 0 0 0 0.15rem;
  `,
  featuredListItem: css`
    margin-bottom: 0.8rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--hr);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    :last-of-type {
      border: none;
    }

    ::before {
      content: '✧';
      margin-right: 0.6rem;
      font-size: 0.8rem;
    }
  `,
  featuredListItemLink: css`
    font-size: 0.9rem;
    color: var(--text-auxiliary);
    transition: color 0.15s ease-out;

    :hover {
      color: var(--text0);
    }
  `,
  nav: css`
    position: fixed;
    z-index: 4;
    top: 46px;
    right: 0;
    left: 0;
    border-bottom: 1px solid var(--hr);
    height: 45px;
    transition: all 0.1s ease-out;
    background: var(--bg);

    .scrolled-a-bit & {
      transform: translate3d(0, -45px, 0);
    }

    @media only screen and (max-width: 650px) {
      display: none;
    }
  `,
  navWrapper: css`
    margin: 0 auto;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  `,
  navItem: css`
    flex: 1;
    margin: 0;
    padding: 0;
  `,
  navItemLink: css`
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.9rem;

    :hover {
      color: var(--text-link);
    }

    &.current {
      color: var(--text-link);
    }
  `,
  postPreviews: css`
    padding: 0;
  `,
}

export default IndexPage
