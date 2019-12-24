import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"
import { useStaticQuery, graphql } from "gatsby"

function IndexPage(props) {
  const {
    allAirtable: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allAirtable {
          edges {
            node {
              data {
                description
                name
                color
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-center md:text-left md:fixed leading-none mb-8 my-name">
        zolon
      </h1>
      <h1 className="text-5xl text-center md:text-left">projects</h1>
      <div>
        {edges.map(e => (
          <Project {...e.node.data} />
        ))}
      </div>
      <span></span>
    </Layout>
  )
}

export default IndexPage
