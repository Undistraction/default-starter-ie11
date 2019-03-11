import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import * as Yup from "yup"

export const SCHEMA = Yup.object().shape({
  example: Yup.string(),
})

const Header = ({ siteTitle }) => {
  const a = ["a", "b", "c"]
  console.log("Found", a.find(e => e === "b", a))
  console.log("Schema", SCHEMA)

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
