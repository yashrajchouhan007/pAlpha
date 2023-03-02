import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import "./features.css";
import { data } from "../Data";

const Default = () => {
  return (
    <>
      <section className="features">
        <Container>
          {data.features && (
            <Row>
              {data.features.map((data, index) => {
                return (
                  <Col md={4} key={`featured_card_${index}`}>
                    <Card className="featured_card">
                      <Card.Img src={data.image.default} />
                      <Card.Body>
                        <Card.Title>
                          <h3>{data.name}</h3>
                        </Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default Default;
