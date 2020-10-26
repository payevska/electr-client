import React from "react"
//import Layout from "../components/Layout"
import Title from "../components/Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Price from "./Price"
//import SEO from "../components/SEO"

const query = graphql`
  {
    allStrapiPrices(sort: {fields: strapiId, order: DESC}, filter: {desc: {elemMatch: {brick: {eq: false}, panel: {eq: false}}}})  {
      nodes {
        work
        strapiId
        desc {
          id
          measurement
          brick
          panel
          name
          price
        }
      }
    }
  }
`

const Prices = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiPrices: { nodes:prices },
  } = data
  const [value, setValue] = React.useState(0)
  const { work, desc } = prices[value]

  return (
      <section className="section prices">
        <Title title="Услуги и цены" />
        <div className="prices-center">
          <div className="price-table">
            <ul>
              <li className="colum-big">Вид услуги</li>
              <li>Единица измерения</li>
              <ul className="colum-three">
                <li className="wrap">Цена, грн</li>
                <li className="wrap">
                  <ul>
                    <li>Кирпич</li>
                    <li>Панель</li>
                  </ul>
                </li>  
              </ul>
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
        {/* <Link to="/about" className="btn center-btn">
          more info
        </Link> */}
      </section>
  )
}

export default Prices

{/* <div className="btn-container">
            {prices.map((item,index)=>{
              return (
                <button 
                  key={item.strapiId} 
                  onClick={()=> setValue(index)}
                  className={`price-btn ${index === value && 'active-btn'}`}
                >
                  {item.work}
                </button>
              )
            })}
          </div>
          <article className="price-info">
            <h3>{work}</h3>
            <p className="price-date"></p>
            {
              desc.map((item)=>{
                return (
                  <div key={item.id}>
                    <FaAngleDoubleRight className="price-icon"></FaAngleDoubleRight>
                    <p>{item.name}</p>
                  </div>
                )
              })
            }
          </article> */}