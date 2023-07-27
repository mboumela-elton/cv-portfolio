import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pin from '../../assets/icons/pin.svg';
import phone from '../../assets/icons/phone-call.svg';
import mail from '../../assets/icons/mail.svg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const TitleStyle = styled.h6`
  display: inline-block;
  color: var(--cinder-light, #656d72);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  line-height: 8.303px;
  letter-spacing: 5.595px;
`;

const TiretDisign = styled.div`
  display: inline-block;
  width: 10.536px;
  height: 3.692px;
  background: var(--light-4, #d9d9d9);
  margin-right: 10px;
`;

const TitleCustom = styled.h1`
  color: var(--cinder, #232e35);
  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-weight: 50px;
  margin-top: auto;
`;

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <section>
      <Container>
        <div>
          <div>
            <TiretDisign></TiretDisign>
            <TitleStyle>CONTACT</TitleStyle>
          </div>
          <TitleCustom className="text-secondary">Call me</TitleCustom>
        </div>
        <Row className="align-items-center justify-content-center gy-3 gx-3">
          <Col sm={12} md={8}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="Form.ControlInput1">
                <Form.Control type="text" placeholder="Your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Form.ControlInput2">
                <Form.Control type="email" placeholder="email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  placeholder="message"
                  rows={5}
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: '#7E74F1' }}
              >
                Submit form
              </Button>
            </Form>
          </Col>
          <Col md={{ offset: 1 }}>
            <div className="my-4">
              <img
                src={pin}
                alt="localisation"
                width={50}
                className="bg-light rounded-4 mx-5"
              />
              <span style={{ display: 'inline-block', position: 'absolute' }}>
                <h5 className="mb-0">Yaoundé</h5>
                <h6 className="mt-0">Melen</h6>
              </span>
            </div>
            <div className="my-4">
              <img
                src={phone}
                alt="localisation"
                width={50}
                className="bg-light rounded-4 mx-5"
              />
              <span style={{ display: 'inline-block', position: 'absolute' }}>
                <h5 className="mb-0">Yaoundé</h5>
                <h6 className="mt-0">Melen</h6>
              </span>
            </div>
            <div className="my-4">
              <img
                src={mail}
                alt="localisation"
                width={50}
                className="bg-light rounded-4 mx-5"
              />
              <span style={{ display: 'inline-block', position: 'absolute' }}>
                <h5 className="mb-0">Yaoundé</h5>
                <h6 className="mt-0">Melen</h6>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
