import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./benefits.css";
import { data } from "../Data";

const Benefits = () => {
  return (
    <>
      <section className="benefit_info">
        <Container>
          <Row>
            {data.benefits.map((data, key) => {
              // console.log("data", data.imageName);
              return (
                <Col lg={4} md={4} sm={12} key={`benefit_${key}`}>
                  <div className="img-responsive">
                    <img src={data.imageName.default} alt="Not Found" />
                  </div>
                  <div className="benefit_heading">
                    <h3>{data.heading}</h3>
                  </div>
                  <div className="benefit_description">
                    <p>{data.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Benefits;
