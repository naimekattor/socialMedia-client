import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { FaApple, FaGoogle } from "react-icons/fa";
import googleIcon from './../assets/images/google.png'
const Signup = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full bg-[#3f2c68]'>
      <div className=''>
        <h1 className='text-[42px] font-medium text-secondary mb-10'>Create an Account</h1>
        <form action="" className='text-secondary space-y-4'>
          <label htmlFor="">Username</label>
          <Input type='text' placeholder='Enter Your Email Adress' />
          <label htmlFor="">Email Adress</label>
          <Input type='email' placeholder='Enter Your Email Adress' />
          <label htmlFor="">Password</label>
          <Input type='password' placeholder='Enter Your Email Adress' />
          <label htmlFor="">Confirm password</label>
          <Input type='password' placeholder='Enter Your Password' />
          <Button variant='outline' className='w-full text-primary'>Sign up</Button>

        </form>
        <div className='text-center py-6 text-secondary'>

          <h2 className=''>Or</h2>
        </div>

        <Button variant='outline' className='w-full mb-4'><img className="w-5 h-5 mr-2 inline" src={googleIcon} alt="" />
          Sign up Using Google</Button>
        <Button variant='outline' className='w-full bg-transparent text-secondary'><FaApple className='mr-2' style={{ width: 30, height: 30 }} />Sign up Using Apple</Button>


      </div>

    </div>
  )
}

export default Signup
