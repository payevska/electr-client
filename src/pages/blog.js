import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import Title from "../components/Title"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs }
  }
}) => {
  return (
    <Layout>
      <SEO title="Блог" description="блог по электрике" />
      <section className="section blog-page">
        <div className="section-title">
          <h1>Блог</h1>
          <div className="underline"></div>
        </div>
        <Blogs blogs={blogs}/>
      </section>
    </Layout>
  )
}


export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}) {
      nodes {
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
export default Blog
