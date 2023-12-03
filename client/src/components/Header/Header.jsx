import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <div className="logo">
            <h1>ACADEMIA</h1>
            <h3>ONLINE EDUCATION & LEARNING</h3>
        </div>
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 40%; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      margin-top: 7px;

      font-size: 3rem; /* Adjust the font size as needed */
    }

    h3 {
      width: 300px;
      margin-bottom: 5px;
      font-size: 1.4rem; /* Adjust the font size as needed */
      color: #888; /* Adjust the color as needed */
    }
  }
`;


export default Header
