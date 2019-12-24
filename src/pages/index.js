import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"

const projects = [
  {
    name: "whoops a daisy",
    color: "#FF0000",
    description:
      "an exploration of 35mm film and a roadtrip from Austin to Los Angeles",
    link: "http://whoopsadaisy.studio",
  },
  {
    name: "greenhouse",
    color: "#FFEA78",
    description:
      "an ad free experrience for learning about Los Angeles golf courses",
    link: "https://greenhouse.golf",
  },
  {
    name: "unofficial cookbook.la",
    color: "#F4EBD9",
    description:
      "an unofficial website for my favorite grocery store in Los Angeles",
    link: "https://cookbookla.netlify.com",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-center md:text-left md:fixed leading-none mb-8 my-name">
      zolon
    </h1>
    <h1 className="text-5xl text-center md:text-left">projects</h1>
    <div>
      {projects.map(p => (
        <Project {...p} />
      ))}
    </div>
    <span></span>
  </Layout>
)

export default IndexPage
