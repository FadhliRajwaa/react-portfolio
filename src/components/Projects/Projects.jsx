import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
import eccomerce from "../../Assets/Projects/eccomerce.jpeg";
import klinik from "../../Assets/Projects/klinik-portfolio.jpeg";
import campus from "../../Assets/Projects/website-smart-campus.jpeg";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={klinik}
              isBlog={false}
              title="Website Klinik"
              description="The creation of a clinic website as a promotional platform with an online registration system and an online patient data recap accessible only to clinic members, built using the WordPress CMS."
              demoLink="http://klinik.dindutin.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eccomerce}
              isBlog={false}
              title=" Website E-Commerce "
              description="I am creating a website for selling various types of coffee, featuring buyer and admin login systems, along with a payment transaction system provided by Midtrans. This website is being built using the WordPress CMS."
              demoLink="http://eccomerceweb.dindutin.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campus}
              isBlog={false}
              title="Website Smart-Campus"
              description="The smart campus website I'm creating is solely to fulfill a campus assignment. It includes a student data entry form and a few minimal animation effects. I'm building this website using the Bootstrap framework, Vanilla JavaScript, Vanilla CSS, and PHP."
              demoLink="http://websitesmartcampus-fad.vercel.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
