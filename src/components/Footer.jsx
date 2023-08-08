import React from "react"

export default function Footer() {
  return (
    <footer className="p-4 bg-slate-900 text-slate-100 mt-auto text-center">
      &#169; {new Date().getFullYear()} #React-Router-Tutorial
    </footer>
  )
}
