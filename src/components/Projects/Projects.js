import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import crypto from "../../Assets/Projects/crypto.jpg";
import dictionary1 from "../../Assets/Projects/dictionary1.jpg";
import cricket from "../../Assets/Projects/cricket.jpg";
function Projects() {
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
              imgPath={crypto}
              isBlog={false}
              title="Timeless NFT"
              description="Cryptocurrency projects are becoming increasingly popular as more people recognize the potential of digital currencies. These projects are built on blockchain technology, which provides a secure and decentralized way of storing and transferring value."
              ghLink="https://github.com/Ayushjindal09/timelessNFT.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code Editor"
              description="A code editor project is a software tool that provides developers with a platform to write, edit, and debug code. It is an essential component of the software development process, as it helps developers to create and modify code quickly and efficiently."
              ghLink="https://github.com/Ayushjindal09/codeide"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dictionary1}
              isBlog={false}
              title="Dictionary"
              description="A dictionary project is a software tool that provides a collection of words and their definitions, often organized in alphabetical order. It is an essential resource for language learners, writers, and anyone looking to expand their vocabulary."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricket}
              isBlog={false}
              title="Virtual Cricket"
              description=" A virtual cricket project is a software-based simulation of a cricket match that allows users to experience the excitement of the sport without leaving their homes. It is an interactive and immersive way to play and learn about cricket, and can be enjoyed by people of all ages and skill levels."
              ghLink="https://github.com/Ayushjindal09/Game"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
