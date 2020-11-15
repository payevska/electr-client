import React from "react"
//import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Blogs from "../components/Blogs"


export default ({data}) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs }
  } = data
  return (
    <Layout>
      <SEO title="Главная" description="электрик в Харькове" />
      <Hero/>
      <Services />
      <Projects projects={projects} title="Вид услуги" showLink />
      <Blogs blogs={blogs} title="Блог" showLink />
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
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        content
        date(formatString: "MMMM Do, YYYY")
        desc
        slug
        id
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
      }
    }
  }
`