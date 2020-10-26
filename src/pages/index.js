import React from "react"
//import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"

export default ({data}) => {
  const {
    allStrapiProjects: { nodes: projects }
  } = data
  return (
    <Layout>
      <Hero/>
      <Services />
      <Projects projects={projects} title="рабочий проект" showLink />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        description
        montag
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`