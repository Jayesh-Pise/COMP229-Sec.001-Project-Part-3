import React, { useEffect, useState } from 'react';
import { homeAbout } from "../dummydata";
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

const CountingNumber = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      if (progress < duration) {
        const increment = (end / duration) * progress;
        setCount(Math.min(increment, end));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);

    return () => {
      startTimestamp = null;
    };
  }, [end, duration]);

  return <h1>{Math.round(count)}</h1>;
};

const About = () => {
  return (
    <div>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.jpg' alt='about-pic' />
          </div>

          <div className='right row'>
            <h3>LEARN ANYTHING</h3>
            <h1>Benefits About Online Learning Expertise</h1>

            {/* Move the items below the headings */}
            <div className='items'>
              {homeAbout.map((val) => (
                <div className='item flexSB' key={val.title}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className='awrapper'>
        <div className='background-image' style={{ backgroundImage: 'url("./images/awrapper.jpg")' }}>
          <div className='container'>
            <div className='box flex'>
              <div className='box1'>
                <img src='./images/graduation.png' alt='example-pic' />
                <div className='text'>
                  <CountingNumber end={3000} duration={2000} />
                  <h3>Success Stories</h3>
                </div>
              </div>

              <div className='box2'>
                <img src='./images/athlete.png' alt='example-pic' />
                <div className='text'>
                  <CountingNumber end={320} duration={2000} />
                  <h3>Trusted Tutors</h3>
                </div>
              </div>

              <div className='box3'>
                <img src='./images/calenders.png' alt='example-pic' />
                <div className='text'>
                  <CountingNumber end={1000} duration={2000} />
                  <h3>Schedules</h3>
                </div>
              </div>

              <div className='box4'>
                <img src='./images/macbook.png' alt='example-pic' />
                <div className='text'>
                  <CountingNumber end={587} duration={2000} />
                  <h3>Courses</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
