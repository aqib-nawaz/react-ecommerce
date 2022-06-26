import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./images/logo.svg";
import { BsFillCartFill } from "react-icons/bs";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Products from "./components/Products";
import MensClothing from "./components/Category/MensClothings";
import Electronics from "./components/Category/Electronics";
import Jewellery from "./components/Category/Jewellery";

function App() {
  return (
    <BrowserRouter>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="mr-5">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-center "
            />{" "}
            <span className="ml-2 fw-bold " style={{ color: "#41e0fd" }}>
              ReactStore
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>

              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/category/jewelery">
                  Jewellery
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/mensclothing">
                  Men's Clothing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/electronics">
                  electronics
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <span>
            <BsFillCartFill className=" fs-2 fw-bold" />{" "}
            <span className="fw-bold">My Cart</span>
          </span>
        </Container>
      </Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/mensclothing" element={<MensClothing/>} />
          <Route path="/category/electronics" element={<Electronics/>} />
          <Route path="/category/jewelery" element={<Jewellery/>} />
        </Routes>
      </div>
      <footer
        className="text-center"
        style={{ backgroundColor: "#41e0fd", width: "100%", padding: "10px" }}
      >
        <span className="fw-bold text-gray ">copyrigth @ 2022</span>
      </footer>
    </BrowserRouter>
  );
}

export default App;
