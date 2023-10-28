import React, { useState } from 'react'
import "./Login.scss"
import { Link} from "react-router-dom"
import { axiosClient } from '../../Utils/axiosClient';


function Login() {

   const [ email,setemail]=useState('');
   const [password,setpassword]=useState('');


   async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await axiosClient.post('/auth/login', {
            email,
            password
        });


    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="Login">
        <div className="LoginBox">
            <h2 className="heading">Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" className='email' id='email'  
                
                onChange={(e)=>{setemail(e.target.value)}}
                />
        
                <label htmlFor="password">password</label>
                <input type="password" className='password' id='password' onChange={(e)=>{setpassword(e.target.value)}}/>
                <input type="submit" className='submit' id='submit' onClick={handleSubmit} />
            </form>
            <p>Do not have account? <Link to='/signup'>Signup</Link></p>
        </div>
    </div>
  )
}

export default Login