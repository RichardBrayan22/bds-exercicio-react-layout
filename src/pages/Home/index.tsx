import NavBar from '../../components/NavBar';
import './styles.css';

import MainImage from '../../assets/images/main-car.png';
import Button from '../../components/Button';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <img src={MainImage} alt="MainImage" />
          </div>
        </div>
        <div className="base-card home-card-secundary">
            <div className='card-button-secundary'>
                <Button />
            </div>
            <div className='card-content-secundary'>
              <h6>Comece agora a navegação</h6>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
