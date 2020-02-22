/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetaData"

import "./layout.css"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cloud.typography.com/7428116/7733612/css/fonts.css"
        />
        <link
          href="https://cloud.typenetwork.com/projects/3334/fontface.css/"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
