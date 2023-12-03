import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa"; // Assuming you are using react-icons
import "./courses.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
    return (
      <>
        <section className='coursesCard'>
          <div className='container grid2'>
            {coursesCard.map((val) => (
              <div className='items' key={val.id}>
                <div className='content flex'>
                  <div className='left'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                  </div>
                  <div className='text'>
                    <h1>{val.coursesName}</h1>
                    <div className='rate'>
                      {Array.from({ length: 5 }, (_, index) => (
                        <FaStar key={index} className={index < val.rating ? 'checked' : ''} />
                      ))}
                      <label htmlFor=''>{val.rating && val.rating.toFixed(1)}</label>
                    </div>
                    <div className='details'>
                      <div className='box'>
                        <div className='para'>
                          <span>{val.courTeacher.totalTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='price'>
                  <h3>
                    {val.priceAll} / {val.pricePer}
                  </h3>
                </div>
                <Link to="/signin">
                  <button className='outline-btn'>ENROLL NOW!</button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };
  
  export default CoursesCard;