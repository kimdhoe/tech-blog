import React from 'react'

import useAbout from '../hooks/use-about'
import { Page } from '../components/page'

export default () => {
  const { image } = useAbout()

  return (
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
          When I'm away from the computer, I like to spend time with my wife or
          read a book in a quiet place. I love <strong>coffee</strong> and
          seldom drink liquor.
        </p>
      </section>
    </Page>
  )
}
