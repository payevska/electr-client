import React from "react"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  const [isOpen,setIsOpen] = React.useState(false);
  const toggleSidebar=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout