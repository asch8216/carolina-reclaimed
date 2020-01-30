import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="About" />
    <Row className="familyphoto">
      <img src={require("../images/jk.jpg")} />
    </Row>
    <Col>
      <h1>Hello from the second page</h1>
      <p>Welcome to page 3</p>
      <Link to="/">Go back to the homepage</Link>
    </Col>
  </Layout>
)

export default About
