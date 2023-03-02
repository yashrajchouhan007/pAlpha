import React, { useState } from "react";
import { Row, Col, Container, Tab } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ArrowRight } from "react-feather";
import { data } from "../Data";

import "./works.css";

const Work = () => {
  const [key, setKey] = useState("first");

  return (
    <>
      <section className="work_section">
        <Container>
          <Row>
            <Col>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__slideInUp"
              >
                <h1 className="text-center">How it works</h1>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__slideInUp"
              >
                <h6 className="section_desc">
                  Peacefully is transforming estate planning and administration
                  through personalized care support that you can control from an
                  online dashboard.
                </h6>
              </AnimationOnScroll>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tab.Container
                activeKey={key}
                // onSelect={(k) => setKey(k)}
              >
                <Row>
                  <Col sm={5}>
                    <div variant="pills" className="flex-column">
                      {data.newWorks.map((data, index) => {
                        return (
                          <div
                            className={`vertical_tab ${
                              key === data.key ? "active" : ""
                            }`}
                            eventKey={data.key}
                            onMouseEnter={() => setKey(data.key)}
                            key={`tab_title_${index}`}
                          >
                            <div className="d-flex justify-content-between align-items-center vertical_tab_title">
                              <div className="">
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>
                              </div>
                              <div>
                                <div className="arrow_icon">
                                  <ArrowRight />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                  <Col sm={7}>
                    <Tab.Content>
                      {data.newWorks.map((data, index) => {
                        return (
                          <Tab.Pane
                            eventKey={data.key}
                            key={`tab_content_${index}`}
                          >
                            <div className="tab_content_image">
                              <img src={data.image} alt="not found" />
                            </div>
                          </Tab.Pane>
                        );
                      })}
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Work;
