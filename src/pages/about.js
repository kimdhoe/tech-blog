import React from 'react'
import { css } from '@emotion/core'

import { SEO } from '../components/seo'
import { PageHeader } from '../components/page-header'

export default () => (
  <article css={styles.container}>
    <SEO
      title="About"
      description="I am Joseph, web frontend developer. This website is a personal blog where I share my thoughts and life."
    />
    <PageHeader title="About" subtitle="dhk.party" />

    <div css={styles.body}>
      <section>
        <p>
          I am Joseph, web front-end developer.{' '}
          <span role="img" aria-label="waving hand">
            👋
          </span>
          <br />
          This website is a personal blog where I share my thoughts and life.
        </p>
      </section>

      <section>
        <h3>Why this site exists</h3>
        <p>
          I am, so to speak, a <em>self-taught</em> software engineer. Having
          said that, I'm hesitant to describe myself as self-taught. The
          community around the art of building software is so supportive that I
          have always been able to learn from something or someone.
        </p>
        <p>
          it seems to me that every member of this community is not only a
          learner but also a teacher at the same time. A developer, given a
          community input, produces an output to be a help. Appreciating the
          culture of sharing expertise and knowledge rather than hoarding, I
          started this website as a way of contributing back to the community.
        </p>
        <p>
          I open up my <em>thoughts</em>, my <em>findings</em>, or just{' '}
          <em>what I'm doing</em>, by simply publishing them here, on the
          internet.
        </p>
      </section>

      <section>
        <h3>About me</h3>
        <p>
          I majored in public administration at Korea University. I had been a
          leather crafter for some time, during which I started to learn how to
          code to setup my own retail shop. Since then, writing code has become
          my major means of craftsmanship.
        </p>
        <p>
          I have lived in <strong>Seoul, Korea</strong> since university. I'm
          currently residing in Songpa District with my lovely wife{' '}
          <i>Summer</i>.
        </p>
        <p>
          The top-level part of the domain name, although cool, hardly represent
          my personality. I'm not really a party person, just in case you get
          the wrong impression. When I'm away from the computer, I like to spend
          time with my wife or read a book in a quiet place. I love{' '}
          <strong>coffee</strong> and seldom drink liquor.
        </p>
      </section>
    </div>
  </article>
)

const styles = {
  container: css`
    margin: 4rem auto;
    padding: 0 1rem;
    max-width: 650px;
  `,
  body: css`
    margin: 0;
    line-height: 1.8;

    h3 {
      margin: 2.75rem 0 1.602rem;
    }

    p {
      margin: 0 0 1.602rem 0;
    }

    a {
      text-decoration: none;
      background: linear-gradient(to right, #fd828377 0%, #fd828377);
      background-repeat: no-repeat;
      background-size: 100% 0.2rem;
      background-position: 0 88%;
      transition: background-size 0.1s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;

      &:hover {
        background-size: 100% 88%;
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
