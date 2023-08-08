import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="m-4 p-4 bg-white shadow  rounded-lg h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
