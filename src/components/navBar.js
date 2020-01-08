import React from "react"
import { Link } from "gatsby"
import { FaInstagram, FaTelegramPlane, FaFacebook } from "react-icons/fa"
import { Navbar, Nav, Container, Row, Col, Form } from "react-bootstrap"
import Breadcrumb from "react-bootstrap/Breadcrumb"
const CustomNavbar = ({ pageInfo }) => {
  return (
    <>
      <Navbar expand="lg" id="site-navbar">
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">Home</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/gallery" className="link-no-style">
                <Nav.Link as="span" eventKey="gallery">
                  Gallery
                </Nav.Link>
              </Link>
              <Link to="/about" className="link-no-style">
                <Nav.Link as="span" eventKey="about">
                  About
                </Nav.Link>
              </Link>
            </Nav>

            <div></div>
            <Nav className="ml-auto">
              <a href="https://www.instagram.com/carolinareclaimed/">
                <FaInstagram color="afc0d7" size={25} />
              </a>

              <a href="mailto: CarolinaReclaimed@hotmail.com">
                <FaTelegramPlane color="afc0d7" size={25} />
              </a>
              <a href="https://www.facebook.com/carolinareclaimed">
                <FaFacebook color="afc0d7" size={25} />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
