import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAppContext } from "../contexts/AppContext";
import Switches from "./Switch";
import UseColor from "../hooks/useColor";

export default function AppNavbar() {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);
  const [isHover5, setIsHover5] = useState(false);
  const { isDarkMode } = useAppContext();
  const {Color} = UseColor();

  function onHoverIn(
    setHoverState: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    setHoverState(true);
  }

  function onHoverOut(
    setHoverState: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    setHoverState(false);
  }
  return (
    <Navbar
      expand="sm"
      fixed="top"
      style={{
        backgroundColor: isDarkMode ? "#060c0f" : "#fff",
        boxShadow: isDarkMode
          ? "2px 3.464px 7px 0px rgba(255, 255, 255, 0.101)"
          : "2px 3.464px 7px 0px rgba(0, 0, 0, 0.101)",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          className="nav_link_title"
          style={{ color: isDarkMode ? "#ddd" : "#111" }}
        >
          Ezetendu{" "}
          <span
            style={{ color: isDarkMode ? "var(--cyan)" : "var(--secondary)" }}
          >
            Williams
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-sm-0">
            <Nav.Link
              className="nav_link_item"
              style={{ color: Color(isHover1) }}
              onMouseEnter={() => onHoverIn(setIsHover1)}
              onMouseOut={() => onHoverOut(setIsHover1)}
              href="#home"
            >
              Home
            </Nav.Link>

            <Nav.Link
              className="nav_link_item"
              style={{ color: Color(isHover2) }}
              onMouseEnter={() => onHoverIn(setIsHover2)}
              onMouseOut={() => onHoverOut(setIsHover2)}
              href="#about"
            >
              About
            </Nav.Link>

            <Nav.Link
              className="nav_link_item"
              style={{ color: Color(isHover3) }}
              onMouseEnter={() => onHoverIn(setIsHover3)}
              onMouseOut={() => onHoverOut(setIsHover3)}
              href="#services"
            >
              Services
            </Nav.Link>

            <Nav.Link
              className="nav_link_item"
              style={{ color: Color(isHover4) }}
              onMouseEnter={() => onHoverIn(setIsHover4)}
              onMouseOut={() => onHoverOut(setIsHover4)}
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="nav_link_item"
              style={{ color: Color(isHover5) }}
              onMouseEnter={() => onHoverIn(setIsHover5)}
              onMouseOut={() => onHoverOut(setIsHover5)}
              href="#contact"
            >
              Contact
            </Nav.Link>
            <Switches />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
