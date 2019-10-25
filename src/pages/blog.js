import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import usePosts from '../hooks/use-posts'
import PostPreview from '../components/post-preview'
import { PageHeader } from '../components/page-header'

const IndexPage = () => {
  const { posts, featured, report } = usePosts()

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <PageHeader headline="Blog" center={false} />
      </div>

      <div css={styles.wrapper}>
        <div css={styles.main}>
          <Posts posts={posts} />
        </div>

        <aside css={styles.aside}>
          <FeaturedPosts posts={featured} report={report} />
        </aside>
      </div>
    </div>
  )
}

const Posts = ({ posts }) => (
  <div css={styles.postPreviews}>
    {posts.map(post => (
      <PostPreview key={post.slug} post={post} />
    ))}
  </div>
)

const FeaturedPosts = ({ posts }) => (
  <div css={styles.featured}>
    <h2 css={styles.featuredHeading}>Featured Posts</h2>
    <ul css={styles.featuredList}>
      {posts.map(post => (
        <FeaturedPost key={post.slug} slug={post.slug} title={post.title} />
      ))}
    </ul>
  </div>
)

const FeaturedPost = ({ slug, title }) => (
  <li key={slug} css={styles.featuredListItem}>
    <Link css={styles.featuredListItemLink} to={`/${slug}/`}>
      {title}
    </Link>
  </li>
)

const styles = {
  container: css`
    margin: 6rem auto;
    padding: 0;
    max-width: 1000px;
  `,
  header: css`
    padding: 0 1rem;
  `,
  wrapper: css`
    margin-top: 3rem;
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
    font-weight: 500;
  `,
  featuredList: css`
    margin-bottom: 1.5rem;
    padding: 0 0 0 0.15rem;
    list-style: none;
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
