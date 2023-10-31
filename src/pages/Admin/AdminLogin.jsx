import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const AdminLogin = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const navigate = useNavigate()

  const handleLogin = () => {
    console.log('Trying to log in');
    if (username === 'admin' && password === 'admin') {
      // setIsLoggedIn(true);
      console.log('Login successful. isLoggedIn is true.');
      // navigate('/admin/dashboard');


    } else {
      setError('Username atau password salah.');
    }
  };

  

  return (
    <div>
      <h2>Admin Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
