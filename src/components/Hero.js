import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import BackgroundImage from 'gatsby-background-image'

const Hero = ({}) => {
  const {
    home,
    fon,
  } = useStaticQuery(
    graphql`
    {
      home: file(relativePath: {eq: "foto-home-1.png"}) {
        childImageSharp {
          fluid(maxWidth: 700,quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fon: file(relativePath: {eq: "hero-fon-2560-1440.png"}) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
)

  return (
    <BackgroundImage
      Tag={`header`}
      className={`fon`}
      fluid={fon.childImageSharp.fluid}
      alt="фон секции главной страницы"
    >
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underlinle"></div>
            <h2>я Андрей</h2>
            <h4>Специалист по электромонтажным работам</h4>
            <h4>в Харькове</h4>
            <Link to="/contact/" className="btn">
              напишите мне
            </Link>
            <SocialLinks />
          </div>
        </article>
        <div className="hero-image">
          <Image fluid={home.childImageSharp.fluid} className="hero-img" alt="специалист по электромонтажным работам"/>
        </div>
      </div>
    </header>
    </BackgroundImage>
  )
}

export default Hero

