import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="my-5 py-5 border-top">
      <Container className="text-center">
        <Row className="justify-content-center my-3">
          <Col sm={12}>
            <i className="bi bi-whatsapp mx-3"></i>
            <i className="bi bi-github mx-3"></i>
            <i className="bi bi-instagram mx-3"></i>
            <i className="bi bi-facebook mx-3"></i>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="">꧁╭⊱𝘔. 𝘚𝘌𝘓⊱╮꧂</Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
