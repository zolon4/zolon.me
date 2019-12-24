import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/Project"

const projects = [
  { name: "whoops a daisy", color: "", description: "" },
  { name: "greenhouse", color: "", description: "" },
  { name: "whoops a daisy", color: "", description: "" },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-6xl md:fixed leading-none mb-8 my-name">Zolon</h1>
    <h1 className="text-5xl">projects</h1>
    <section>
      {projects.map(p => (
        <Project {...p} />
      ))}
    </section>
  </Layout>
)

export default IndexPage
