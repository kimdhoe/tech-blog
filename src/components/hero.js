import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  + * {
    margin-top: 0;
  }
`

const TextBox = styled.div`
  /* background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00); */
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p {
    color: #222;
    margin-top: 0;
  }

  a {
    color: #222;
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "monstera-0.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h1>I Just Made A Technical Blog</h1>
        <p>Hello World!</p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
