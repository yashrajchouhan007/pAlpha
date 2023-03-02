import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./reviews.css";
import { data } from "../Data";

const Default = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="customer_reviews">
        <Container>
          <Row>
            <Col>
              <h1>Customer Reviews</h1>
              {data.customerReviews && (
                <Slider className="reviews_slider" {...settings}>
                  {data.customerReviews.map((data, index) => {
                    return (
                      <>
                        <div
                          className="reviews_grid"
                          key={`customer_review_${index}`}
                        >
                          <div className="rev_profile d-flex align-items-center">
                            {/* <img src={data.image.default} alt="not found" /> */}
                            <div className="">
                              <h4>{data.name}</h4>
                              <ul className="rev_star_rating d-flex align-items-center list-styled-none">
                                {[...Array(data.count)].map((e, i) => (
                                  <li>
                                    <i className="fa fa-star"></i>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="rev_content">
                            <p>{data.description}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </Slider>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Default;
