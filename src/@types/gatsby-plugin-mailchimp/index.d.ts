declare module 'gatsby-plugin-mailchimp' {
  export default function addToMailchimp(
    email: string,
    data?: { [key: string]: string }
  ): Promise<{
    result: 'success' | 'error'
    msg: string
  }>
}
