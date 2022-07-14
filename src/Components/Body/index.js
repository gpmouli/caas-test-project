import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Columns from "../Columns";
import Cards from "../Cards";
import ModalWindow from "../Modal";
import content from "../../mockData/content";

const Body = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [modalCotent, setModalCotent] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setModalCotent(e);
    setShow(true);
  };

  const routeChange = () => {
    navigate("/application-form");
  };
  return (
    <>
      <ModalWindow
        title={modalCotent.title}
        description={modalCotent.moreInfo}
        show={show}
        handleClose={handleClose}
      />
      <Columns className="containerSec">
        <Row>
          {content.map((item, index) => (
            <>
              <Col xs={12} md={4}>
                <Cards
                  key={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  firstButton="Apply"
                  secondButton="More Info"
                  apply={routeChange}
                  moreInfo={() => handleShow(item)}
                />
              </Col>
            </>
          ))}
        </Row>
      </Columns>
    </>
  );
};

export default Body;
