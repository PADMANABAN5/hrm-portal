import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
  
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
  
    setError('');
    setIsLoggedIn(true);
    navigate('/dashboard');  
  };
  

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        {isLoggedIn ? (
          <div className="success-msg">✅ Successfully Logged In!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && <div className="error-msg">{error}</div>}

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
