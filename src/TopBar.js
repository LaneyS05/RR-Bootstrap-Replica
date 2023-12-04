import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function TopBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img
            style={{ position: "relative", right: 650 }}
            src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg"
            alt="logo"
          />{" "}
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav
            style={{
              padding: "24px 40px 20px 40px",
              fontSize: "18px",
              lineHeight: "26px",
              fontWeight: "bolder",
              display: "flex",
            }}
          >
            <Nav.Link
              style={{
                position: "relative",
                left: 1250,
                color: "#343538",
                padding: 5,
                fontSize: "18px",
                top: -50,
              }}
              href="#LogIn"
            >
              Log In
            </Nav.Link>
            <Button
              variant="success"
              style={{
                background: "lightgreen",
                position: "relative",
                left: 1260,
                fontSize: "18px",
                padding: 5,
                margin: 10,
                borderRadius: 20,
                top: -55,
              }}
            >
              Sign Up
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
