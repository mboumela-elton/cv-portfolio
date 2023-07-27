import Header from '../../components/Header';
import Hero from '../../components/Hero/index';
import Services from '../../components/Services';
import PortfolioFutur from '../../components/PortfolioFutur';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
  return (
    <div className="container-fluid">
      <Header />
      <Hero />
      <Services />
      <PortfolioFutur />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
