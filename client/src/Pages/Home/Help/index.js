import React from "react";
import { Container } from "react-bootstrap";
import "./help.css";
import { data } from "../Data";

const Help = () => {
  return (
    <>
      <section className="help_section">
        <div className="section_heading">
          <h2 className="text-center">What we help with</h2>
        </div>
        <Container>
          <ul>
            {data.help.map((data, key) => {
              return <li key={`help_${key}`}>{data.item}</li>;
            })}
          </ul>
        </Container>
      </section>
    </>
  );
};

export default Help;
