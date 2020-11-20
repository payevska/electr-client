import React from "react"
import Title from "../components/Title"
import { graphql, useStaticQuery } from "gatsby"
import Price from "./Price"

const query = graphql`
  {
    allStrapiPrices(sort: {fields: strapiId, order: DESC})  {
      nodes {
        work
        strapiId
        desc {
          id
          measurement
          foamed
          brick
          cement
          name
        }
      }
    }
  }
`

const Prices = ({title}) => {
  const data = useStaticQuery(query)
  const {
    allStrapiPrices: { nodes:prices },
  } = data

  return (

      <section className="section prices">
        <div className="section-title">
          <h1>Услуги и цены в Харькове</h1>
          <div className="underline"></div>
        </div>
        <div className="prices-center">
          <div className="price-table">
            <ul className="row-head">
              <li className="colum-big table-li">Вид услуги</li>
              <li className="table-li">Единица измерения</li>
              <li className="wrap">
                <div className="colum-three">Цена, грн</div>
                <ul>
                  <li className="colum-left">Пенобетон</li>
                  <li className="colum-middle">Кирпич</li>
                  <li className="colum-right">Бетон</li>
                </ul>
              </li>
            </ul>
            {
              prices.map((price,id)=>{
                return (
                  <Price key={id} {...price}/>
                )
              })
            }  
          </div>  
        </div>
      </section>
  )
}

export default Prices
