import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Главная",
    url: "/",
  },
  {
    id: 2,
    text: "Услуги и цены",
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
    text: "Контакты",
    url: "/contact/",
  },
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
    </ul>
  )
}
