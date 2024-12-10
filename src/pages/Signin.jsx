import React, { useState } from 'react';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function LoginForm() {

    const [textPassword, setTextPassword] = useState("password")
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const navigate = useNavigate(); 
    

    const handleShowText = () =>{
        setShowPassword(!showPassword)
        setTextPassword("text")
    }

    const handleShowPassword = () =>{
        setShowPassword(!showPassword)
        setTextPassword("password")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            localStorage.setItem('user', JSON.stringify(response.data.user))
            if(response?.status == 200){
              
              navigate('/student/answerPIS')
            }
            console.log(response)
        } catch (err) {
          console.log(err)
        }
      };

  return (
    <div className="p-3 flex items-center justify-center min-h-screen bg-gray-200 lg:mt-[-5rem] ">
      <div className="w-96 p-8 bg-white rounded-lg shadow-lg relative">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold text-blue-700 mb-6">MHSLEARN</h2>

        <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="relative mb-4">
          <label htmlFor="email" className="text-sm text-gray-600">Email</label>
          <div className="flex items-center mt-1">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 pr-10 border rounded-md bg-gray-100 focus:outline-none"
              placeholder="Enter your email"
            />
            <FaEnvelope className="absolute right-3 text-gray-400" />
          </div>
        </div>

        {/* Password Input */}
        <div className="relative mb-2">
          <label htmlFor="password" className="text-sm text-gray-600">Password</label>
          <div className="flex items-center mt-1">
            <input
              id="password"
              type={textPassword}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 pr-10 border rounded-md bg-gray-100 focus:outline-none"
              placeholder="Enter your password"
            />
            {showPassword ? (
                <FaEyeSlash className="absolute right-3 text-gray-400 cursor-pointer" onClick={handleShowPassword} />
            ) : (
                <FaEye className="absolute right-3 text-gray-400 cursor-pointer" onClick={handleShowText} />
            )}
          </div>
        </div>

        {/* Forgot Password Link */}
        <div className="flex justify-end ">
          {/* <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Forgot Password?</a> */}
        </div>
        <div className="flex justify-start mb-3 md:gap-2">
          <Link to="/regular-student/sign-in" className='text-sm text-gray-500 hover:text-gray-700'>Regular Student</Link>
        </div>

        {/* Sign In Button */}
        <button type='submit' className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition mb-3">
          Sign In
        </button>
        
        </form>
        {/* <Link to="/employee/sign-in" className='text-sm text-gray-500 hover:text-gray-700'>Employee</Link> */}
        <h1 className='text-sm text-gray-500'>Sign in as <Link className='hover:text-gray-700' to="/teacher/sign-in">Teacher</Link> or <Link className='hover:text-gray-700' to="/employee/sign-in">Admin</Link>?</h1>
      </div>
    </div>
  );
}
