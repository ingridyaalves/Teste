import React from 'react';
import banner from '../assets/banner.jpg';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>BEER LIST</h1>
        <p>APLICATIVO DE CERVEJAS.</p>
        <Link>
          <button>Peça agora</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
