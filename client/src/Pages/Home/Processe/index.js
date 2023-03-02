import React from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./processe.css";
import PlanningGrid from "./PlanningGrid";
import SettlingGrid from "./SettlingGrid";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <section className="processe_section">
        <Container>
          <Row>
            <Col>
              <AnimationOnScroll
                initiallyVisible={true}
                animateOnce={true}
                animateIn="animate__slideInDown"
              >
                <h1 className="text-center">
                  We know all the bureaucratic processes, <br />
                  so you don't have to.
                </h1>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateOnce={true}
                animateIn="animate__slideInUp"
              >
                <h6 className="section_desc">
                  Facing end of life and grieving are some of the hardest
                  moments we face, and they define us as human. Yet, these
                  profound moments have been complicated by legal forms,
                  customer service calls, and paperwork. Peacefully is here to
                  help so that you can focus on what matters. Whether you want
                  to plan for yourself, your spouse, your parent, or a friend,
                  Peacefully will help guide you through all the steps you need
                  to take. Peacefully is also there to help you handle all of
                  the affairs if something happens.
                </h6>
              </AnimationOnScroll>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs defaultActiveKey="planning" className="horizontal_tab">
                <Tab
                  eventKey="planning"
                  title="Planning"
                  className="horizontal_tab_data"
                >
                  <PlanningGrid />
                </Tab>
                <Tab
                  eventKey="settling_affairs"
                  title="Settling Affairs"
                  className="horizontal_tab_data"
                >
                  <SettlingGrid />
                </Tab>
              </Tabs>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
                <AnimationOnScroll
                  animateOnce={true}
                  animateIn="animate__slideInUp"
                >
                  <Link
                    className="custom_btn btn btn-primary banner_button"
                    to="/auth/signup"
                  >
                    Get Started
                  </Link>
                </AnimationOnScroll>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default index;
