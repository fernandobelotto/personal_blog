import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import NavBar from "./nav-bar"
import { Heading } from "@chakra-ui/layout"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = null
  } else {
    header = title
  }

  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
