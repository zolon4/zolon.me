import React from "react"

const Header = () => (
  <header className="flex flex-col md:flex-row justify-between text-3xl py-8 px-8 md:px-16">
    <span>
      software engineer @{" "}
      <a
        className="underline wavy"
        href="https://lemonlight.com"
        target="_blank"
      >
        lemonlight
      </a>
    </span>
    <a className="underline text-black wavy" href="mailto:zolon@dingo.rodeo">
      contact
    </a>
  </header>
)

export default Header
