import React, { memo } from 'react'
import { css } from '@emotion/core'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { MobileHeader } from './mobile-header'

const Header = memo(({ siteTitle }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <header css={styles.container}>
          <MobileHeader
            title={siteTitle}
            theme={theme}
            onToggle={() => {
              toggleTheme(theme === 'dark' ? 'light' : 'dark')
            }}
          />
        </header>
      )}
    </ThemeToggler>
  )
})

const styles = {
  container: css`
    padding: 0;
  `,
}

export default Header
