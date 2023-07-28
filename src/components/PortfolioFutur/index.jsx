import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'uikit/dist/css/uikit-core.css';
import 'uikit/dist/js/uikit-core.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
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
    <section className="my-5 py-5">
      <div className="container">
        <div className="mb-5">
          <div>
            <TiretDisign></TiretDisign>
            <TitleStyle>LEARN PATH</TitleStyle>
          </div>
          <div className="mb-5 mb-md-5 pb-md-5">
            <TitleCustom className="text-secondary">
              Education & Skills
            </TitleCustom>
          </div>
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
            <div class="mb-3">
              <div class="row justify-content-center align-items-center">
                <div class="col-1">
                  <div>
                    <i
                      class="fab fa-java fa-2x me-3"
                      style={{ color: '#7e74f1' }}
                    ></i>
                  </div>
                </div>
                <div class="col">
                  <div class="progress text-center" style={{ height: '15px' }}>
                    <PurpleProgress
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '80%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      java/spring
                    </PurpleProgress>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center align-items-center">
                <div class="col-1">
                  <div>
                    <i
                      class="fab fa-react fa-2x me-3"
                      style={{ color: '#7e74f1' }}
                    ></i>
                  </div>
                </div>
                <div class="col">
                  <div class="progress text-center" style={{ height: '15px' }}>
                    <PurpleProgress
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '75%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      React.js
                    </PurpleProgress>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center align-items-center">
                <div class="col-1">
                  <div>
                    <i
                      class="fab fa-python fa-2x me-3"
                      style={{ color: '#7e74f1' }}
                    ></i>
                  </div>
                </div>
                <div class="col">
                  <div class="progress text-center" style={{ height: '15px' }}>
                    <PurpleProgress
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '50%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      python
                    </PurpleProgress>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center align-items-center">
                <div class="col-1">
                  <div>
                    <i
                      class="fab fa-wordpress fa-2x me-3"
                      style={{ color: '#7e74f1' }}
                    ></i>
                  </div>
                </div>
                <div class="col">
                  <div class="progress text-center" style={{ height: '15px' }}>
                    <PurpleProgress
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '60%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      Wordpress
                    </PurpleProgress>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div class="row justify-content-center align-items-center">
                <div class="col-1">
                  <div>
                    <i
                      class="fa-solid fa-c fa-2x me-3"
                      style={{ color: '#7e74f1' }}
                    ></i>
                  </div>
                </div>
                <div class="col">
                  <div class="progress text-center" style={{ height: '15px' }}>
                    <PurpleProgress
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '50%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      C/C++
                    </PurpleProgress>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PortfolioFutur;
