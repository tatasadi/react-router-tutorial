import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-teal-900 text-teal-100 p-4 flex justify-between">
      <h1>#React-Router-Tutorial</h1>
      <nav className="flex gap-4">
        <NavLink to=".">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
  )
}
