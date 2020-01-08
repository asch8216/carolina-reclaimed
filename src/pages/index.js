import React from "react"
import { Container } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO
      title="Home"
      keywords={[
        `Carolina Reclaimed`,
        `Charlotte`,
        `North Carolina`,
        `furniture`,
        `custom furniture`,
        `South Carolina`,
      ]}
    />
    <Container className="text-center">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="carouselimage"
            src={require("../images/coffeetable.jpg")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="carouselimage"
            src={require("../images/roundtable.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="carouselimage"
            src={require("../images/picnictable.jpg")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  </Layout>
)

export default IndexPage
