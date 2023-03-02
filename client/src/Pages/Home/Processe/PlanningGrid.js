import React from "react";
import { Col, Row } from "react-bootstrap";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { data } from "../Data";

const PlanningGrid = () => {
  return (
    <Row>
      {data && (
        <>
          {data.planning.map((data, index) => {
            return (
              <>
                <Col key={`planningGrid_${index}`} md={4}>
                  <AnimationOnScroll
                    animateOnce={true}
                    animateIn="animate__slideInUp"
                  >
                    <div className="processe_tile">
                      <div className="processe_image">
                        <img src={data.image} alt="not found" />
                      </div>
                      <div className="processe_parent">
                        <div className="processe_label">
                          <p>{data.name}</p>
                        </div>
                        <div className="processe_description">
                          <p className="text-center">{data.description}</p>
                        </div>
                      </div>
                    </div>
                  </AnimationOnScroll>
                </Col>
              </>
            );
          })}
        </>
      )}
    </Row>
  );
};

export default PlanningGrid;
