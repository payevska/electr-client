import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({blogs,title,showLink}) => {
  return (
    <section>
      <div className="section-center blogs-center">
        {blogs.map(blog=>{
          return <Blog key={blog.id} {...blog}/>
        })}
      </div>
      {showLink && (
        <Link to="/blog/" className="btn center-btn">
          Блог
        </Link>
      )}
    </section>
  )
}
export default Blogs
