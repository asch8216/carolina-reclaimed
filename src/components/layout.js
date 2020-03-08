/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FaInstagram, FaTelegramPlane, FaFacebook } from "react-icons/fa"
import { Link } from "gatsby"
// import { instagram } from "react-icons/lib/fa/instagram"
import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} />
            </Col>
          </Row>
          <Navbar pageInfo={pageInfo} />
          <Row noGutters>
            <Col>
              <Container className="mt-5">
                <main>{children}</main>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <Row noGutters>
            <Col className="footer-col">
              <footer>
                <span>
                  <a href="https://www.instagram.com/carolinareclaimed/">
                    <FaInstagram color="afc0d7" size={40} />
                  </a>

                  <a href="mailto: carolinareclaimed@hotmail.com">
                    <FaTelegramPlane color="afc0d7" size={40} />
                  </a>
                  <a href="https://www.facebook.com/carolinareclaimed">
                    <FaFacebook color="afc0d7" size={40} />
                  </a>
                </span>
              </footer>
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
)

export default Layout
