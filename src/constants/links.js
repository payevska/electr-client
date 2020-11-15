import React from "react"
import { Link } from "gatsby"
import { FaPhoneSquare } from "react-icons/fa"

const data = [
  {
    id: 1,
    text: "Главная",
    url: "/",
  },
  {
    id: 2,
    text: "Услуги",
    url: "/prices/",
  },
  {
    id: 3,
    text: "Галерея",
    url: "/projects/",
  },
  {
    id: 4,
    text: "Блог",
    url: "/blog/",
  },
  {
    id: 5,
    text: "Kонтакты",
    url: "/contact/",
  }  
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
      <li className="links-phone">
        <FaPhoneSquare className="icon-phone"/>
        <div className="number-phone">050-922-33-76</div>
      </li>
    </ul>
  )
}
