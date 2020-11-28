import React from "react"
import Title from "../components/Title"
import { graphql, useStaticQuery } from "gatsby"
import Price from "./Price"
import ReactMarkdown from "react-markdown"


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
    allStrapiAbouts(sort: {fields: strapiId, order: DESC}, filter: {info_about: {eq: true},title: {eq: "Услуги"}}) {
      nodes {
        title
        class
        content
        strapiId
      }
    }
  }
`

const Prices = ({title}) => {
  const data = useStaticQuery(query)
  const {
    allStrapiPrices: { nodes:prices },
    allStrapiAbouts: { nodes:abouts }
  } = data

  return (
    <section>
      <div className="prices">
        <div className="section-title">
          <h2>Услуги и цены в Харькове</h2>
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
      </div>
      <div className="section about">
        <div className="section-title">
          <h1>Электромонтажные работы высокого качества, в Харькове</h1>
          <div className="underline"></div>
        </div>
        <div className="section-center about-center">
          {abouts.map(item=>{
            return(
              <div key={item.strapiId} className={item.class}>
                <ReactMarkdown source={item.content}/>
              </div>
              )
          })}
        </div>  
      </div>
    </section>
  )
}

export default Prices
