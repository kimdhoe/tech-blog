import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

import useJournal from '../hooks/use-journal'
import { SEO } from '../components/seo'
import { PageHeader } from '../components/page-header'

export default () => {
  const { journals, image } = useJournal()

  return (
    <div css={styles.container}>
      <SEO title="Journal" description="Life of Joseph" />
      <div css={styles.headerWrapper}>
        <PageHeader image={image} headline="Journal" lede="2019" />
      </div>
      <div css={styles.entries}>
        {journals.map((journal, i) => (
          <Entry
            key={journal.slug}
            slug={journal.slug}
            title={journal.headline}
            date={journal.date}
            dateFormatted={journal.dateFormatted}
            fluid={journal.fluid}
          />
        ))}
      </div>
    </div>
  )
}

const Entry = ({ slug, title, date, dateFormatted, fluid }) => (
  <EntryContainer to={'/journal/' + slug + '/'}>
    <div css={styles.entryWrapper}>
      <div css={styles.entryImageContainer}>
        <BackgroundImage fluid={fluid} style={{ height: '100%' }} />
      </div>
      <div css={styles.entryLayer}>
        <h4 css={styles.entryInfo}>
          <time css={styles.entryDate} dateTime={date}>
            {dateFormatted}
          </time>
          <span css={styles.entryTitle}>{title}</span>
        </h4>
      </div>
    </div>
  </EntryContainer>
)

const EntryContainer = styled(Link)`
  position: relative;
  max-width: 100%;
  height: 0;
  padding-bottom: 100%;
`

const styles = {
  container: css`
    margin: 6rem 0 9rem;
  `,
  headerWrapper: css`
    margin: 4rem auto;
    padding: 0 1rem;
    max-width: 650px;
  `,
  entries: css`
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;

    @media only screen and (max-width: 600px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-column-gap: 1rem;
      grid-row-gap: 1.5rem;
    }
  `,
  entryWrapper: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    overflow: hidden;
  `,
  entryImageContainer: css`
    flex: 1;
    border: 1px solid #222;
    border-radius: 2px;
    transition: all 0.15s ease-out;
    filter: grayscale(90%);

    ${EntryContainer}:hover & {
      box-shadow: 0 8px 19px -12px rgba(0, 0, 0, 0.56),
        0 2px 12.5px 0px rgba(0, 0, 0, 0.12), 0 4px 5px -5px rgba(0, 0, 0, 0.2);
      transform: translate3d(0, -0.1rem, 0);
      filter: grayscale(0);
    }
  `,
  entryLayer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  entryInfo: css`
    flex: 1;
    margin: 0;
    padding: 0.5rem 0.3rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
  `,
  entryDate: css`
    margin: 0 1rem 0 0;
    padding: 0;
    font-weight: 500;
  `,
  entryTitle: css`
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  entryBody: css`
    margin-top: 0;
    line-height: 1.7;
    font-size: 0.9792rem;
  `,
}
