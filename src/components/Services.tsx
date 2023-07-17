import { Card, Col, Row } from "react-bootstrap";
import Angular from "../assets/angular.svg";
import Bootstrap from "../assets/bootstrap.svg";
import Css from "../assets/css.svg";
import ExpressJs from "../assets/express-js.svg";
import Git from "../assets/git.svg";
import Html from "../assets/html5.svg";
import JavaScript from "../assets/javascript.svg";
import MongoDb from "../assets/mongodb.svg";
import NodeJs from "../assets/node-js.svg";
import React from "../assets/react.svg";
import TailWind from "../assets/tailwind-css.svg";
import TypeScript from "../assets/typescript.svg";
import { useAppContext } from "../contexts/AppContext";
import WindowSize from "../utils/WindowSize";

const services = [
  {
    id: 1,
    icon: "bx bxl-dev-to",
    title: "Web Development",
    subtitle:
      "I develop simple and complex web applications, e-commerce services, file structures and social networking services",
  },
  {
    id: 2,
    icon: "bx bxs-devices",
    title: "Web Design",
    subtitle:
      "I also help to make a webpage / web application more interactive and beautiful with the use of custom animations",
  },
  {
    id: 3,
    icon: "bx bx-laptop",
    title: "Problem Solving",
    subtitle:
      "I make use of my heuristic prowess to solve complex problems, write clean and reusable codes",
  },
];
const technologies = [
  {
    id: 1,
    icon: Html,
    technology: "HTML",
  },
  {
    id: 10,
    icon: Css,
    technology: "CSS",
  },
  {
    id: 2,
    icon: JavaScript,
    technology: "JavaScript",
  },
  {
    id: 3,
    icon: React,
    technology: "React",
  },
  {
    id: 4,
    icon: Bootstrap,
    technology: "Bootstrap",
  },
  {
    id: 5,
    icon: TypeScript,
    technology: "TypeScript",
  },
  {
    id: 6,
    icon: Git,
    technology: "Git",
  },
  {
    id: 7,
    icon: Angular,
    technology: "Angular",
  },
  {
    id: 8,
    icon: TailWind,
    technology: "Tailwind",
  },
  {
    id: 9,
    icon: NodeJs,
    technology: "Node JS",
  },
  {
    id: 11,
    icon: MongoDb,
    technology: "Mongo DB",
  },
  {
    id: 12,
    icon: ExpressJs,
    technology: "Express JS",
  },
];

export default function Services() {
  const { isDarkMode } = useAppContext();
  return (
    <section className="mt-4 container" id="services">
      <div className="title">
        <h2 className="text-center">My Services</h2>
      </div>

      <Row xs={1} md={2} lg={3}>
        {services.map((service) => (
          <Col key={service.id}>
            <Card
              style={{
                height: WindowSize() ? "180px" : "130px",
                backgroundColor: isDarkMode ? "#060c0f" : "#fff",
                color: isDarkMode ? "#ddd" : "#111",
                boxShadow: isDarkMode
                  ? "2px 3.464px 7px 0px rgba(255, 255, 255, 0.101)"
                  : "2px 3.464px 7px 0px rgba(0, 0, 0, 0.101)",
              }}
            >
              <Card.Header as="h4">{service.title}</Card.Header>
              <Card.Body>
                <i
                  className={service.icon}
                  style={{
                    fontSize: "20px",
                    color: isDarkMode ? "var(--cyan)" : "var(--secondary)",
                  }}
                ></i>
                <br />
                <small>{service.subtitle}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-3">
        <h5 className="text-center">Technologies I use</h5>
        <Row xs={4} md={4} lg={6} className="mt-3">
          {technologies.map((el) => (
            <Col key={el.id}>
              <div
                className="d-flex flex-column align-items-center justify-content-center mt-4"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "16px",
                  boxShadow: isDarkMode
                    ? "2px 3.464px 6px 0px rgba(255, 255, 255, 0.101)"
                    : "2px 3.464px 6px 0px rgba(0, 0, 0, 0.101)",
                }}
              >
                <p className="skIcons">
                  <img src={el.icon} alt={el.technology} />
                </p>
                <p className="skCard">{el.technology}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
