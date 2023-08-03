import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
