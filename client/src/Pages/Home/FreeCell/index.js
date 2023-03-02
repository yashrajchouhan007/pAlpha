import React from "react";
import { Container } from "react-bootstrap";
import "./free-cell.css";
import { data } from "../Data";

const FreeCell = () => {
  return (
    <>
      <section className="peacefully-free-cell">
        <Container>
          <div className="p-free-text">
            <h2>{data.freeCell.heading}</h2>
            <p>{data.freeCell.description}</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FreeCell;
