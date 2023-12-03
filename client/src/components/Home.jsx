import React from 'react';
import { Link } from 'react-router-dom';  
import About from './About';
import { FaLongArrowAltRight } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <h1>WELCOME TO ACADEMIA</h1>
            <h2>Best Online Education Expertise</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <Link to="/signin" className='primary-btn'>
                GET STARTED NOW <FaLongArrowAltRight />
              </Link>
              <Link to="/courses" className='secondary-btn'> 
                VIEW COURSE <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>

      <About />
    </>
  );
}

export default Home;
