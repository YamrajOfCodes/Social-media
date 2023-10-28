import React from 'react'
import { Link } from 'react-router-dom'
import  './Signup.scss'

function Signup() {
    return (
        <div className="Signup">
            <div className="SignupBox">
                <h2 className="heading">Login</h2>
                <form>
                <label htmlFor="name">Name</label>
                <input type="text" className='text' id='text' />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='email' id='email' />
                    <label htmlFor="password">password</label>
                    <input type="password" className='password' id="password" />
                    <input type="submit" className='submit' id='submit' />
                </form>
                <p>Already Have acount? <Link to="/login">Login</Link> </p>
            </div>
        </div>
      )
}

export default Signup