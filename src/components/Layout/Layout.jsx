import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import Navbar from "../Navbar"
import Sidebar from "../Sidebar"

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <>
    <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    <Navbar/>
    <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout