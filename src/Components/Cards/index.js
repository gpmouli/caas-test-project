import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  return (
    <Card className="cardsMain">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button onClick={props.apply} className="firstBtn" variant="success">
          {props.firstButton}
        </Button>
        <Button onClick={props.moreInfo} className="secondBtn">
          {props.secondButton}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
