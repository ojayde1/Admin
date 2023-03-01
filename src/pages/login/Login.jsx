import React from 'react';
import { Link } from 'react-router-dom';
import "./login.scss"

function Login() {
  return (
    <div className='login'>
      <div className="left">
        <h1>Kindly login into your Dashboard</h1>
      </div>
      <div className="right">
       <div className="card">
        <form action="">
          <input type="text" placeholder='username'/>
          <input type="text" placeholder='password'/>
          <Link to="/">
          <button type="submit">submit</button>
          </Link>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login