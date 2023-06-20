import backgroundImage from './pic.jpg';
import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="flex justify-center items-center h-screen css-selector"
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className={`bg-zinc-100 w-full max-w-[400px] p-8 rounded-lg ${isInputFocused ? 'input-focused' : 'input-blured'}`}>
        <h2 className="text-4xl font-bold text-center mb-6 text-customRed">Worker Sign In</h2>
        <form> 
          <div className="input-container flex flex-col mb-4">
            <label className="text-gray-500">Email</label>
            <input
              className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-white focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
              type="email"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
            />
          </div>
       
          <div className="input-container flex flex-col mb-4">
            <label className="text-gray-500">Password</label>
            <input
              className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
              type="password"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
          <div className="flex justify-between mb-4">
            <label className="flex items-center text-gray-400">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </label>
            <a href="index.html" className="text-teal-500">Forgot Password?</a>
          </div>
          <button className="w-full py-2 bg-teal-500 text-white hover:shadow:bg-teal-500/40 font-semibold rounded-lg">
            Sign In
          </button>
          <div className="flex justify-left text-gray-400 py-2">
            <p className="flex items-center">
              Don't have an Account?&ensp;
              <a href="index.html" className="text-teal-500">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
