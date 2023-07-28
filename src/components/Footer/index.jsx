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
            <Link
              data-toggle="tooltip"
              title="github"
              to="https://github.com/mboumela-elton"
              className="text-decoration-none text-secondary"
            >
              <i className="bi bi-github mx-3"></i>
            </Link>
            <Link
              data-toggle="tooltip"
              title="whatsapp"
              to="https://wa.me/+237691873720"
              className="text-decoration-none text-secondary mx-2"
            >
              <i className="bi bi-whatsapp mx-3"></i>
            </Link>
            <Link
              data-toggle="tooltip"
              title="linkledin"
              to="https://www.linkedin.com/in/elton-mboumela-679a1226b/"
              className="text-decoration-none text-secondary"
            >
              <i className="bi bi-linkedin mx-3"></i>
            </Link>
            <Link
              data-toggle="tooltip"
              title="mail"
              to="mailto:mboumelae@gmail.com?subject=Need more informations"
              className="text-decoration-none text-secondary mx-2"
            >
              <i className="bi bi-envelope-at mx-3"></i>
            </Link>
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
