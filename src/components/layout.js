import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Logo from "./Logo"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-8 md:px-16">{children}</main>
      <footer className="relative md:fixed w-full bottom-0 flex justify-center md:justify-end p-8">
        <a href="https://dingo.rodeo">
          <Logo />
        </a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
