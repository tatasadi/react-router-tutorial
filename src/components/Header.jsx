import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-teal-900 text-teal-100 p-4 flex justify-between">
      <h1>React-Router-Tutorial</h1>
      <nav className="flex gap-4">
        <NavLink
          to="."
          className={({ isActive }) =>
            isActive ? "font-bold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "font-bold" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="movies"
          className={({ isActive }) =>
            isActive ? "font-bold" : ""
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  )
}
