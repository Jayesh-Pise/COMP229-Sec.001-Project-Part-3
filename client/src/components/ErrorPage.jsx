import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/ErrorPage.css'

const ErrorPage = () => {
  return (
    <div>
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, page not found!</h2>
                <p className="mb-5">
                    The page you are looking for might have been removed had its name changed or its temporarily unavailable.
                </p>
              <NavLink to="/">Back To Homepage</NavLink>
            </div>
        </div>
      
    </div>
  )
}

export default ErrorPage
