// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Signup from '../Components/UserSignup';
import Signin from '../Components/UserSignin';
import Dashboard from '../Components/Dashboard';

export default function App() {
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState(null);

  const handleSignIn = (id,name) => {
      setUserId(id);
      setUserName(name);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={userId ? <Dashboard userId={userId} userName={userName} /> : null} />
        <Route path="/signin" element={<Signin onSignIn={handleSignIn} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
