import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="my-5 py-5 border-top">
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={12} md={4}>
            <Link to="/" className="navbar-brand text-uppercase fw-bold">
              M.
              <span
                className="bg-gradient p-1 rounded-3 text-light"
                style={{ backgroundColor: '#7E74F1' }}
              >
                SEL
              </span>
            </Link>
          </Col>
          <Col sm={12} md={4} className="border-start border-end">
            Mentions Légales
          </Col>
          <Col sm={12} md={4}>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-instagram mx-5"></i>
            <i className="bi bi-instagram"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
