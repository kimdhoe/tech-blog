"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const core_1 = require("@emotion/core");
const use_posts_1 = __importDefault(require("../hooks/use-posts"));
const post_preview_1 = __importDefault(require("../components/post-preview"));
const page_header_1 = require("../components/page-header");
const x = 1;
const IndexPage = () => {
    const { posts, featured, report } = use_posts_1.default();
    return (<div css={styles.container}>
      <div css={styles.header}>
        <page_header_1.PageHeader headline="Blog" center={false}/>
      </div>

      <div css={styles.wrapper}>
        <div css={styles.main}>
          <Posts posts={posts}/>
        </div>

        <aside css={styles.aside}>
          <FeaturedPosts posts={featured} report={report}/>
        </aside>
      </div>
    </div>);
};
const Posts = ({ posts }) => (<div css={styles.postPreviews}>
    {posts.map(post => (<post_preview_1.default key={post.slug} post={post}/>))}
  </div>);
const FeaturedPosts = ({ posts, report }) => (<div css={styles.featured}>
    <h2 css={styles.featuredHeading}>Featured Posts</h2>
    <ul css={styles.featuredList}>
      {posts.map(post => (<FeaturedPost key={post.slug} slug={post.slug} title={post.title}/>))}
    </ul>
    {!!report && (<>
        <h2 css={styles.featuredHeading}>Signs of Progress</h2>
        <ul css={styles.featuredList}>
          <FeaturedPost key={report.slug} slug={report.slug} title={report.dateFormatted}/>
        </ul>
      </>)}
  </div>);
const FeaturedPost = ({ slug, title }) => (<li key={slug} css={styles.featuredListItem}>
    <gatsby_1.Link css={styles.featuredListItemLink} to={`/${slug}/`}>
      {title}
    </gatsby_1.Link>
  </li>);
const styles = {
    container: core_1.css `
    margin: 6rem auto;
    padding: 0;
    max-width: 1000px;
  `,
    header: core_1.css `
    padding: 0 1rem;
  `,
    wrapper: core_1.css `
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
      margin-top: 3rem;
    }
  `,
    main: core_1.css `
    flex: 1;
    padding: 0 1rem;
    max-width: 730px;
  `,
    aside: core_1.css `
    margin-left: 1.5rem;
    padding: 1rem 1rem 0;
    width: 300px;

    @media only screen and (max-width: 730px) {
      display: none;
    }
  `,
    featured: core_1.css `
    position: sticky;
    top: 80px;
    overflow-y: auto;
    height: calc(100vh - 5rem);
  `,
    featuredHeading: core_1.css `
    margin-bottom: 1.5rem;
    font-size: 1.15rem;
    font-weight: 500;
  `,
    featuredList: core_1.css `
    margin-bottom: 1.5rem;
    padding: 0 0 0 0.15rem;
    list-style: none;
  `,
    featuredListItem: core_1.css `
    margin-bottom: 0.7rem;
    padding-bottom: 0.7rem;
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
    featuredListItemLink: core_1.css `
    font-size: 0.9rem;
    color: var(--text-auxiliary);
    transition: color 0.15s ease-out;

    :hover {
      color: var(--text0);
    }
  `,
    nav: core_1.css `
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
    navWrapper: core_1.css `
    margin: 0 auto;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  `,
    navItem: core_1.css `
    flex: 1;
    margin: 0;
    padding: 0;
  `,
    navItemLink: core_1.css `
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
    postPreviews: core_1.css `
    padding: 0;
  `,
};
exports.default = IndexPage;
