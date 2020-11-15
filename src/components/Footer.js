import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks className="footer-links"></SocialLinks>
        <h4>
          copyright &copy; {new Date().getFullYear()}
          <span> Electric</span>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
