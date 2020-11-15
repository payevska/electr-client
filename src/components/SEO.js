import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteDesc: description
        image
        siteTitle: title
      }
    }
  }
`

const SEO = ({title, description}) => {
  const {site} = useStaticQuery( query );
  const {siteDesc,siteTitle,image} = site.siteMetadata
  return (
    <Helmet htmlAttributes={{lang:"ru"}} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <link rel="shortcut icon" type="image/png" sizes="32x32" href="/logo-icon.png"></link>
    </Helmet>
  )
}

export default SEO
