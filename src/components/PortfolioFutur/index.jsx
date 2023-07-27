import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'uikit/dist/css/uikit-core.css';
import 'uikit/dist/js/uikit-core.js';
import styled from 'styled-components';
import VerticalLinearStepper from './stepper';

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

const PurpleProgress = styled.div`
  background-color: #7e74f1;
`;

function PortfolioFutur() {
  return (
    <section>
      <div className="container">
        <div className="mb-5">
          <div>
            <TiretDisign></TiretDisign>
            <TitleStyle>LEARN PATH</TitleStyle>
          </div>
          <TitleCustom className="text-secondary">
            Education & Skills
          </TitleCustom>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <VerticalLinearStepper />
          </div>
          <div className="col-12 col-md-6 border-start border-top border-light">
            <p className="mt-5">
              For 2+ years, I have been continuously learning in the field of
              front-end and experimenting with new technologies and frameworks,
              and here you can see a summary of my skills.
            </p>
            <div className="mb-5">
              <p>Html</p>
              <div className="progress" style={{ height: '8px' }}>
                <PurpleProgress
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '25%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></PurpleProgress>
              </div>
            </div>
            <div className="mb-5">
              <p>Html</p>
              <div className="progress" style={{ height: '8px' }}>
                <PurpleProgress
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '25%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></PurpleProgress>
              </div>
            </div>
            <div className="mb-5">
              <p>Html</p>
              <div className="progress" style={{ height: '8px' }}>
                <PurpleProgress
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '25%' }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></PurpleProgress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PortfolioFutur;
