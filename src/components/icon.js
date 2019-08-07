import React from 'react'
import feather from 'feather-icons'
import { css } from '@emotion/core'

const Icon = ({ name, attrs }) => (
  <span
    css={styles.container}
    dangerouslySetInnerHTML={{ __html: feather.icons[name].toSvg(attrs) }}
  />
)

const styles = {
  container: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}

export default Icon
