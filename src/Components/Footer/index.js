import Nav from "react-bootstrap/Nav";
import Columns from "../Columns";

const Footer = () => {
  return (
    <Columns className="footerSec">
      <p className="text-left mt-4 mb-4">Interview Test System</p>
      <p className="text-left mt-4 mb-4">Apply for other licenses</p>
      <p className="text-left mt-4 mb-4">Go business</p>
      <div className="linkSec">
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="#">Contact Us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="#">Feedback</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Columns>
  );
};

export default Footer;
