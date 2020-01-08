import React from "react"
import { Row, Col, Container, div, ListGroup } from "react-bootstrap"
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
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="carouselimage"
            src={require("../images/roundtable.jpg")}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            className="carouselimage"
            src={require("../images/picnictable.jpg")}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </Container>
  </Layout>
)

export default IndexPage
