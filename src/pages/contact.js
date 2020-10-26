import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>напишите мне</h3>
          <form action="https://formspree.io/f/xgepoppg" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="имя" className="form-control"/>
              <input type="email" name="email" placeholder="e-mail" className="form-control"/>
              <textarea name="message" rows="5" placeholder="сообщение" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              отправить
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact