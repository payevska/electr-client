import React from "react"
import { FaBolt, FaScrewdriver, FaRssSquare, FaPlug } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaPlug className="service-icon" />,
    title: "Монтаж",
    text: `Монтаж электрической проводки.`,
  },
  {
    id: 2,
    icon: <FaBolt className="service-icon" />,
    title: "Сборка щита",
    text: `Сборка щитов.`,
  },
  {
    id: 3,
    icon: <FaScrewdriver className="service-icon" />,
    title: "Подключение оборудования",
    text: `Подключение оборудования.`,
  },
  {
    id: 4,
    icon: <FaRssSquare className="service-icon" />,
    title: "Слаботочные сети",
    text: `Слаботочные сети.`,
  },
]
