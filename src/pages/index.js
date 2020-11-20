import React from "react"
//import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import Blogs from "../components/Blogs"
import About from "../components/About"
import Title from "../components/Title"

export default ({data}) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs }
  } = data
  return (
    <Layout>
      {/* <SEO title="Главная" description="электрик в Харькове" /> */}
      <SEO title="🔌 Все виды электромотажных работ! Телефон: ☎️ 050-922-33-76" description="электрик в Харькове" />
      <Hero/>
      <Services />
      <About showLink/>
      <section className="projects">
        <Title title="Вид услуги" />
        <Projects projects={projects} showLink />
      </section>
      <section className="section">
        <Title title="Блог" />
        <Blogs blogs={blogs} showLink />
      </section>
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
        date(formatString: "D MMMM, YYYY", locale: "ru")
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