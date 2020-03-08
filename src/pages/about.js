import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="About" />
    <Row>
      <Row className="familyphoto">
        <img src={require("../images/JK.jpg")} />
      </Row>
      <Col>
        <h1>Welcome to Carolina Reclaimed</h1>
        <p>
          We design and build custom furniture. See the gallery to see the kind
          of work we do. Please contact us via email at the link below to start
          a conversation about what we can do for you.
        </p>
        {/* <p>
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham. Where can I get some? There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look
          even slightly believable. If you are going to use a passage of Lorem
          Ipsum, you need to be sure there isn't anything embarrassing hidden in
          the middle of text. All the Lorem Ipsum generators on the Internet
          tend to repeat predefined chunks as necessary, making this the first
          true generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
          is therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </p> */}
        {/* <Link to="/">Go back to the homepage</Link> */}
      </Col>
    </Row>
  </Layout>
)

export default About
