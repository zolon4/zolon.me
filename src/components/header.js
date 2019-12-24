import React from "react"

const Header = () => (
  <header className="flex flex-col md:flex-row justify-between text-3xl py-8 px-8 md:px-16">
    <span>
      full stack developer @{" "}
      <a className="underline wavy" href="https://mazsystems.com">
        maz
      </a>
    </span>
    <a className="underline text-black wavy" href="mailto:zolon@dingo.rodeo">
      contact
    </a>
  </header>
)

export default Header
