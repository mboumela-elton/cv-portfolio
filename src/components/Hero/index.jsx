import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'uikit/dist/css/uikit-core.css';
import 'uikit/dist/js/uikit-core.js';
import { Link } from 'react-router-dom';
import portrait from '../../assets/portrait.svg';
import styled from 'styled-components';
import cv from '../../file/CV-MBOUMELA_SOB_Elton_Lewis.pdf';

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
  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-style: normal;
  display: inline-block;
  width: 6rem;
`;
const Mboumela = styled.h1`
  display: inline-block;
  width: 25%;
  color: var(--purple, #7e74f1);
  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-style: normal;
`;

function Hero() {
  return (
    <section className="mb-5 pb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 ">
            <TiretDisign></TiretDisign>
            <TitleStyle>MY NAME IS</TitleStyle>
            <br />
            <TitleCustom className="text-secondary">Elton</TitleCustom>
            <Mboumela>Mboumela.</Mboumela>
            <p className="d-none d-md-block">
              Creative front-end developer with more than +2 years of experience
              in enterprise companies and startups. Proficient in Html, Tailwind
              Css, Javascript and React. Passionate about UI/UX
            </p>
            <div className="py-2">
              <a href={cv} dowload>
                <button className="btn btn-secondary">dowload cv</button>
              </a>
            </div>
            <ul className="list-inline">
              <li className="list-inline-item mx-md-5">
                <Link
                  data-toggle="tooltip"
                  title="github"
                  to="https://github.com/mboumela-elton"
                  className="text-decoration-none text-secondary"
                >
                  <i className="bi bi-github"></i>
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link
                  data-toggle="tooltip"
                  title="whatsapp"
                  to="https://wa.me/+237691873720"
                  className="text-decoration-none text-secondary"
                >
                  <i className="bi bi-whatsapp"></i>
                </Link>
              </li>
              <li className="list-inline-item mx-2 mx-md-5">
                <Link
                  data-toggle="tooltip"
                  title="linkledin"
                  to="https://www.linkedin.com/in/elton-mboumela-679a1226b/"
                  className="text-decoration-none text-secondary"
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
              </li>
              <li className="list-inline-item mx-2 mx-md-0">
                <Link
                  data-toggle="tooltip"
                  title="mail"
                  to="mailto:mboumelae@gmail.com?subject=Need more informations"
                  className="text-decoration-none text-secondary"
                >
                  <i className="bi bi-envelope-at"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 offset-md-2 col-md-5">
            <div class="uk-animation-toggle" tabindex="0">
              <div
                class="uk-card uk-card-default uk-card-body uk-animation-fade"
                style={{ background: 'transparent' }}
              >
                <img
                  src={portrait}
                  alt="photo_profil"
                  className="w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
