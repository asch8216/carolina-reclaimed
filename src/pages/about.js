import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="About, family" />
    <div className="familyphoto">
      <img src={require("../images/family.jpg")} />
    </div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
