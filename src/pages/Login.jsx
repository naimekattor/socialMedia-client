import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext } from 'react'
import { FaApple, FaGoogle } from "react-icons/fa";
import googleIcon from '../assets/images/google.png'
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { AuthContext } from '@/context/authContext/AuthContext';
const Login = () => {
  const {setUser}=useContext(AuthContext);
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const data=new FormData(form);
    const formData=Object.fromEntries(data.entries());
    axios.post('http://localhost:5000/api/auth/login',formData,{
      withCredentials:true,
    })
    .then(res=>{
         console.log(res.data);
      if (res.data.email) {
        setUser(res.data)
       navigate('/')
      }
   
      
    }).catch(err=>{
      console.log(err);
      
    })
    console.log((formData));
    

  }
  return (
    <div className='flex items-center justify-center h-screen w-full bg-[#3f2c68]'>
      <div className=''>
        <h1 className='text-[42px] font-medium text-secondary mb-10'>Welcome Back</h1>
        <form action="" className='text-secondary space-y-4'onSubmit={handleLogin}>
          <label htmlFor="">Email Adress</label>
          <Input type='email'name='email' placeholder='Enter Your Email Adress' />
          <label htmlFor="">Password</label>
          <Input type='password'name='password' placeholder='Enter Your Password' />
          <Button variant='outline' className='w-full text-primary' type='submit'>Login</Button>

        </form>
        <div className='text-center py-6 text-secondary'>
          <span className=' underline'>Forgot Your Password</span>
          <h2 className=''>Or</h2>
        </div>

        <Button variant='outline' className='w-full mb-4'><img className="w-5 h-5 mr-2 inline" src={googleIcon} alt="" />
          Login Using Google</Button>
        <Button variant='outline' className='w-full bg-transparent text-secondary'><FaApple className='mr-2  inline' style={{ width: 30, height: 30 }} />Login Using Apple</Button>

        <h2 className='text-center text-secondary mt-3'>Dont have an account?<Link to={'/auth/signup'}>Sign up</Link> </h2>
      </div>

    </div>
  )
}

export default Login
