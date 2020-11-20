import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects}
  }
}) => {
  return (
    <Layout>
      <SEO title="Примеры работ" description="галерея с фотографиями электромонтажных работ" />
      <section className="projects-page">
        <div className="section-title">
          <h1>Примеры работ</h1>
          <div className="underline"></div>
        </div>
        <Projects projects={projects}/>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage
