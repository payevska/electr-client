import React from "react"
import Layout from "../components/Layout"
import Prices from "../components/Prices"
import SEO from "../components/SEO"


const PricesPage = () => {
    return (
      <Layout>
        <SEO title="Услуги и цены в Харькове" description="услуги и цены электромонтажа"/>
        <section className="price-page">
          <Prices title="Услуги и цены в Харькове"/>
        </section>
      </Layout>
    )
  }

  
  
  export default PricesPage