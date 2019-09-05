import React from 'react'

import { Page } from '../components/page'

export default () => (
  <Page
    headline="Contact"
    lede="Drop me a line"
    title="Contact"
    description="I'd love to hear from you, whether you have a question about this website, a feedback on me, or anything else. I'm happy to send you a real response, so please email me and say hi."
  >
    <section>
      <p>
        I'd love to hear from you, whether you have a question about this
        website, a feedback on me, or anything else.
      </p>
      <p>
        I'm happy to send you a real response, so please email at{' '}
        <a href="mailto:kimdhoe1@gmail.com">kimdhoe1@gmail.com</a> and say hi.
      </p>
    </section>
  </Page>
)
