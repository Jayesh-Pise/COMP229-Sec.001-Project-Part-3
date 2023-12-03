// SignIn.jsx

import React, { useState } from 'react';
import { NavLink,  useNavigate } from 'react-router-dom';
import { IoIosMail, IoIosLock } from 'react-icons/io';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import '../styles/SignIn.css';

const SignIn = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  
  //Backend Code Starts Here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/auth/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },

      body:JSON.stringify({
         email, 
         password
      })

    })

    const data = res.json();

    if(res.status === 400 || data.error){
      window.alert(data.error || "Invalid Credentials");
      console.log("Invalid Credentials");
    }else {
      window.alert("Login Sucessfull");
      console.log("Login Sucessfull");
      navigate("/");
    }
  }

  //Backend Code Ends Here



  return (
    <section className="signin">
      <div className="container">
        <div className="signin-content">
          <div className="signin-form">

            <div className="signin-image">
              <figure>
                <img src="../images/signin.jpg" alt="signIn pic" />
              </figure>
              <NavLink to="/signup" className="signup-image-link">
                Create an Account
              </NavLink>
            </div>


          <form method="POST" className="form" id="signin-form">
              <h2 className="form-title">Sign In</h2>

              <div className="form-group">
                <label htmlFor="email" className="input-icon">
                  <IoIosMail />
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  {passwordVisible ? (
                    <BsEyeSlashFill onClick={togglePasswordVisibility} className="eye-icon"/>
                  ) : (
                    <BsEyeFill onClick={togglePasswordVisibility} className="eye-icon" />
                  )}
                </div>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Sign In"
                  onClick={loginUser}
                />
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
