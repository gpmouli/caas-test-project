import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Body = (props) => {
  return (
    <div className={props.className}>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12}></Col>
          <Col xs={12} md={12}>
            {props.children}
          </Col>
          <Col xs={12} md={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Body;
