import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs }
  }
}) => {
  return (
    <Layout>
      <SEO title="Блог" description="блог по электрике" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="Блог"/>
      </section>
    </Layout>
  )
}


export const query = graphql`
  {
    allStrapiBlogs {
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
