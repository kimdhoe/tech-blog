import React from 'react'
import { css } from '@emotion/core'

import useProjects from '../hooks/use-projects'
import { Page } from '../components/page'

export default () => {
  const { image } = useProjects()

  return (
    <Page
      headline="Crafts"
      lede="This page is currently under construction."
      title="Crafts"
      description="This page is currently under construction."
      image={image}
    >
    </Page>
  )
}

const styles = {
  container: css``,
}
