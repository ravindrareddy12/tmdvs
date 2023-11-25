// UserSignin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserSignin = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [responseData, setResponseText] = useState('');
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/signin', formData);

      if (response && response.data && response.data.message === 'User signed in successfully') {
        onSignIn(response.data.userId,response.data.userName);
        setResponseText(response.data.message);
    
        navigate('/dashboard');
      } else {
        console.log('Message not found');
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  
  const styles = `
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    div {
      text-align: center;
      max-width: 500px;
      height: 30vh;
      width: 100%;
      border: 1px solid white;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    input {
      margin-bottom: 10px;
      width: 100%;
      padding: 8px;
    }

    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <h2 style={{ marginBottom: 30 }}>User Signin</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleInputChange} placeholder="Email" required/><br />
        <input type="password" name="password" onChange={handleInputChange} placeholder="Password" required/>
        <button type="submit">Sign In</button>
        <p>{responseData}</p>
      </form>
    </div>
  );
};

export default UserSignin;
