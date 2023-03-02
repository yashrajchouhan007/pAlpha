import React from "react";
import { Container } from "react-bootstrap";
import { data } from "../../Pages/Home/Data";

const Social = () => {
  const dt = new Date();
  return (
    <Container>
      <div className="new-footer-main">
        <div className="social-btns">
          {data.socials.map((data, key) => (
            <a
              key={`social_${key}`}
              href={data.url}
              rel="noreferrer"
              target="_blank"
              title={data.title}
              className="social"
            >
              <img
                className="icon"
                src={data.iconImage}
                alt="Social media icon"
              />
            </a>
          ))}
        </div>
        <div className="c-details">
          <a href="tel:(657) 999-0791" title="(657) 999-0791">
            (657) 999-0791
          </a>
        </div>
        <div className="c-details">
          <a href="mailto:hello@peacefully.io" title="hello@peacefully.io">
            hello@peacefully.io
          </a>
        </div>
        <div className="c-details textCenter"></div>
        <div className="c-details">
          <p>©Peacefully Inc. {dt.getFullYear()} </p>
        </div>
      </div>
    </Container>
  );
};
export default Social;
