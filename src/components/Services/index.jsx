import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleStyle = styled.h6`
  display: inline-block;
  color: var(--cinder-light, #656d72);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
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
  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 7px;
  width: 100px;
`;

const CardStyle = styled.div`
  width: 18rem;
`;

const IconStyle = styled.i`
  font-size: 4rem;
  display: inline-block;
  margin: auto;
  text-align: center;
`;
function Services() {
  return (
    <section className="my-5 py-5">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div>
            <TiretDisign></TiretDisign>
            <TitleStyle>SERVICES</TitleStyle>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5 mb-md-5 pb-md-5">
          <TitleCustom className="text-secondary">Expertise</TitleCustom>
        </div>
        <div className="row justify-content-center align-items-center gx-md-5 gy-4">
          <div className="col-12 col-md-3">
            <CardStyle className="card w-100 h-100">
              <div className="card-img-top">
                <IconStyle className="bi bi-palette d-block"></IconStyle>
              </div>
              <div className="card-body mx-auto d-block">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </CardStyle>
          </div>
          <div className="col-12 col-md-3">
            <CardStyle className="card w-100 h-100">
              <div className="card-img-top">
                <IconStyle className="bi bi-globe d-block"></IconStyle>
              </div>
              <div className="card-body mx-auto d-block">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </CardStyle>
          </div>
          <div className="col-12 col-md-3">
            <CardStyle className="card w-100 h-100">
              <div className="card-img-top">
                <IconStyle className="bi bi-globe d-block"></IconStyle>
              </div>
              <div className="card-body mx-auto d-block">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </CardStyle>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
