// SignUp.jsx

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { IoIosMail, IoIosLock } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineWork } from 'react-icons/md';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import '../styles/SignUp.css';

const SignUp = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //Backend Code Starts Here

  const navigate = useNavigate();

  const PostData = async (e) => {
    e.preventDefault();
  
    const { name, email, phone, work, password, cpassword } = user;
  
    const res = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
  
    const data = await res.json();
  
    if (res.status !== 201 || data.error) {
      window.alert(data.error || "Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
  
      navigate("/signin");
    }
  };
  

  //Backend Code Ends Here


  return (
    <div>
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">

              <form method="POST" className="register-form" id="register-form">
                <h2 className="form-title">Sign Up</h2>

                <div className="form-group">
                  <label htmlFor="name" className="input-icon">
                    <FaUser />
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off"
                  value={user.name}
                  onChange={handleInputs}
                   placeholder="Name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="input-icon">
                    <IoIosMail />
                  </label>
                  <input type="email" name="email" id="email" autoComplete="off"
                  value={user.email}
                  onChange={handleInputs}
                   placeholder="Email" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="input-icon">
                    <FaPhone />
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete="off"
                  value={user.phone}
                  onChange={handleInputs}
                   placeholder="Phone Number" />
                </div>

                <div className="form-group">
                  <label htmlFor="work" className="input-icon">
                    <MdOutlineWork />
                  </label>
                  <input type="text" name="work" id="work" autoComplete="off"
                  value={user.work}
                  onChange={handleInputs} 
                  placeholder="Work" />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="input-icon">
                    <IoIosLock />
                  </label>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs} 
                    placeholder="Password"
                  />
                  {passwordVisible ? (
                    <BsEyeSlashFill onClick={togglePasswordVisibility} className="eye-icon"/>
                  ) : (
                    <BsEyeFill onClick={togglePasswordVisibility} className="eye-icon" />
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword" className="input-icon">
                    <IoIosLock />
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs} 
                    placeholder="Confirm Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit" 
                  value="register" onClick={PostData} />
                </div>
              </form>

              <div className="signup-image">
                <figure>
                  <img src="../images/signup.jpg" alt="registration pic" />
                </figure>
                <NavLink to="/signin" className="signup-image-link">
                  I am already registered
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
