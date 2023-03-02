import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Button } from "react-bootstrap";

import callActionImg from "../../../Assets/Images/new/call-action-bg.png";
import RequestDialog from "../dialog/RequestDialog";

import "./callAction.css";

const Default = () => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section
      className="call_to_Action"
      style={{
        backgroundImage: `url(${callActionImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center" md={12}>
            <h1>For Employers & Insurance</h1>
            <p>
              Help your employees get through the toughest times in their lives.
            </p>
            <ul className="list-styled-none d-flex justify-content-center callaction_btn_group">
              <li>
                <Button
                  className="btn_border"
                  style={{
                    marginRight: "20px",
                  }}
                  onClick={() => navigate("/employers/learn-more")}
                >
                  Learn More
                </Button>
                <Button
                  className="custom_btn"
                  onClick={(e) => setDialogOpen(true)}
                >
                  Request a Demo
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      {dialogOpen && <RequestDialog dialogClose={() => setDialogOpen(false)} />}
    </section>
  );
};

export default Default;
