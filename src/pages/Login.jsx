import React, { useState } from 'react'; // Import useState hook
import './pages.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../firebase/FireBaseFunctions';

const Login = () => {
  const [model, setModel] = useState({});  
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    const user = await loginUser(model);
    if (user) {
      alert("Login successful!");
      navigate('/home');
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <div className="flex flex-col loginMain justify-center gap-7">
        <h2 className="abc">Welcome to Dashboard!</h2>
        
        <input
          type="text"
          placeholder="Enter Name"
          value={model.name || ''}  
          onChange={(e) => setModel({ ...model, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={model.email || ''}  
          onChange={(e) => setModel({ ...model, email: e.target.value })}
        />
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter Password"
            value={model.password || ''}  
            onChange={(e) => setModel({ ...model, password: e.target.value })}
          />
        </label>
        
        <button className="createAccBtn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
