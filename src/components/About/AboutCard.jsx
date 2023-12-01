import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple"> Fadhli Rajwaa Rahmana </span>
            from <span className="purple"> Semarang, Indonesia.</span>
            <br />
            I am a third-semester student at Stikubank University, majoring in
            Computer Engineering.
            <br />
            My goal is to become a full-stack developer or to establish a
            business within the technology industry.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Design Website
            </li>
            <li className="about-activity">
              <ImPointRight /> Travellers
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best of humanity is those who are beneficial to others."{" "}
          </p>
          <footer className="blockquote-footer">Fadhli R.R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
