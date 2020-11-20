import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"
import ReactMarkdown from "react-markdown"


const query = graphql`
  {
    allStrapiAbouts(sort: {fields: strapiId, order: DESC}, filter: {info_about: {eq: true}}) {
      nodes {
        title
        class
        content
        strapiId
      }
    }
  }
`

const About = ({showLink}) => {
  const data = useStaticQuery(query)
  const {
    allStrapiAbouts: { nodes:abouts },
  } = data
  return (
    <section className="section bg-grey page-about">
      <div className="section-title">
      <h1>Электрик Харьков - Все виды работ под ключ и с гарантией</h1>
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
      {showLink && (
        <Link to="/prices/" className="btn center-btn" >
          услуги
        </Link>
      )}
    </section>
    
    
    
  )
}

export default About


/* allStrapiPrices(sort: {fields: strapiId, order: DESC})  {
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
} */



/* {abouts.map((item)=>{

  return (
    <article key={item.strapiId} className="about">
      <h4>{item.title}</h4>
      <div className="price-name">
      
      {
        prices.map((price)=>{
          const {desc} = price
          return (
            <div key={desc.id}>
              {desc.name}
            </div>
          )
        })
      }
      </div>
       
      <p>{item.text}</p>
    </article>
  )
})} */