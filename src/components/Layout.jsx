import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="sm:m-10 p-4 sm:p-10 bg-white shadow  rounded-lg">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
