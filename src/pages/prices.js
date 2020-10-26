import React from "react"
import Layout from "../components/Layout"
//import { graphql } from "gatsby"
import Prices from "../components/Prices"

const PricesPage = () => {
    return (
      <Layout>
        <section className="price-page">
          <Prices />
        </section>
      </Layout>
    )
  }

  
  
  export default PricesPage