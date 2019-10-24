import React from 'react'
import { css } from '@emotion/core'
import { ExternalLink } from 'react-feather'

import useAbout from '../hooks/use-about'
import { Page } from '../components/page'

export default () => {
  const { image } = useAbout()

  return (
    <>
      <Page
        headline="About"
        lede="josephk.io"
        title="About"
        description="I am Joseph, web frontend developer. This website is a personal blog where I share my thoughts and life."
        image={image}
      >
        <section>
          <p>
            I am Joseph, web front-end developer.{' '}
            <span role="img" aria-label="waving hand">
              👋
            </span>
            <br />
            This website is my blog where I share my thoughts and life.
          </p>
        </section>

        <section>
          <h3>Why this site exists</h3>
          <p>
            I am, so to speak, a <em>self-taught</em> software engineer. Having
            said that, I'm hesitant to describe myself as self-taught. The
            community around the art of building software is so supportive that
            I have always been able to learn from something or someone.
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
            leather crafter for some time, during which I started to learn how
            to code to setup my own retail shop. Since then, writing code has
            become my major means of craftsmanship.
          </p>
          <p>
            I have lived in <strong>Seoul, Korea</strong> since university. I'm
            currently residing in Songpa District with my lovely wife{' '}
            <i>Summer</i>.
          </p>
          <p>
            When I'm away from the computer, I like to spend time with my wife
            or read a book in a quiet place. I love <strong>coffee</strong> and
            seldom drink liquor.
          </p>
        </section>
      </Page>

      <section css={styles.techs}>
        <h3 css={styles.techsHeading}>Technologies I Used</h3>

        <h4 css={styles.stackSectionHeading}>Data Sources</h4>
        <ul css={styles.stackSection}>
          <StackItem name="Contentful" url="" />
          <StackItem name="Forestry" url="" />
          <StackItem name="GitHub" url="" />
        </ul>
        <h4 css={styles.stackSectionHeading}>Build</h4>
        <ul css={styles.stackSection}>
          <StackItem name="Gatsby" url="" />
          <StackItem name="Staticman" url="" />
          <StackItem name="Emotion" url="" />
          <StackItem name="Node.js" url="" />
        </ul>
        <h4 css={styles.stackSectionHeading}>Deploy</h4>
        <ul css={styles.stackSection}>
          <StackItem name="ZEIT Now" url="" />
        </ul>
      </section>
    </>
  )
}

const StackItem = ({ name, url }) => (
  <li css={[styles.stackListItem]}>
    <a css={styles.stackListItemLink} href={url}>
      {name}
      <ExternalLink css={styles.linkIcon} size={15} />
    </a>
  </li>
)

const styles = {
  techs: css`
    margin: 0 auto 10rem;
    border-radius: 5px;
    padding: 4rem 1rem;
    max-width: 620px;
    text-align: center;
    box-shadow: var(--shadow-medium);
  `,
  techsHeading: css`
    margin: 0 auto 4rem;
    max-width: 620px;
    font-size: 1.5rem;
    font-weight: 500;
  `,
  stackSectionHeading: css`
    letter-spacing: 0.07rem;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
  `,
  stackSection: css`
    margin-bottom: 3rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style-type: none;

    :last-of-type {
      margin-bottom: 0;
    }
  `,
  stackListItem: css`
    margin: 0 0.3rem;
  `,
  stackListItemLink: css`
    margin-bottom: 0.7rem;
    border: 1px solid var(--text);
    border-radius: 5px;
    padding: 0.6rem 2rem;
    display: flex;
    align-items: center;
    transition: all 0.15s ease-out;
    background-color: var(--text);
    color: var(--bg);

    :hover {
      background-color: var(--bg);
      color: var(--text);
    }
  `,
  linkIcon: css`
    margin-left: 0.7rem;
  `,
}
