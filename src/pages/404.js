import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="Ошибка" description="error electric" />
      <main className="error-page">
        <div className="error-container">
          <h1>страница находится в разработке</h1>
          <Link to="/" className="btn">
            вернуться на главную
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
