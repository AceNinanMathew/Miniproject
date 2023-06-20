import backgroundImage from './pic.jpg';
import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);
  const [workType, setWorkType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);


  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleMaleCheckboxChange = () => {
    setIsMaleChecked(true);
    setIsFemaleChecked(false);
  };

  const handleFemaleCheckboxChange = () => {
    setIsFemaleChecked(true);
    setIsMaleChecked(false);
  };

  const handleWorkTypeChange = (event) => {
    setWorkType(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='abc'
    style={{
      padding:'10px',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height:'112vh',
    }}
    >
    <div
      className="flex justify-center items-center h-screen css-selector" >
      <div className="flex-grow flex justify-center items-center">
        <div className='mt-[100px] mb-6'>
      <form className="flex flex-wrap justify-center" onSubmit={handleSubmit}>
        <div className="flex">
          <div
            className={`bg-zinc-100 w-full max-w-[400px] p-8 rounded-lg border-2 border-gray-300
            ${
              isInputFocused ? 'input-focused' : 'input-blured'
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-6 text-customRed">
              General Information
            </h2>
            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Name</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-white focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="text"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
            </div>

            {/* Add Aadhar Number Input */}
            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Aadhar Number</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-white focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="text"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="flex items-center text-gray-500">
                <p>Gender&ensp;&ensp;&ensp;&ensp;</p>
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={isMaleChecked}
                  onChange={handleMaleCheckboxChange}
                />
                <p>Male&ensp;&ensp;&ensp;&ensp;</p>
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={isFemaleChecked}
                  onChange={handleFemaleCheckboxChange}
                />
                <p>Female</p>
              </label>
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Work Type</label>
              <select
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                value={workType}
                onChange={handleWorkTypeChange}
              >
                <option value="">Select Work Type</option>
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
              </select>
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Email</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Password</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Confirm Password</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
          </div>

          <div
            className={`bg-zinc-50 w-full max-w-[400px] p-8 rounded-lg border-2 border-gray-300
            ${
              isInputFocused ? 'input-focused' : 'input-blured'
            }`}
          >
            <h2 className="text-4xl font-bold text-center mb-6 text-customRed">
              Contact Details
            </h2>
            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Street</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="text"
                value={street}
                onChange={handleStreetChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Zip Code</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="text"
                value={zipcode}
                onChange={handleZipcodeChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Place</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="text"
                value={place}
                onChange={handlePlaceChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Country</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="text"
                value={country}
                onChange={handleCountryChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Phone Number</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="input-container flex flex-col mb-4">
              <label className="text-gray-500">Date of Birth</label>
              <input
                className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-yellow-200 focus:bg-gray-400 focus:outline-none focus:text-white text-gray-500"
                type="date"
                value={dateOfBirth}
                onChange={handleDateOfBirthChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
     
      <div className="input-container flex flex-col mb-4">
      <label className="flex items-center text-gray-500">
      <input
      className="mr-2"
      type="checkbox"
      checked={isCheckboxChecked}
      onChange={handleCheckboxChange}
    />
    <span className="text-gray-500">
      By clicking, you are accepting our terms and conditions
    </span>
  </label>
</div>
            {/* Add Button at the bottom */}
            <div className="button-container">
              <button
                className="rounded-lg bg-customRed text-white font-bold py-2 px-4 mt-4"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
      </div>
    </div>
    </div>
  );
}
