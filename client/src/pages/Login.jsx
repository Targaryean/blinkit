import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission and authentication logic here
    const {email, password} = formData
    
    try {
      const {formData} = await axios.post('/login', {
        email, password
      });
      if(formData.error){
        toast.error(formData.error)
      }
      else{
        toast.success('Account created successfully')
        setFormData({})
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-center bg-cover h-screen flex items-center justify-center">
      <div className="mx-auto p-8 rounded-lg shadow-md bg-white">
        { /* Optional logo */}
        {/* <img src="./logo.png" alt="Logo" className="w-32 mx-auto mb-8" /> */}

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="username" className="text-gray-700 text-sm mb-2">
            
            Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="appearance-none rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none px-3 py-2 mb-4"
          />

          <label htmlFor="password" className="text-gray-700 text-sm mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="appearance-none rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none px-3 py-2 mb-4"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>

          { /* Optional links */}
          <div className="flex justify-between mt-4">
            <a href="#" className="text-blue-500 hover:underline focus:outline-none">
              Forgot Password?
            </a>
            <a href="#" className="text-blue-500 hover:underline focus:outline-none">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
