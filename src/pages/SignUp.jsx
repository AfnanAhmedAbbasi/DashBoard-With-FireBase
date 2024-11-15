import React, { useState } from 'react';
import { Input } from 'antd';
import './pages.css';
import { useNavigate } from 'react-router-dom';
import { signUpUser, dataSet } from '../firebase/FireBaseFunctions';

const SignUp = () => {
    const [model, setModel] = useState({});
    const navigate = useNavigate();

    const handleSignUp = async () => {
        const user = await signUpUser(model); 
        if (user) {
            await dataSet("users", model, user.uid); 
            alert("User added successfully!");
            setModel({}); 
            navigate('/home')
        } else {
            console.log("Sign up failed");
        }
    };

    return (
        <div className="flex flex-col loginMain justify-center gap-7">
            <h2>Welcome to Dashboard Join us today!</h2>
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
            <input
                type="number"
                placeholder="Enter Contact Number"
                value={model.phone || ''} 
               
                onChange={(e) => setModel({ ...model, phone: e.target.value })}
            />
            <input
                type="text"
                placeholder="Enter Website"
                value={model.website || ''} 
                onChange={(e) => setModel({ ...model, website: e.target.value })}
            />
            <button className="createAccBtn" onClick={handleSignUp}>Create Account</button>
            <p>Already have an account? <button onClick={() => navigate('/login')}>Login</button></p>
        </div>
    );
};

export default SignUp;
