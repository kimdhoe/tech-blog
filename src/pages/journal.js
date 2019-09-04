import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Image from 'gatsby-image'

import useJournal from '../hooks/use-journal'
import SEO from '../components/seo'

export default () => {
  const journals = useJournal()

  return (
    <div css={styles.container}>
      <SEO title="Life" description="Life of Joseph" />

      <header css={styles.header}>
        <h2 css={styles.title}>Life</h2>
      </header>

      <h4 css={styles.monthYear}>2019</h4>

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
        <Image css={styles.entryImage} fluid={fluid} />
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
    margin: 6rem auto;
    padding: 0 1rem;
    max-width: 650px;
  `,
  header: css`
    margin-bottom: 2rem;
    text-align: center;
  `,
  monthYear: css`
    position: relative;
    margin: 0 0 4.5rem 0;
    padding: 4.5rem 0 0 0;
    text-align: center;
    font-weight: 600;

    ::before {
      content: ' ';
      position: absolute;
      top: 0rem;
      left: 50%;
      transform: translateX(-50%);
      width: 70px;
      height: 1px;
      background-color: #444;
    }
  `,
  title: css`
    margin: 0 0 0.79rem 0;
    padding: 0;
    font-size: 1.802rem;
  `,
  entries: css`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
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
  `,
  entryImageContainer: css`
    flex: 1;
    transition: all 0.15s ease-out;

    ${EntryContainer}:hover & {
      box-shadow: 0 8px 19px -12px rgba(0, 0, 0, 0.56), 0 2px 12.5px 0px rgba(0, 0, 0, 0.12), 0 4px 5px -5px rgba(0, 0, 0, 0.2);
      transform: translate3d(0, -0.1rem, 0);
    }
  `,
  entryImage: css`
    height: 100%;
    background-color: #f1f3f5;
    background-size: cover;
    background-position: center;
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
    padding: 0.7rem 0.3rem 0;
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
